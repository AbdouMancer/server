var con = require('../config/db');

var executeQuery = {

    exec: function(query, callback) {
        con.query(query, function(err, result, fields) {
            if (err) {
                console.log('request failed !!')
                throw err
            } else {
                return callback(JSON.stringify(result))
            }
        });
    }
}

module.exports = executeQuery;