var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JonHersh Movies', user: req.user});
});

router.get('/action', function(req, res){
  res.render('action', {user: req.user});
})

router.get('/horror', function(req, res){
  res.render('horror', {user: req.user});
})

router.get('/drama', function(req, res){
  res.render('drama', {user: req.user});
})

router.get('/comedy', function(req, res){
  res.render('comedy', {user: req.user});
})

router.get('/romance', function(req, res){
  res.render('romance', {user: req.user});
})

router.get('/actionMissionImpossible', function(req, res){
  res.render('actionMissionImpossible', {user: req.user});
})

router.get('/actionIpMan', function(req, res){
  res.render('actionIpMan', {user: req.user});
})

router.get('/actionEnterTheDragon', function(req, res){
  res.render('actionEnterTheDragon', {user: req.user});
})

router.get('/actionRocky', function(req, res){
  res.render('actionRocky', {user: req.user});
})

router.get('/comedyGameNight', function(req, res){
  res.render('comedyGameNight', {user: req.user});
})

router.get('/comedyAnchorman', function(req, res){
  res.render('comedyAnchorman', {user: req.user});
})

router.get('/comedyVirgin', function(req, res){
  res.render('comedyVirgin', {user: req.user});
})

router.get('/comedyAmericanPie', function(req, res){
  res.render('comedyAmericanPie', {user: req.user});
})

router.get('/horrorAnnabelle', function(req, res){
  res.render('horrorAnnabelle', {user: req.user});
})

router.get('/horrorNun', function(req, res){
  res.render('horrorNun', {user: req.user});
})

router.get('/horrorPsycho', function(req, res){
  res.render('horrorPsycho', {user: req.user});
})

router.get('/horrorHouse', function(req, res){
  res.render('horrorHouse', {user: req.user});
})

router.get('/horrorAnnabelle', function(req, res){
  res.render('horrorAnnabelle', {user: req.user});
})

router.get('/romanceGrey', function(req, res){
  res.render('romanceGrey', {user: req.user});
})

router.get('/romanceWoman', function(req, res){
  res.render('romanceWoman', {user: req.user});
})

router.get('/romanceSick', function(req, res){
  res.render('romanceSick', {user: req.user});
})

router.get('/romanceNotting', function(req, res){
  res.render('romanceNotting', {user: req.user});
})

router.get('/romanceGrey', function(req, res){
  res.render('romanceGrey', {user: req.user});
})

router.get('/dramaYourName', function(req, res){
  res.render('dramaYourName', {user: req.user});
})

router.get('/dramaRoom', function(req, res){
  res.render('dramaRoom', {user: req.user});
})

router.get('/drama12Years', function(req, res){
  res.render('drama12Years', {user: req.user});
})

router.get('/dramaDunkirk', function(req, res){
  res.render('dramaDunkirk', {user: req.user});
})

router.get('/dramaJoker', function(req, res){ //new version

  if(req.user){

  if(req.user.rating25 == null){
      res.render('dramaJoker', {user: req.user});
  }

  if(req.user.rating25 <= 1){
    res.render('dramaJoker', {rateJoker1: "true", user: req.user});
  }

  if(req.user.rating25 == 2){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "true", user: req.user});
  }

  if(req.user.rating25 == 3){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "false", rateJoker3: "true", user: req.user});
  }

  if(req.user.rating25 == 4){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "false", rateJoker3: "false", rateJoker4: "true", user: req.user});
  }

  if(req.user.rating25 >= 5){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "false", rateJoker3: "false", rateJoker4: "false", rateJoker5: "true", user: req.user});
  } 
} else {
    res.render('dramaJoker', {user: req.user});
  }
});

router.get('/actionEndgame', function(req, res){ //new version

  if(req.user){

  if(req.user.rating1 == null){
      res.render('actionEndgame', {user: req.user});
  }

  if(req.user.rating1 <= 1){
    res.render('actionEndgame', {rateEndgame1: "true", user: req.user});
  }

  if(req.user.rating1 == 2){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "true", user: req.user});
  }

  if(req.user.rating1 == 3){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "false", rateEndgame3: "true", user: req.user});
  }

  if(req.user.rating1 == 4){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "false", rateEndgame3: "false", rateEndgame4: "true", user: req.user});
  }

  if(req.user.rating1 >= 5){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "false", rateEndgame3: "false", rateEndgame4: "false", rateEndgame5: "true", user: req.user});
  } 
} else {
    res.render('actionEndgame', {user: req.user});
  }
});

