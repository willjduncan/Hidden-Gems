const { Post } = require('../models');

const postData = [
  {
    title: "Pilot Mountain State Park",
    description: "Tall Mountain",
    country: "USA",
    state: "NC",
    visitors: "400,000",
    pic: "",
    activity_type: "Fishing, Climbing, and Kayaking",
    city: "Pinnacle",
    lon: "080-28'44'' W",
    lat: "36-20'25'' N",
    user_id: 3
  },
  {
    title: "Isle Royal National Park",
    description: "Islands",
    country: "USA",
    state: "MI",
    visitors: "25,798",
    pic: "",
    activity_type: "Camping, Fishing, Kayaking, and Tours",
    city: "Houghton",
    lon: "47.9959° N",
    lat: "88.9093° W",
    user_id: 5
  },
  {
    title: "Purus palciveo qalilc posccab.",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 1
  },
  {
    title: "Ricacab gomapdq.",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 4
  },
  {
    title: "Yumaaco eqcialop adicatv flispd",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 2
  },
  {
    title: "Lorem ipsum adjacai ciqtpa.",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 4
  },
  {
    title: "Xincali acutpv tupdif zilpo, doacovq, wecolica tyviap.",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 1
  },
  {
    title: "Vriplo ruticoe zcimal itnalvit.",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 3
  },
  {
    title: "Tvipoali aictckle rospicka.",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 5
  },
  {
    title: "Ispm adaiqa vinoan divplapo riocpme",
    description: "",
    country: "",
    state: "",
    visitors: "",
    pic: "",
    activity_type: "",
    city: "",
    lon: "",
    lat: "",
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;