var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '199.189.248.203',
    user: 'kuwait_script',
    insecureAuth: 'true',
    password: 'Khaled99663055',
    database: 'kuwait_snpc38',
})

connection.connect(function(err) {
    if (err){
        console.log("Server mysql non disponible");
}

});
module.exports = connection