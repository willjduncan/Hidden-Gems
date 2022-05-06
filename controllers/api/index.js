const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/user', userRoutes);

const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

module.exports = router;