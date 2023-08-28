const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const timeout = require('connect-timeout');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const routes = require('./routes/index');
const cron = require('node-cron');
const Slots = require("./models/Slots");

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', routes);
app.use(timeout('60s'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//connect db
connectDB();

app.get('/', (req, res) => {
  res.json('Its Working');
});

// deleting old slots
const deleteOldSlots = async () => {
  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
    await Slots.deleteMany({ slotDate: { $lt: sevenDaysAgo } });
    console.log('Old slots deleted successfully.');
  } catch (error) {
    console.error('Error deleting old slots:', error);
  }
};

cron.schedule('0 0 * * *', deleteOldSlots);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
