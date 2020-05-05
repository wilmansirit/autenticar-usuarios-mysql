const express = require('express')
  , router = express.Router()
  , home = require('../controllers/homeController');


/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('index');

});

/* GET Dashboard */
router.get('/dashboard', isLoggedIn, home.dashboard);

/* GET Preventivos */
router.get('/preventivos', isLoggedIn, home.preventivos);

/* Logged-in verify */
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated()) return next();
  res.redirect('/auth/signIn');

}


module.exports = router;
