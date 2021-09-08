var passport = require('passport');
var config = require('../_config');
var init = require('./init');
var User = require('../models/user');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: config.google.consumerKey,
  clientSecret: config.google.consumerSecret,
  callbackURL: config.google.callbackURL,
  //passReqToCallback: true

},
  function (token, tokenSecret, profile, done) {

    return done(null, profile);
  }

));
module.exports = passport;
