// const router = require("express").Router();
// const { Gem, User, Vote, Comment } = require("../../models");


// Gem.findAll({
//  order: [['created_at', 'DESC']],
//  attributes: [
//    'id',
//    'Gem_url',
//    'title',
//    'created_at',
//    [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Gem.id = vote.Gem_id)'), 'vote_count']
//  ],
//  include: [
//    // include the Comment model here:
//    {
//      model: Comment,
//      attributes: ['id', 'comment_text', 'Gem_id', 'user_id', 'created_at'],
//      include: {
//        model: User,
//        attributes: ['username']
//      }
//    },
//    {
//      model: User,
//      attributes: ['username']
//    }
//  ]
// })

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({
      order: [['created_at', 'DESC']], 
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      gem_id: req.body.gem_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;