var passport = require('passport');
var config = require('../_config');
var init = require('./init');
var User = require('../models/user');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: config.facebook.consumerKey,
    consumerSecret: config.facebook.consumerSecret,
    callbackURL: config.facebook.callbackURL
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