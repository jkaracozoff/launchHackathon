/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
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

exports.search = function(req, res) {
res.render('../public/search.ejs', {
    title: 'search'
  });

}