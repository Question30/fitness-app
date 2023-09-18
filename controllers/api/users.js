const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function login(req, res) {
    try {
      //find a user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    //comparing Password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    //create token
    const token = createJWT(user);
    res.json(token);
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

async function checkToken(req, res){
  console.log(req.user);
  res.json(req.exp);
}

//helper function to create a jwt token
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

module.exports = {
  create,
  login,
  checkToken
};
