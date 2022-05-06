// Dependencies
const sequelize = require("../config/config");
const { User, Post} = require("../models");

const userData = [
    {
        username: "aphlonstone",
        email: "aplonstone1@random.com",
        password: "password123"
    },
    {
        username: "emilmari",
        email: "emilmari2@random.com",
        password: "password123"
    },
    {
        username: "bobrosse",
        email: "bobrosse3@random.com",
        password: "password123"
    },
    {
        username: "chesterbenn",
        email: "chesterbenn4@random.com",
        password: "password123"
    },
    {
        username: "gokustrong",
        email: "gokustrongest5@random.com",
        password: "password123"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;