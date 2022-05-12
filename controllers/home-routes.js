const router = require("express").Router();
const { home } = require("../models/");


const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};



// homepage
router.get("/api/home", (req, res) => {
  res.render("home");
});

module.exports = withAuth;

//Redirection away from Login for those Logged In
// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
