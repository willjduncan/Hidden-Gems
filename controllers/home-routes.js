const router = require("express").Router();
const { User, Gem, Comment, Vote } = require("../models/");
const sequelize = require('../config/config');
const withAuth = require('../utils/auth');

// // GET all gems for homepage
router.get('/', async (req, res) => {
  try {
    const dbGemData = await Gem.findAll({
          attributes: [
            'id',
            'pic',
            'title',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE gem.id = vote.gem_id)'), 'vote_count'],
          ],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'gem_id', 'user_id', 'created_at'],
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
     });

    const gems = dbGemData.map((gem) =>
      gem.get({ plain: true })
    );

    res.render('home', {
      gems,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





// GET one gem
router.get('/gem/:id', (req, res) => {
  Gem.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'title',
        'description',
        'visitors',
        'pic',
        'lon',
        'lat',
        'country',
        'state',
        'city',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE gem.id = vote.gem_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'gem_id', 'user_id', 'created_at'],
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
  .then(dbGemData => {
      if (!dbGemData) {
        res.status(404).json({ message: 'No gem found with this id' });
        return;
      }

      // serialize the data
      const gem = dbGemData.get({ plain: true });

      // pass data to template
      res.render('single-gem', {
          gem,
          loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});


// GET one comment
// Use the custom middleware before allowing the user to access the comment
router.get('/comment/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id);

    const painting = dbCommentData.get({ plain: true });

    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//Dashboard Page
// router.get("/dashboard", (req, res) => {
//   res.render("dashboard");
// });

router.get('/dashboard', withAuth, (req, res) => {
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


//Edit-Gem Page
router.get('/edit/:id', withAuth, (req, res) => {
  Gem.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'description',
        'visitors',
        'pic',
        'lon',
        'lat',
        'state',
        'city',
      ]
  })
  .then(dbgemData => {
      if (!dbgemData) {
          res.status(404).json({ message: 'No gem found with this id' });
          return;
      }

      // serialize the data
      const gem = dbgemData.get({ plain: true });

      // pass data to template
      res.render('edit-gem', {
          gem,
          loggedIn: true
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});



//Edit-Profile Page
router.get("/edit/user/:id", (req, res) => {
    User.findOne({
        where: {
          id: req.session.user_id 
        },
        attributes: [
          'id',
          'email',
        ]
    })
    .then(dbgemData => {
        if (!dbgemData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
  
        // serialize the data
        const gem = dbgemData.get({ plain: true });
  
        // pass data to template
        res.render('edit-profile', {
            gem,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Redirection away from Login for those Logged In
router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});

module.exports = router;
