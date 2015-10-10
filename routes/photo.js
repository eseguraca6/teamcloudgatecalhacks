var express = require('express');
var router = express.Router();

router.post('/photo', function(req, res) {
    // Take the photo from the form, save it to the database

    // Send the information to the front end
    res.render('index');
});
