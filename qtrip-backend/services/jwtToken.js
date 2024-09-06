const jwt = require('jsonwebtoken');

const jwtSign = ({userId}) => {
   const token = jwt.sign({ userId }, JWT_SECRET,{expiresIn:"5h"});
   return token;
}

const jwtVerify = ({token}) => {
   const decoded = jwt.verify(token, JWT_SECRET);
   return decoded;
}

module.exports = { jwtSign, jwtVerify };