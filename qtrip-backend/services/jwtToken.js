const jwt = require('jsonwebtoken');

const jwtSign = ({userId}) => {
   const token = jwt.sign({ userId }, JWT_SECRET,{expiresIn:"5h"});
   return token;
}

const jwtVerify = ({token}) => {
   
}

module.exports = { jwtSign, jwtVerify };