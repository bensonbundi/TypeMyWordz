var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');

passport.use(new InstagramStrategy({
    consumerKey: config.instagram.consumerKey,
    consumerSecret: config.instagram.consumerSecret,
    callbackURL: config.instagram.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;
