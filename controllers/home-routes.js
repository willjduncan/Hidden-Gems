const router = require("express").Router();
const { User } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

//Single-Gem Page
router.get("/gem/:id", (req, res) => {
  res.render("single-gem");
});

//Dashboard Page
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

//Edit-Gem Page
router.get("/edit/:id", (req, res) => {
  res.render("edit-gem");
});

//Edit-Profile Page
router.get("/edit/user/:id", (req, res) => {
  res.render("edit-profile");
});


//Redirection away from Login for those Logged In
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
