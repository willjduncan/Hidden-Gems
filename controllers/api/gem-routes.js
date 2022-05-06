const router = require("express").Router();

router.get("/gem", (req,res) => {

});

router.get("gem/:id", (req,res) => {

});

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../api/index.js'));
  }); 

router.delete('/gem/:gem_', (req, res) => {
    const id = req.params.id
    res.json({ id: id })
})

module.exports = router;