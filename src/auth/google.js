var passport = require('passport');
var config = require('../../config/_config');
var init = require('./init');
var User = require('../models/user');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: config.google.consumerKey,
  clientSecret: config.google.consumerSecret,
  callbackURL: "http://localhost:3000/auth/google/callback"
  //passReqToCallback: true

},
  function (accessToken, refreshToken, profile, done) {
  
    return done(null, profile);
    

  }

));

init();
module.exports = passport;
