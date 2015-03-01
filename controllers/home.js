/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
	console.log(req);
  res.render('../public/index.ejs', {
    title: 'Home', user: req.user
  });
};

