//Public controller


exports.createevent = function(req, res) {
  res.render('createevent.ejs', {
    title: 'Create Event'
  });
};

exports.postevent = function(req, res){

	if(!req.body.title || !req.body.category || !req.body.timeStart || !req.body.timeEnd || !req.body.price || !req.body.description){
     return res.status(500).send('Something broke!');

	}
    else{
	guides.update({'title': req.body.title}, {"title": req.body.title, "category": req.body.category,"timeStart":req.body.timeStart,"timeEnd": req.body.timeEnd,"price": req.body.price, "description": req.body.description, "eventPhoto": 'photos/' + req.body.title}, {upsert: true});
			if(req.body.photo){
				var random = Math.floor((Math.random() * 100) + 1);
		        var newPath = __dirname + 'photos/' + req.body.title + "/" +  random + ".jpg";
		     	}
    }
    

};

