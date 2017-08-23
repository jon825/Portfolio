const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/styles'));

// index is directory for all template files
app.set('index', __dirname + '/index');
app.set('view engine', 'ejs');


app.get("/" (req, res) =>{
  res.render('index/portfolio')
})

app.listen(app.get('port'))
