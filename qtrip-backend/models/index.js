const citiesData = require("./db/cities");
const User = require("./db/user");
const loginZod = require("./zod/loginZod");
const registerZod = require("./zod/registerZod");


module.exports = { User, registerZod, loginZod, citiesData };