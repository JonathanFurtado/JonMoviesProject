var express = require('express');
var router = express.Router();

var env = require('dotenv').config();
const Client = require('pg').Client;
const client = new Client({
  connectionString: process.env.DATABASE_URL
});
client.connect(); //connect to database

var passport = require('passport');
var bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('accountLogin', {error: req.flash('error')});
});

router.post('/',
  // depends on the fiels "isAdmin", redirect to the different path: admin or notAdmin
  passport.authenticate('local', { failureRedirect: '/accountLogin', failureFlash: true, error: true}),
  function(req, res,next) {
      res.redirect('/');
      console.log("logged in");
});

router.get('/logout', function(req, res){
    req.logout(); //passport provide it
    res.redirect('/'); // Successful. redirect to localhost:3000/exam
});

router.get('/changePassword', function(req, res){
    res.render('changePassword',{user: req.user});
});

function encryptPWD(password){
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

router.post('/changePassword', function(req, res,next){
    var currentCompare = bcrypt.compareSync(req.body.current, req.user.password);
    var newPasswordCompare;
    var currentSame;

    if(currentCompare){
      console.log("current password is same");
      currentSame = 1;
    }
    else{
      console.log("current password is different");
      res.render('changePassword', {user: req.user , notcurrent: "true"});
      currentSame = 0;
    }

    if(req.body.new1 == req.body.new2){
      console.log("new passwords same");
      newPasswordCompare = 1;
    }
    else{
      console.log("new passwords not same");
      res.render('changePassword', {user: req.user , notsame: "true"});
      newPasswordCompare = 0;
    }
    if(newPasswordCompare == 1 && currentSame == 1){
      console.log("password changed successful");
      res.render('changePassword', {user: req.user , success: "true"});
      var updatedPassword = encryptPWD(req.body.new1);
      client.query('UPDATE examusers SET password=$1 WHERE username=$2', [updatedPassword, req.user.username], function(err, result){
        if(err){
          console.log("Error updating password.");
          next(err);
        }
      });
    }
  });

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = router;