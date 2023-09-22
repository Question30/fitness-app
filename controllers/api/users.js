const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Create
async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

//Read
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

//Update
async function updateUser(req, res){
  try{
    const userToUpdate = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(userToUpdate);

  }catch (error){
    res.status(400).json(error);
  }
}

//Delete
async function deleteUser(req, res){
  try{
    console.log(req.body);
    // const userToDelete = await User.findByIdAndDelete(req.body.id);
    // res.status(200).json(userToDelete);
  }catch(error){
    res.status(400).json(error)
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

//Get User Workouts
async function getUserWorkouts(req, res){
  try {
      const user = await User.findById(req.params.id);
      const workouts = [...user.workouts];
      res.status(200).json(workouts);
  } catch (error) {
      console.log(error);
  }
}

//Get all users Admin only
async function getAllUsers(req, res){
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  create,
  login,
  checkToken,
  getUserWorkouts,
  deleteUser,
  updateUser,
  getAllUsers
};
