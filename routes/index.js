var express = require('express');
var router = express.Router();
var records = require('../business/records');
var request = require('request');

router.get('/api/v1/recordsByName/:name',records.getFromDBByName);
router.get('/api/v1/recordsByStart/:start',records.getFromDBByStart);









router.all('*', function(req, res) {
    res.status(404)
    res.send("Error not found")
    return;
});









//router.delete('/api/v1/product/:id', partner.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */

module.exports = router;
