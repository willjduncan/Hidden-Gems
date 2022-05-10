const router = require("express").Router();
const { Post, User, Vote, Comment } = require("../../models");


Post.findAll({
 order: [['created_at', 'DESC']],
 attributes: [
   'id',
   'post_url',
   'title',
   'created_at',
   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
 ],
 include: [
   // include the Comment model here:
   {
     model: Comment,
     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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