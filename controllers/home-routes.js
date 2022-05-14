const router = require("express").Router();
const { Gem, Comment } = require("../models/");
const withAuth = require('../utils/auth');

// GET all gems for homepage
router.get('/', async (req, res) => {
  try {
    const dbGemData = await Gem.findAll({
      include: [
        {
          model: Vote, Comment,
          attributes: ['title', 'picture', 'creation date'],
        },
      ],
    });

    const gem = dbGemData.map((gem) =>
      gem.get({ plain: true })
    );

    res.render('homepage', {
      gems,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gem
// Use the custom middleware before allowing the user to access the gem
router.get('/gem/:id', withAuth, async (req, res) => {
  try {
    const dbgemData = await Gem.findByPk(req.params.id, {
      include: [
        {
          model: Gem,
          attributes: [
            'id',
            'title',
            'created_at',
            [
              sequelize.literal('(SELECT COUNT(*) FROM vote WHERE gem.id = vote.gem_id)'),
              'vote_count'
            ]
          ],
        },
      ],
    });

    const gem = dbgemData.get({ plain: true });
    res.render('gem', { gem, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
