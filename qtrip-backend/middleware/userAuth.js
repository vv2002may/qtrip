const { User } = require("../models");
const { jwtVerify } = require("../services/jwtToken");


const userAuth = async (req, res, next) => {
   try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(" ")[1];
      if (token) {
         const decoded = jwtVerify({ token });
         if (decoded.userId) {
            const user = await User.findOne({ _id: decoded.userId });
            if (user) {
               req.headers.userId =decoded.userId;
               next();
            }
            else {
               return res.json({
                  success: false,
                  message: "User does not exist"
               })
            }
         }
         else {
            return res.status(400).json({
               success: false,
               message: "Please, sign in again!"
            })
         }
      }
      else {
         return res.status(400).json({
            success: false,
            message: "Token is not provided"
         })
      }
   }
   catch (err) {
      return res.status(400).json({
         success: false,
         message: "Some error occured while authentication!"
      })
   }
}

module.exports = userAuth;