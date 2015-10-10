var express = require('express')
var multer  = require('multer')
var router = express.Router();
var upload = multer({ dest: './public/uploads' })

var app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any


  res.redirect('index');
})
