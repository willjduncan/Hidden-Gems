const { User } = require("../../models");

const router = require("express").Router();

router.get("/Gem", (req,res) => {
  User.findAll()
  .then(dbUserDATA => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

router.get("/:id", (req,res) => {
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