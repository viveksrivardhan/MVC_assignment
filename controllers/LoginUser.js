const {UserModel} = require("../models/UserSchema");

function LoginUser(req, res) {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let userdata = {
    username: username,
    email: email,
    password: password,
  };
  console.log(userdata)
  let resultData = new UserModel(userdata);
  console.log(resultData)
  resultData.save().then((item) => {
      res.send("Item added sucessfully");
    })
    .catch((err) => {
      res.send("error in adding data");
    });
}

module.exports = RegisterUser;