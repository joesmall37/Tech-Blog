const { User } = require('../models');

const userData = [
    {
        username: "Sandra",
        email: "sandrae@gmail.com",
        password: "password1234"
    },
    {
        username: "Silvia",
        email: "silvia@gmail.com",
        password: "password12345"
    },
    {
        username: "Sara",
        email: "sara@gmail.com",
        password: "password12345"
    },
    {
        username: "Emily",
        email: "emily@gmail.com",
        password: "password12345"
    },
    {
        username: "William",
        email: "william@gmail.com",
        password: "password12345"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
