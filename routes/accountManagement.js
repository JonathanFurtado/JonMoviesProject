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
  res.render('examLogin', {error: req.flash('error')});

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
    res.redirect('/');
  }
}

router.get('/createAccount',function(req, res) {
    res.render('createAccount', { user: req.user }); // signup.hbs
});

router.post('/createAccount', function(req, res, next) {
  client.query('SELECT * FROM examusers WHERE username = $1', [req.body.username], function(err, result) {
    if (err) {
      console.log("unable to query SELECT");
      next(err);
    }
    if (result.rows.length > 0) {
        console.log("user already exists");
        res.render('createAccount', {user: req.user , exist: "true" });
    }
    else{
      console.log("user doesn't exist");
      client.query('INSERT INTO examusers (username, password, isAdmin) VALUES($1, $2, $3)', [req.body.username, req.body.password, req.body.isadmin], function(err, result) {
        if (err) {
          console.log("unable to query INSERT");
          next(err);
        }
        console.log("User Account Creation Successful");
        res.render('createAccount', {user: req.user , success: "true" });
      });
    }
  });
});

module.exports = router;