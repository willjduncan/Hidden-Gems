const { Post } = require('../models');

const postdata = [
  {
    title: "Doamo blumn calc.",
    post_url: "",
    user_id: 3
  },
  {
    title: "Goamdi vesitc alpaim, pailk cips.",
    post_url: "",
    user_id: 5
  },
  {
    title: "Purus palciveo qalilc posccab.",
    post_url: "",
    user_id: 1
  },
  {
    title: "Ricacab gomapdq.",
    post_url: "",
    user_id: 4
  },
  {
    title: "Yumaaco eqcialop adicatv flispd",
    post_url: "",
    user_id: 2
  },
  {
    title: "Lorem ipsum adjacai ciqtpa.",
    post_url: "",
    user_id: 4
  },
  {
    title: "Xincali acutpv tupdif zilpo, doacovq, wecolica tyviap.",
    post_url: "",
    user_id: 1
  },
  {
    title: "Vriplo ruticoe zcimal itnalvit.",
    post_url: "",
    user_id: 3
  },
  {
    title: "Tvipoali aictckle rospicka.",
    post_url: "",
    user_id: 5
  },
  {
    title: "Ispm adaiqa vinoan divplapo riocpme",
    post_url: "",
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;