router.get('/comedyDeadpool', function(req, res){ //new version

  if(req.user){

  if(req.user.rating10 == null){
      res.render('comedyDeadpool', {user: req.user});
  }

  if(req.user.rating10 <= 1){
    res.render('comedyDeadpool', {rateDeadpool1: "true", user: req.user});
  }

  if(req.user.rating10 == 2){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "true", user: req.user});
  }

  if(req.user.rating10 == 3){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "false", rateDeadpool3: "true", user: req.user});
  }

  if(req.user.rating10 == 4){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "false", rateDeadpool3: "false", rateDeadpool4: "true", user: req.user});
  }

  if(req.user.rating10 >= 5){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "false", rateDeadpool3: "false", rateDeadpool4: "false", rateDeadpool5: "true", user: req.user});
  } 
} else {
    res.render('comedyDeadpool', {user: req.user});
  }
});

router.get('/horrorHalloween', function(req, res){ //new version

  if(req.user){

  if(req.user.rating14 == null){
      res.render('horrorHalloween', {user: req.user});
  }

  if(req.user.rating14 <= 1){
    res.render('horrorHalloween', {rateHalloween1: "true", user: req.user});
  }

  if(req.user.rating14 == 2){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "true", user: req.user});
  }

  if(req.user.rating14 == 3){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "false", rateHalloween3: "true", user: req.user});
  }

  if(req.user.rating14 == 4){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "false", rateHalloween3: "false", rateHalloween4: "true", user: req.user});
  }

  if(req.user.rating14 >= 5){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "false", rateHalloween3: "false", rateHalloween4: "false", rateHalloween5: "true", user: req.user});
  } 
} else {
    res.render('horrorHalloween', {user: req.user});
  }
});

router.get('/romanceHoliday', function(req, res){ //new version

  if(req.user){

  if(req.user.rating18 == null){
      res.render('romanceHoliday', {user: req.user});
  }

  if(req.user.rating18 <= 1){
    res.render('romanceHoliday', {rateHoliday1: "true", user: req.user});
  }

  if(req.user.rating18 == 2){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "true", user: req.user});
  }

  if(req.user.rating18 == 3){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "false", rateHoliday3: "true", user: req.user});
  }

  if(req.user.rating18 == 4){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "false", rateHoliday3: "false", rateHoliday4: "true", user: req.user});
  }

  if(req.user.rating18 >= 5){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "false", rateHoliday3: "false", rateHoliday4: "false", rateHoliday5: "true", user: req.user});
  } 
} else {
    res.render('romanceHoliday', {user: req.user});
  }
});

router.get('/accountLogin', function(req, res){
  res.render("accountLogin", {user: req.user, error: req.flash('error')});
})

//module.exports = router;

//START OF FIX

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
  res.render('/', {error: req.flash('error')});

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

router.get('/accountSignup',function(req, res) {
    res.render('accountSignup', { user: req.user }); // signup.hbs
});

router.post('/accountSignup', function(req, res, next) {
  client.query('SELECT * FROM users WHERE username = $1', [req.body.username], function(err, result) {
    if (err) {
      console.log("unable to query SELECT");
      next(err);
    }
    if (result.rows.length > 0) {
        console.log("user already exists");
        res.render('accountSignup', {user: req.user , exist: "true" });
    }
    else{
      console.log("user doesn't exist");
      client.query('INSERT INTO users (username, password) VALUES($1, $2)', [req.body.username, encryptPWD(req.body.password)], function(err, result) {
        if (err) {
          console.log("unable to query INSERT");
          next(err);
        }
        console.log("User Account Creation Successful");
        res.render('accountSignup', {user: req.user , success: "true" });
      });
    }
  });
});

router.post('/ratingJoker', function(req, res){

  client.query('UPDATE users SET rating25=$1 WHERE username=$2', [req.body.ratingJoker, req.user.username]); //setting rating25 to 1 to tell that the user has already rated the movie

  if(req.body.ratingJoker <= '1'){
    res.render('dramaJoker', {rateJoker1: "true", user: req.user});
    console.log(req.body.ratingJoker);
    console.log("1 star");
  }

  if(req.body.ratingJoker == '2'){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "true", user: req.user});
    console.log("2 stars");
  }

  if(req.body.ratingJoker == '3'){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "false", rateJoker3: "true", user: req.user});
    console.log("3 stars");
  }

  if(req.body.ratingJoker == '4'){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "false", rateJoker3: "false", rateJoker4: "true", user: req.user});
    console.log("4 stars");
  }

  if(req.body.ratingJoker >= '5'){
    res.render('dramaJoker', {rateJoker1: "false", rateJoker2: "false", rateJoker3: "false", rateJoker4: "false", rateJoker5: "true", user: req.user});
    console.log("5 stars");
  }

});

