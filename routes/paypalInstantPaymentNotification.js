var express = require('express');
var router = express.Router();
var functions = require('../public/javascripts/functions.js')
/* POST reset password. */


router.get('/', function(req, res) {
	res.status(200).send();
//	req, res, url, data, dataCallBack, endCallBack
	newReq = {};
	newReq.cmd = "_notify-validate";
	newReq += req.body;
	console.log(newReq);
	response = "";
	functions.externalHttpPost(null, null, newReq, "https://www.sandbox.paypal.com/cgi-bin/webscr",

	function(data){
		response += data;
	},
	function(err, end){
		if (err){
			console.log(err);
		} else {
			console.log(response);
		}
	});
});


module.exports = router;