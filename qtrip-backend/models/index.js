const adventuresData = require("./db/adventures");
const citiesData = require("./db/cities");
const reservationsData = require("./db/reservations");
const User = require("./db/user");
const loginZod = require("./zod/loginZod");
const registerZod = require("./zod/registerZod");


module.exports = { User, registerZod, loginZod, adventuresData, citiesData, reservationsData};