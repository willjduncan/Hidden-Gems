const router = require('express').Router();
const { User, Gem, Vote, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//POST /api/user/
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.userId = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/user/login
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.put("/edit/user/login", (req, res) => {
  User.create({
    where: {
      password: req.body.password,
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'New password!' });
      return;
    }

    const validPassword = dbUserData.changePassword(req.body.Password);

    if (!validPassword) {
      res.status(400).json({ message: 'Password changed!' });
      return;
    }

    req.session.save(() => {
      req.session.password = dbUserData.password;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'Information updated!' });
    });
  });
});

// log out route
// POST /api/user/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res
        .status(204)
        .json({ message: 'You are now logged out!' })
        .end();
    });
  } else {
    res.status(400).end();
  }
});
module.exports = router;
