var express = require('express');
var app = express();
var session = require('express-session');
var cors = require('cors');
var passport = require('passport');
var flash = require('connect-flash');
const { passport_config } = require('./config/passport');
const config = require('./config/config');
var connection = require('./utils/connection')
var path = require('path')
var corsOptions = {
  origin: [config.SSR_URL, config.SSR_URL2, 'http://localhost:8080', 'http://localhost:8082', 'http://localhost:8081'],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(flash());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true, cookie: { maxAge: 60000 } }));
app.use(passport.initialize());
app.use(passport.session());
passport_config(passport);
app.set('view engine', 'ejs');
var router = express.Router();

//  var business_banking = require('./routes/business_banking')(passport);
  


require('./routes/external')(app, passport);
app.use(express.static(path.join(__dirname, 'assets')));
app.listen(5002, function() {
  console.log('Server running at port 5002: http://127.0.0.1:5002');
  process
    .on('exit', code => {
      nodemon.emit('quit');
      process.exit(code);
    })
    .on('SIGINT', () => {
      nodemon.emit('quit');
      process.exit(0);
    });
});
