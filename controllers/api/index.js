const router = require('express').Router();

const userRoutes = require('./user-routes.js');


const gemRoutes = require('./gem-routes.js');

 router.use('/user', userRoutes);


router.use('/gem', gemRoutes);



module.exports = router;