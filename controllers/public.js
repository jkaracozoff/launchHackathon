//Public controller
var fs = require('fs');
//Tables
var mongojs = require('mongojs');
var db = mongojs('admin:batsignal@ds041861.mongolab.com:41861/batsignal');
var guides = db.collection('guides');

exports.createevent = function(req, res) {
  res.render('createevent.ejs', {
    title: 'Create Event'
  });
};

exports.postevent = function(req, res){
    console.log(req.files);

	if(!req.body.title || !req.body.category || !req.body.timeStart || !req.body.timeEnd || !req.body.price || !req.body.description){
     return res.status(500).send('Something broke!');

	}
    else{
	guides.update({'title': req.body.title}, {"title": req.body.title, "category": req.body.category,"timeStart":req.body.timeStart,"timeEnd": req.body.timeEnd,"price": req.body.price, "description": req.body.description, "location": req.body.geo}, {upsert: true});
			if(req.files.length > 0){
				var tmp_path = req.files.photo.path;
				var random = Math.floor((Math.random() * 100) + 1);
		        var target_path = './photos/' + req.body.title  +  random + ".jpg";
					 fs.rename(tmp_path, target_path, function(err) {
				        if (err) throw err;
				        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
				        fs.unlink(tmp_path, function() {
				       
				            if (err) throw err;
				            guides.update({'title': req.body.title},{"eventPhoto": target_path});
				            res.status(200).send('Event Created and file uploaded ' + req.files.photo.size + ' bytes');

				        });
				    });
				}
		    else{
		    	res.status(200).send("Success!!")
		    }		
    }

    };				                           




