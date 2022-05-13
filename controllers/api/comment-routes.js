const router = require("express").Router();
const { Gem, User, Vote, Comment } = require("../../models");


Gem.findAll({
 order: [['created_at', 'DESC']],
 attributes: [
   'id',
   'Gem_url',
   'title',
   'created_at',
   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Gem.id = vote.Gem_id)'), 'vote_count']
 ],
 include: [
   // include the Comment model here:
   {
     model: Comment,
     attributes: ['id', 'comment_text', 'Gem_id', 'user_id', 'created_at'],
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
})