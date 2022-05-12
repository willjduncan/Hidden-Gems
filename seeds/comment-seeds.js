const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Loving the view and climb",
    user_id: 5,
    gem_id: 1
  },
  {
    comment_text: "I saw a mountain goat on Maple Pass Loop. It was incredible!",
    user_id: 1,
    gem_id: 3
  },
  {
    comment_text: "No way! That's so cool. Are there any moose here too?",
    user_id: 3,
    gem_id: 3
  },
  {
    comment_text: "I hear this place is changing locations soon.",
    user_id: 2,
    gem_id: 4
  },
  {
    comment_text: "My mom broke her arm backpacking here when I was in sixth grade. Thankfully, the park rangers here were incredible and ferried her back to safety.",
    user_id: 4,
    gem_id: 2
  },
  {
    comment_text: "Wow, that's intense.",
    user_id: 3,
    gem_id: 2
  },
  {
    comment_text: "How does anyone even find this kind of show?",
    user_id: 5,
    gem_id: 7
  },
  {
    comment_text: "Oh yeah. We also saw a wolf walk through our campsite on the first night. She had a tracking collar on.",
    user_id: 4,
    gem_id: 2
  },
  {
    comment_text: "You can see Canada from the island on a clear day, you know.",
    user_id: 1,
    gem_id: 2
  },
  {
    comment_text: "Most of the technique has to do with the way the dancers curl their fingers back.",
    user_id: 4,
    gem_id: 6
  },
  {
    comment_text: "It's right across the street from the royal palace, too. A great way to round out the day.",
    user_id: 1,
    gem_id: 6
  },
  {
    comment_text: "The galleries are nice, but there are also some gardens surrounding the museum that you can explore.",
    user_id: 3,
    gem_id: 5
  },
  {
    comment_text: "Anyone know if they do these performances in Siem Reap?",
    user_id: 2,
    gem_id: 6
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
