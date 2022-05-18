const router = require('express').Router();
const { Gem, User, Vote, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//GET ALL GEMS
router.get("/", (req, res) => {
  Gem.findAll()
    .then(dbUserDATA => res.json(dbUserDATA))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST api/gem/
router.post('/', (req, res) => {
  Gem.create({
    title: req.body.title,
    description: req.body.description,
    country: req.body.country,
    state: req.body.state,
    visitors: req.body.visitors,
    pic: req.body.pic,
    activity_type: req.body.activity_type,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: body.gem_id
    }
  })

});

router.delete('/:id', withAuth, (req, res) => {
  Gem.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGemData => {
      if (!dbGemData) {
        res.status(404).json({ message: 'No Gem found with this id' });
        return;
      }
      res.json(dbGemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/gem/upvote
router.put('/upvote', withAuth, (req, res) => {
  // make sure the session exists first
  if (req.session) {
    // pass session id along with all destructured properties on req.body
    Gem.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, User, Comment })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;