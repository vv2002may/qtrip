const { registerZod, User } = require("../../models");
const { jwtSign } = require("../../services/jwtToken");


const register = async (req, res) => {
   const { email, password, confirmPassword } = req.body;
   const payload = registerZod.safeParse(req.body);
   if (payload.success) {
      const user = await User.findOne({ email });
      if (user) {
         return res.status(400).json({
            success: false,
            message: "Email already exists",
         });
      } else {
         if (password != confirmPassword) {
            return res.status(400).json({
               success: false,
               message: "Password & confirm password doesn't match",
            });
         }
         else {
            const newUser = new User({ email, password });
            await newUser.save();
            return res.status(200).json({
               success: true,
               token: jwtSign({ userId: newUser._id }),
               id: newUser._id,
               message: 'You have registered successfully!',
            })
         }
      }
   }
   else {
      if (password && password.length < 6) {
         return res.status(400).json({
            success: false,
            message: "Password must be atleast 6 in length",
         });
      }
      else {
         return res.status(400).json({
            success: false,
            message: "Invalid Inputs!",
         });
      }
   }
}

module.exports = register;