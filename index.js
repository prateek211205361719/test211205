
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var flash = require('connect-flash');
const cookieSession = require('cookie-session');
const url = 'mongodb://prateek211205:sanu211205@ds163053.mlab.com:63053/feedback_dev';
mongoose.connect(url);

var passport = require('passport');
require('./server/services/passport');

app.use(bodyParser.json());
app.use(cookieSession({
    name: 'session',
    keys: ['sanu','prateek'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/authroute')(app);
require('./server/routes/billingroutes')(app);

if(process.env.NODE_ENV === 'production'){
   app.use(express.static('client/build'));
   const path = require("path");
   app.get('*', (req, res) => {
      res.sendfile(path.resolve(__dirname,'client','build','index.html'));
   });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('--------running---------');
});