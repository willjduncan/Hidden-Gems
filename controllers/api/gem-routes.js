const router = require('express').Router();
const { Gem } = require('../../models');

router.get("/", (req, res) => {
  Gem.findAll()
    .then(dbUserDATA => res.json(dbUserDATA))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Gem.create({
    title: req.body.title,
    description: req.body.description,
    country: req.body.country,
    state: req.body.state,
    visitors: req.body.visitors,
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

router.delete('/:id', (req, res) => {
  const id = req.params.id
  //call the destroy sequelize method on a Gem
  //specify "where" the destroy method needs to act --> id of gem needs to match id from param
  //".then" res.json the prommise from the destroy method

})

module.exports = router;