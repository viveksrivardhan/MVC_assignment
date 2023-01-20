const {UserModel} = require("../models/UserSchema");

function RegisterUser(req, res) {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  try{
  let userdata = UserModel.validate({
    username: username,
    email: email,
    password: password,
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