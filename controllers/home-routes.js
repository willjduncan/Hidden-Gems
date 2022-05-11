const router = require("express").Router();
const { home } = require("../models/");

// homepage
router.get("/api/home", (req, res) => {
  res.render("home");
});


//Redirection away from Login for those Logged In
// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
