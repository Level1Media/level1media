exports.home = function(req, res) {
	res.render('home');
};

exports.contact = function(req, res){
	res.render('contact');
};

exports.about = function(req, res){
	res.render('about');
};

exports.notFound = function(req, res){
	res.send("404 Wrong Page");

};
