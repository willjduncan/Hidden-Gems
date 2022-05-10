const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Loving the view and climb",
    user_id: 5,
    gem_id: 1
  },
  {
    comment_text: "Gimapc rbiapc actobap qmcutp; cvtibp vitnacl ai cittnbl uantepo.",
    user_id: 1,
    gem_id: 3
  },
  {
    comment_text: "Aciplr acyplnb tuidpca vinacpt gioacj.",
    user_id: 3,
    gem_id: 10
  },
  {
    comment_text: "Havotmb atyvoc riofgtc.",
    user_id: 2,
    gem_id: 4
  },
  {
    comment_text: "Can't wait to visit the lighthouse and kayak in the calming waters!",
    user_id: 4,
    gem_id: 2
  },
  {
    comment_text: "Bsidabpol sdictsa acqe.",
    user_id: 3,
    gem_id: 9
  },
  {
    comment_text: "Sed vel enim sit amet nunc viverra dapibus.",
    user_id: 5,
    gem_id: 7
  },
  {
    comment_text: "Morbi a ipsum.",
    user_id: 1,
    gem_id: 4
  },
  {
    comment_text: "Integer tinci ante vel ipsum. Prae lacinia erat.",
    user_id: 2,
    gem_id: 3
  },
  {
    comment_text: "Donec ut maris et masa tempor convallis.",
    user_id: 4,
    gem_id: 8
  },
  {
    comment_text: "Quis arcu liero, rutm ac, lotis vel, daus at, diam.",
    user_id: 1,
    gem_id: 10
  },
  {
    comment_text: "Dafi acoao wealcoa qzomapc tigjmap.",
    user_id: 3,
    gem_id: 5
  },
  {
    comment_text: "Grwpvq caifg vwedlao.",
    user_id: 2,
    gem_id: 9
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
