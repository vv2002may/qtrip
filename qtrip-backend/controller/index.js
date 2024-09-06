const cities = require("./user/cities");
const login = require("./user/login");
const register = require("./user/register");
const adventuresController = require("./user/adventuresController");
const reservationsController = require("./user/reservationsController");



module.exports = { register, login, cities, adventuresController,reservationsController };