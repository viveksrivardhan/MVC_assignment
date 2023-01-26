const {UserModel} = require("../models/UserSchema");
const { generateHash,generateSalt} = require("../utils/encrypt");

function RegisterUser(req, res) {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  const salt = generateSalt();
  const hashedPassword = generateHash(password, salt);

  try{
  let userdata = UserModel.validate({
    username: username,
    email: email,
    password: hashedPassword,
  });
  let resultData = new UserModel(userdata);
  console.log(resultData)
  resultData.save().then((item) => {
      res.send("Registered sucessfully");
    })
    .catch((err) => {
      res.send("error in adding data");
    });
}
catch(err){
    res.send(err,"error in adding data")
}
}

module.exports = RegisterUser;