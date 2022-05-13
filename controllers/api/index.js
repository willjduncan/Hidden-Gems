const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const gemRoutes = require('./gem-routes.js');
//const commentRoutes = require('./comment-routes.js');


router.use('/user', userRoutes);
router.use('/gem', gemRoutes);
//router.use('/comment', commentRoutes);


module.exports = router;