const {UserModel} = require("../models/UserSchema");
const {comparePasswords} = require("../utils/encrypt");

function LoginUser(req, res) {
  const bcrypt = require('bcrypt');
  UserModel.findOne({ email: req.body.email }, function (err, data) {
    if (data) {
        const passwordMatched = comparePasswords(req.body.password, data.password)
        if (passwordMatched) {
            res.send("Login Successful" + data.username);
        } else {
            res.send("Invalid password")
        }
    } else {
        res.send("Invalid creds");
    }
});
}

module.exports = LoginUser;