var passport = require('passport');
var User = require('../models/user');


module.exports = function() {

  passport.serializeUser(function(user,done) {
    done(null, user);
  });

  passport.deserializeUser(function(user,done) {

      done(null,user);
    });

};
