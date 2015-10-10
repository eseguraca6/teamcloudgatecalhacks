var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    path: {type: String, default: 'http://localhost:3000/public/upload/default.png'}
});
