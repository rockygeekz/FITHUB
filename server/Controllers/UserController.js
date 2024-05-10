const User = require("../Models/UserModel.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secret";

const generateToken = (_id) => {
  return token = jwt.sign({_id}, SECRET_KEY, {expiresIn: "3hr" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    //creating a token
    const token = generateToken(user._id)


    return res.status(200).json({
      email,
      token
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    
    //creating a token
    const token = generateToken(user._id)


    return res.status(200).json({
      email,
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
