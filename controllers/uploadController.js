const multer = require('multer');
const path = require('path');

exports.uploadFile = async (req, res) => {
  var fileName;
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../petMedFrontend/upload');
    },
    filename: (req, file, cb) => {
      fileName = Date.now() + path.extname(file.originalname);
      cb(null, fileName);
    },
  });

  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg'
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    },
  }).single('file');

  upload(req, res, async (err) => {
    if (err) {
      return res.json({
        status: 'FAILURE',
        message_en: 'Upload Failed!',
        error: err,
      })
    }
    else {
      return res.json({
        status: 'SUCCESS',
        message_en: 'Uploaded Successfully!',
        file: req.file.filename
      }) 
    }})
};