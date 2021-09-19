const express = require('express')
const app = express()
const routes = require('../src/routes/index')
const passport = require('passport')

//Middleware
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'Code sniff',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/',routes)
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server listening on port ${port}...`))