const { User } = require("../models");
const { jwtVerify } = require("../services/jwtToken");


const userAuth = async(req, res, next) => {
   try {
      const authHeader = req.headers.Authorization;
      const token = authHeader && authHeader.split(" ")[1];
      if (token) {
         // needs to be corrected
         const userId = jwtVerify({ token });
         const user = await User.findOne({ _id: userId });
         if (user) {
            next();
         }
         else {
            return res.json({
               success: false,
               message:"User does not exist"
            })
         }
      }
      else {
         return "Token is not provided";
      }
   }
   catch (err) {
      return "Some error occured while authentication!";
   }
}

module.exports = userAuth;