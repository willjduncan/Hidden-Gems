const User = require('./User');
const Gem = require("./Gem");
const Vote = require('./Vote');
const Favorite = require('./Favorite');
const Comment = require('./Comment');


//USER - GEM ASSOCIATIONS
User.hasMany(Gem, {
  foreignKey: 'user_id'
});

Gem.belongsTo(User, {
  foreignKey: 'user_id',
});


//VOTE ASSOCIATIONS
User.belongsToMany(Gem, {
  through: Vote,
  as: 'voted_gems',
  foreignKey: 'user_id'
});
  
Gem.belongsToMany(User, {
  through: Vote,
  as: 'voted_gems',
  foreignKey: 'gem_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});
  
Vote.belongsTo(Gem, {
  foreignKey: 'gem_id'
});
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
  
Gem.hasMany(Vote, {
  foreignKey: 'gem_id'
});


//FAVORITE ASSOCIATIONS
User.belongsToMany(Gem, {
  through: Favorite,
  as: 'favorite_gems',
  foreignKey: 'user_id'
});
  
Gem.belongsToMany(User, {
  through: Favorite,
  as: 'favorite_gems',
  foreignKey: 'gem_id'
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id'
});
  
Favorite.belongsTo(Gem, {
  foreignKey: 'gem_id'
});
  
User.hasMany(Favorite, {
  foreignKey: 'user_id'
});
  
Gem.hasMany(Favorite, {
  foreignKey: 'gem_id'
});


//COMMENT ASSOCIATIONS
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
  
Comment.belongsTo(Gem, {
  foreignKey: 'gem_id'
});
  
User.hasMany(Comment, {
  foreignKey: 'user_id'
});
  
Gem.hasMany(Comment, {
  foreignKey: 'gem_id'
});

module.exports = { User, Gem, Vote, Favorite, Comment };