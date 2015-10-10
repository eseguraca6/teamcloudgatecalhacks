module.exports = function(app, mongoose) {

    var connect = function() {
        var options = {
            server: {
                socketOptions: {
                    keepAlive : 1
                },
                auto_reconnect: true
            }
        };
        mongoose.connect('http://localhost:3000/lifeInADay', options);
    };
    connect();

    // Error handler
    mongoose.connection.on('error', function(err) {
        console.log('Mongo Connection Error: Please ' +
                    'make sure MongoDB is running. ', err);
    });
    // Reconnect when closed
    mongoose.connection.on('disconnected', function() {
        connect();
    });
};
