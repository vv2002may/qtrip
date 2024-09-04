const { loginZod, User } = require("../models");
const { jwtSign } = require("../services/jwtToken");

const login = async (req, res) => {
  const { email, password } = req.body;

  const payload = loginZod.safeParse(req.body);
  if (payload.success) {
    const user = await User.findOne({ email });
    if (user) {
      if (user.password == password) {
        return res.status(201).json({
          success: true,
          data: {
            token: jwtSign({ userId: user._id }),
            id: user._id,
          },
        });
      } else {
        return res.status(403).json({
          success: false,
          message: "Password is incorrect!",
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "Email does not exist!",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid Inputs!",
    });
  }
};

module.exports = login;
