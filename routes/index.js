var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JonHersh Movies' });
});

router.get('/action', function(req, res){
  res.render('action');
})

router.get('/horror', function(req, res){
  res.render('horror');
})

router.get('/drama', function(req, res){
  res.render('drama');
})

router.get('/comedy', function(req, res){
  res.render('comedy');
})

router.get('/romance', function(req, res){
  res.render('romance');
})

router.get('/actionEndgame', function(req, res){
  res.render('actionEndgame');
})

router.get('/actionMissionImpossible', function(req, res){
  res.render('actionMissionImpossible');
})

router.get('/actionIpMan', function(req, res){
  res.render('actionIpMan');
})

router.get('/actionEnterTheDragon', function(req, res){
  res.render('actionEnterTheDragon');
})

router.get('/actionRocky', function(req, res){
  res.render('actionRocky');
})

router.get('/comedyGameNight', function(req, res){
  res.render('comedyGameNight');
})

router.get('/comedyAnchorman', function(req, res){
  res.render('comedyAnchorman');
})

router.get('/comedyVirgin', function(req, res){
  res.render('comedyVirgin');
})

router.get('/comedyDeadpool', function(req, res){
  res.render('comedyDeadpool');
})

router.get('/comedyAmericanPie', function(req, res){
  res.render('comedyAmericanPie');
})

router.get('/horrorAnnabelle', function(req, res){
  res.render('horrorAnnabelle');
})

router.get('/horrorNun', function(req, res){
  res.render('horrorNun');
})

router.get('/horrorPsycho', function(req, res){
  res.render('horrorPsycho');
})

router.get('/horrorHalloween', function(req, res){
  res.render('horrorHalloween');
})

router.get('/horrorHouse', function(req, res){
  res.render('horrorHouse');
})

router.get('/horrorAnnabelle', function(req, res){
  res.render('horrorAnnabelle');
})

router.get('/romanceGrey', function(req, res){
  res.render('romanceGrey');
})

router.get('/romanceWoman', function(req, res){
  res.render('romanceWoman');
})

router.get('/romanceHoliday', function(req, res){
  res.render('romanceHoliday');
})

router.get('/romanceSick', function(req, res){
  res.render('romanceSick');
})

router.get('/romanceNotting', function(req, res){
  res.render('romanceNotting');
})

router.get('/romanceGrey', function(req, res){
  res.render('romanceGrey');
})

router.get('/dramaYourName', function(req, res){
  res.render('dramaYourName');
})

router.get('/dramaRoom', function(req, res){
  res.render('dramaRoom');
})

router.get('/drama12Years', function(req, res){
  res.render('drama12Years');
})

router.get('/dramaDunkirk', function(req, res){
  res.render('dramaDunkirk');
})

router.get('/dramaJoker', function(req, res){
  res.render('dramaJoker');
})

router.get('/createAccount', function(req, res){
  res.render('createAccount');
})

router.post('/endgame', function(req, res){
  res.render('endgame');
})

module.exports = router;
