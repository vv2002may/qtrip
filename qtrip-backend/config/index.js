const dotenv = require('dotenv');
dotenv.config();

module.exports = {
   PORT,
   mongoURI,
   JWT_SECRET,
} = process.env;