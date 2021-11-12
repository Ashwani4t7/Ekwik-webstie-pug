var mysql = require('mysql');


exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'ashwani',
    password: '=+mU5vGs8j?y',
    database: 'ekwik_digital_new'

});

exports.initDB = function(connection){
    connection.connect(function(err){
        if (err) throw err;
        console.log("connected!");
    });
}