var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');
var fs = require('fs');
var path = require('path');


//Tables
var mongojs = require('mongojs');
var db = mongojs('admin:batsignal@ds041861.mongolab.com:41861/batsignal');
var userscollection = db.collection('users');
var guides = db.collection('guide');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

var server = app.listen(3000, function () {

        var host = server.address().address
        var port = server.address().port

        console.log('Example app listening at http://%s:%s', host, port);

});




app.get('/', function(req, res) {
  res.send('Hello Local UX. Welcome to the Launch Hackathon')
});

app.get('/createevent', function(req, res){
    res.render('createevent');
});

app.post('/createevent', function(req, res){
  console.log(req.body);
	if(!req.body.title || !req.body.category || !req.body.timeStart || !req.body.timeEnd || !req.body.price || !req.body.description){
     return res.send(400, 'Missing guide ID');

	}
    else{
	guides.update({'title': req.body.title}, {"title": req.body.title, "category": req.body.category,"timeStart":req.body.timeStart,"timeEnd": req.body.timeEnd,"price": req.body.price, "description": req.body.description, "eventPhoto": 'photos/' + req.body.title}, {upsert: true});
			if(req.body.photo){
				var random = Math.floor((Math.random() * 100) + 1);
		        var newPath = __dirname + 'photos/' + req.body.title + "/" +  random + ".jpg";
		     	}
    }
    

})