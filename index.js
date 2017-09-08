var express = require('express');
var app = express();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var mailgun = require('mailgun-js')({apiKey: config.api_key, domain: config.domain});






app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/projects', (req, res) =>{
  res.render('pages/project.ejs');
})

app.get('/contact', (req, res) =>{
  res.render('pages/contact.ejs');
})

app.get('/send', (req,res) =>{
  var data = {
    from: 'Mail Gun Jonathansapp <postmaster@sandboxfbf81b9b127b4860840e8833f74b4ad9.mailgun.org>',
    to: 'kui825@gmail.com',
    subject: req.query.user_name + " "  + "Sent you a message",

    html: req.query.text + "<p>Sent from:</p>" + " " + req.query.email_address
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
})



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