router.post('/ratingEndgame', function(req, res){

  client.query('UPDATE users SET rating1=$1 WHERE username=$2', [req.body.ratingEndgame, req.user.username]); //setting rating to 1 to tell that the user has already rated the movie

  if(req.body.ratingEndgame <= '1'){
    res.render('actionEndgame', {rateEndgame1: "true", user: req.user});
    console.log(req.body.ratingEndgame);
    console.log("1 star");
  }

  if(req.body.ratingEndgame == '2'){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "true", user: req.user});
    console.log("2 stars");
  }

  if(req.body.ratingEndgame == '3'){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "false", rateEndgame3: "true", user: req.user});
    console.log("3 stars");
  }

  if(req.body.ratingEndgame == '4'){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "false", rateEndgame3: "false", rateEndgame4: "true", user: req.user});
    console.log("4 stars");
  }

  if(req.body.ratingEndgame >= '5'){
    res.render('actionEndgame', {rateEndgame1: "false", rateEndgame2: "false", rateEndgame3: "false", rateEndgame4: "false", rateEndgame5: "true", user: req.user});
    console.log("5 stars");
  }

});

router.post('/ratingDeadpool', function(req, res){

  client.query('UPDATE users SET rating10=$1 WHERE username=$2', [req.body.ratingDeadpool, req.user.username]); //setting rating to 1 to tell that the user has already rated the movie

  if(req.body.ratingDeadpool <= '1'){
    res.render('comedyDeadpool', {rateDeadpool1: "true", user: req.user});
    console.log(req.body.ratingDeadpool);
    console.log("1 star");
  }

  if(req.body.ratingDeadpool == '2'){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "true", user: req.user});
    console.log("2 stars");
  }

  if(req.body.ratingDeadpool == '3'){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "false", rateDeadpool3: "true", user: req.user});
    console.log("3 stars");
  }

  if(req.body.ratingDeadpool == '4'){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "false", rateDeadpool3: "false", rateDeadpool4: "true", user: req.user});
    console.log("4 stars");
  }

  if(req.body.ratingDeadpool >= '5'){
    res.render('comedyDeadpool', {rateDeadpool1: "false", rateDeadpool2: "false", rateDeadpool3: "false", rateDeadpool4: "false", rateDeadpool5: "true", user: req.user});
    console.log("5 stars");
  }

});

router.post('/ratingHalloween', function(req, res){

  client.query('UPDATE users SET rating14=$1 WHERE username=$2', [req.body.ratingHalloween, req.user.username]); //setting rating to 1 to tell that the user has already rated the movie

  if(req.body.ratingHalloween <= '1'){
    res.render('horrorHalloween', {rateHalloween1: "true", user: req.user});
    console.log(req.body.ratingHalloween);
    console.log("1 star");
  }

  if(req.body.ratingHalloween == '2'){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "true", user: req.user});
    console.log("2 stars");
  }

  if(req.body.ratingHalloween == '3'){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "false", rateHalloween3: "true", user: req.user});
    console.log("3 stars");
  }

  if(req.body.ratingHalloween == '4'){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "false", rateHalloween3: "false", rateHalloween4: "true", user: req.user});
    console.log("4 stars");
  }

  if(req.body.ratingHalloween >= '5'){
    res.render('horrorHalloween', {rateHalloween1: "false", rateHalloween2: "false", rateHalloween3: "false", rateHalloween4: "false", rateHalloween5: "true", user: req.user});
    console.log("5 stars");
  }

});

router.post('/ratingHoliday', function(req, res){

  client.query('UPDATE users SET rating18=$1 WHERE username=$2', [req.body.ratingHoliday, req.user.username]); //setting rating to 1 to tell that the user has already rated the movie

  if(req.body.ratingHoliday <= '1'){
    res.render('romanceHoliday', {rateHoliday1: "true", user: req.user});
    console.log(req.body.ratingHalloween);
    console.log("1 star");
  }

  if(req.body.ratingHoliday == '2'){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "true", user: req.user});
    console.log("2 stars");
  }

  if(req.body.ratingHoliday == '3'){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "false", rateHoliday3: "true", user: req.user});
    console.log("3 stars");
  }

  if(req.body.ratingHoliday == '4'){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "false", rateHoliday3: "false", rateHoliday4: "true", user: req.user});
    console.log("4 stars");
  }

  if(req.body.ratingHoliday >= '5'){
    res.render('romanceHoliday', {rateHoliday1: "false", rateHoliday2: "false", rateHoliday3: "false", rateHoliday4: "false", rateHoliday5: "true", user: req.user});
    console.log("5 stars");
  }

});


module.exports = router;