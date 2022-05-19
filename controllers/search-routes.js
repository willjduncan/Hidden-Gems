const router = require("express").Router();
const { User, Gem, Comment, Vote } = require("../models/");
const sequelize = require('../config/config');



// GET gems by activity type
router.get('/activity', async (req, res) => {
    try {
      const dbGemData = await Gem.findAll({
        where: {
            activity_type: req.body.activity_type
          },
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
  
      res.render('search', {
        gems,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// GET gems by state
router.get('/state', async (req, res) => {
    try {
      const dbGemData = await Gem.findAll({
        where: {
            state: req.body.state
          },
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
  
      res.render('search', {
        gems,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



// GET gems by country
router.get('/state', async (req, res) => {
    try {
      const dbGemData = await Gem.findAll({
        where: {
            country: req.body.country
          },
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
  
      res.render('search', {
        gems,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;