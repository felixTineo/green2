const aws = require('aws-sdk');
const s3 = new aws.S3({});
const multerS3 = require('multer-s3');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './static'),
  filename: (req, file, cb) => cb(null, file.originalname)
})

const upload = multer({ storage });

/*const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'greenlink-ftandco',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
});*/

module.exports = upload;
