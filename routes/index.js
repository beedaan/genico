var express = require('express');
var multer = require('multer');
var router = express.Router();
var done = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/photo', function(req, res) {
  if(done==true) {
    console.log(req.files);
    res.end('File uploaded.');
  }
});

router.use(multer({ dest: './uploads',
  rename: function (fieldname, filename) {
    return filename+Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to ' + file.path);
    done=true;
  }
}));

module.exports = router;
