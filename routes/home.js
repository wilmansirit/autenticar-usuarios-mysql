const express = require('express')
  , router = express.Router()
  , home = require('../controllers');


/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('index');

});

/* GET Dashboard */
router.get('/dashboard', isLoggedIn, home.homeController.dashboard);

/* GET Preventivos */
router.get('/preventivos', isLoggedIn, home.homeController.preventivos);

/* GET Correctivos */
router.get('/correctivos', isLoggedIn, home.homeController.correctivos);

/* GET Correctivos */
router.get('/kpis', isLoggedIn, home.homeController.kpis);

/* Logged-in verify */
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated()) return next();
  res.redirect('/auth/signIn');

}


module.exports = router;
