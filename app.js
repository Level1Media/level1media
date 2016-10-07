var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

   // parse application/json
    app.use(bodyParser.json());                        

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));




app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home

app.get('/', routes.home);

app.get('/contact', routes.contact);

	app.post('/contact',function(req,res,next){

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user:'level1mediamarketing@gmail.com',
				pass: 'janemba133'
			}


		});

			 mailOptions = {
		      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
		      to: 'level1mediamarketing@gmail.com',
		      subject: 'Website contact form',
		      text: req.body.message
		  };


		transporter.sendMail(mailOptions, function(error,info) {

			if(error){

				console.log(error);
				res.redirect('/');
			}else{

					console.log('Message Sent');
				res.redirect('/');
			}



		});


	});

app.get('/about', routes.about);

app.get('*', routes.notFound);


app.listen(3000, function(){
	console.log("Your Server is running on port 3000");

});