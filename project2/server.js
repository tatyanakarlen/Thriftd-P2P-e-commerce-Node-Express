var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// requiring express session middleware
var session = require('express-session')
var passport = require('passport')

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport') //run the passport code 


// require our routes

var indexRoutes = require('./routes/index');
var productsRoutes = require('./routes/products');
var userRoutes = require('./routes/users')


// const res = require('express/lib/response')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// session middleware requires 
app.use(session({
  secret: 'SEI ROCKS!', 
  resave: false, 
  saveUninitialized: true,
}))

// passport middleware 
app.use(passport.initialize())
app.use(passport.session())


// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/products', productsRoutes)
app.use('/users', userRoutes)





// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;