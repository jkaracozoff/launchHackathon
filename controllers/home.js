/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
	console.log(req.user)
  if(typeof req.user == 'undefined'){	
  	console.log("profile not available")
  res.render('../public/index.ejs', {
    title: 'Home', user: false
   });
   }else{
   	console.log("profile available")
    res.render('../public/index.ejs', {
    title: 'Home', "user": req.user
  });
}
};

