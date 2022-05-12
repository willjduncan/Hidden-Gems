const { Vote } = require('../models');

const voteData = [
  {
    user_id: 3,
    gem_id: 1
  },
  {
    user_id: 3,
    gem_id: 2
  },
  {
    user_id: 3,
    gem_id: 4
  },
  {
    user_id: 3,
    gem_id: 7
  },
  {
    user_id: 5,
    gem_id: 3
  },
  {
    user_id: 5,
    gem_id: 4
  },
  {
    user_id: 5,
    gem_id: 1
  },
  {
    user_id: 5,
    gem_id: 3
  },
  {
    user_id: 5,
    gem_id: 7
  },
  {
    user_id: 2,
    gem_id: 7
  },
  {
    user_id: 2,
    gem_id: 4
  },
  {
    user_id: 2,
    gem_id: 2
  },
  {
    user_id: 2,
    gem_id: 6
  },
  {
    user_id: 2,
    gem_id: 3
  },
  {
    user_id: 4,
    gem_id: 3
  },
  {
    user_id: 4,
    gem_id: 1
  },
  {
    user_id: 4,
    gem_id: 2
  },
  {
    user_id: 4,
    gem_id: 6
  },
  {
    user_id: 1,
    gem_id: 5
  },
  {
    user_id: 1,
    gem_id: 2
  },
  {
    user_id: 1,
    gem_id: 1
  },
  {
    user_id: 1,
    gem_id: 4
  },
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;
