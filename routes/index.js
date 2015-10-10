var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    // Query the database for all the images
    var images = null;

    // Send it to the map
    res.render('index', { photos: photos });
});

module.exports = router;
