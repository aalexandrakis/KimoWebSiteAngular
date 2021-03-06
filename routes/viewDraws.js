
var express = require('express');
var router = express.Router();
var functions = require('../public/javascripts/functions');

router.get('/:dateFrom/:dateTo', function(req, res) {
    req.getConnection(function(err,connection){
        query = 'SELECT * FROM draw where drawDateTime between \"'+
                functions.fromEuroToIsoWithDelimiters(req.params["dateFrom"]).trim()+':00\" and \"'+
                functions.fromEuroToIsoWithDelimiters(req.params["dateTo"]).trim()+':59\"';
        console.log(query);
        connection.query(query ,function(err,rows)     {

        if(err)
            res.status(500).send({"status":"DB-ERROR", "message":"Error Selecting : %s " + err });
            res.send({draws: rows});
         });
    });

});

module.exports = router;

