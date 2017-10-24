var db = require('../datalayer/dbaccess');

var records = {
    getFromDBByName: function (req , res) {
        if(req.params.name) {
            db.exec("use kuwait_snpc38", function callback(result) {
                db.exec("select * from hg38 WHERE Name='"+ req.params.name +"'",function callback(result) {
                    var records1 = JSON.parse(result)
                    db.exec("use kuwait_snpc", function callback(result) {
                        db.exec("select * from hg19 WHERE Name='"+ req.params.name +"'",function callback(result) {
                            var records2 = JSON.parse(result)
                            var j=records2.length;
                            var length = records1.length;
                            for(var i=0;i<j ;i++) {
                                records1[length++] = records2[i]
                            }
                            res.json(records1);
                        })                 
                     })
                })
            })
        }
    },
    getFromDBByStart: function (req , res) {
        if(req.params.start) {
            db.exec("use kuwait_snpc38", function callback(result) {
                db.exec("select * from hg38 WHERE start='"+ req.params.start +"'",function callback(result) {
                    var records1 = JSON.parse(result)
                    db.exec("use kuwait_snpc", function callback(result) {
                        db.exec("select * from hg19 WHERE start='"+ req.params.start +"'",function callback(result) {
                            var records2 = JSON.parse(result)
                            var j=records2.length;
                            var length = records1.length;
                            for(var i=0;i<j ;i++) {
                                records1[length++] = records2[i]
                            }
                            res.json(records1);
                        })                 
                     })
                })
            })
        }
    }
};


module.exports = records;