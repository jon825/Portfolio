const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const nodemailer = require('nodemailer');




var transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,

  auth: {
    user:"kui825@gmail.com",
    pass: config.password
  },
  tls: {
    rejectUnauthorized: false
  }
});


let HelperOptions = {
  from: '"jonathan" <jon.825@hotmail.com',
  to:'kui825@gmail.com',
  subject: 'hello world',
  text:'Wow hello world'
};

transporter.sendMail(HelperOptions,(err, info) =>{
  if(err) {
    console.log(err);
  }
  console.log(info)
})







// var express = require('express');
// var app = express();



// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

// app.get('/projects', (req, res) =>{
//   res.render('pages/project.ejs');
// })

// app.get('/contact', (req, res) =>{
//   res.render('pages/contact.ejs');
// })

// app.get('/send', (req, res) =>{
//   var mailOptions={
//     to :
//     subject:
//     text:
//   }
//   console.log(mailOptions);
//   smtpTransport.sendMail(mailOptions, (err, response)=>{
//     if(err){
//       console.log(err);
//       res.end("error");
//     } else {
//       console.log("Message sent:" + response.message);
//       res.end("sent");
//     }
//   })
// })

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

