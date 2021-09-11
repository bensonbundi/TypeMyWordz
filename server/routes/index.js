var express = require('express');
var router = express.Router();


var passportGithub = require('../auth/github');
var passportTwitter = require('../auth/twitter');
var passportFacebook = require('../auth/facebook');
var passportGoogle = require('../auth/google')

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('home');
});
router.get('/register.html',(req,res)=>{
  res.render('register')
})
router.get('/register',(req,res)=>{
  res.render('register')
})
router.get('/login.html',(req,res)=>{
  res.render('login')
})
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    
    // Successful authentication
    res.json(req.user);
  });

router.get('/auth/twitter', passportTwitter.authenticate('twitter'));

router.get('/auth/twitter/callback',
  passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.
    // Successful authentication
    res.json(req.user);
  });

router.get('/auth/facebook', passportFacebook.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  });

router.get('/auth/google', passportGoogle.authenticate('google',{scope:['profile','email']}));

router.get('/auth/google/callback', 
  passportGoogle.authenticate('google', { failureRedirect: '/login'}),
  (req,res)=>{
    console.log("Signed User",req.user)
    res.render('index')
  }
  )
module.exports = router;
