const router = require('express').Router();
const { Gem } = require('../../models');


router.get("/Gem", (req, res) => {
  Gem.findAll()
    .then(dbUserDATA => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/Gem', (req, res) => {
  Gem.create({
    title: req.body.title,
    description: req.body.description,
    country: req.body.country,
    state: req.body.state,
    vistors: req.body.vistors,
    pic: req.body.pic,
    activity_type: req.body.activity_type,
    user_id: req.body.user_id
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

router.delete('/gem/:body.gem_id', (req, res) => {
  const id = req.params.id
  res.json({ id: id })
})

module.exports = router;