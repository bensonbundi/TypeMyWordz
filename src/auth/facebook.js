var passport = require('passport');
var config = require('../../config/_config');
var init = require('./init');
var User = require('../models/user');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: config.facebook.consumerKey,
    consumerSecret: config.facebook.consumerSecret,
    callbackURL:"http://127.0.0.1:3000/auth/facebook/callback"
  },
    function(token, tokenSecret, profile, done) {

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

      User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));
module.exports = passport;