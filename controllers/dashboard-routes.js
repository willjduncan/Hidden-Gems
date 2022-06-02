const router = require("express").Router();
const { User, Gem, Comment, Vote } = require("../models/");
const sequelize = require('../config/config');
const withAuth = require('../utils/auth');


//Dashboard Page
router.get('/', withAuth, (req, res) => {
    Gem.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'pic',
        'title',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE gem.id = vote.gem_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbgemData => {
        // serialize data before passing to template
        const gems = dbgemData.map(gem => gem.get({ plain: true }));
        res.render('dashboard', { gems, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });


//Edit-Profile Page ----- PUT /dashboard/edit/user/
router.get("/edit/user/", (req, res) => {
  User.findOne({
      where: {
        id: req.session.user_id 
      },
      attributes: [
        'id',
        'username',
        'email',
      ]
  })
  .then(dbUserData => {
      if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
      }

      // serialize the data
      const User = dbUserData.get({ plain: true });

      // pass data to template
      res.render('edit-profile', {
          User,
          loggedIn: true
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

  module.exports = router;