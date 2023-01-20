const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

// to accept json data
app.use(express.json());

mongoose.connect(
    "mongodb+srv://sample:sample@cluster0.djgdwyo.mongodb.net/test",
    function (err) {
      if (err) {
        console.log("Not able to connect to Mongo DB");
      } else {
        console.log("Connection Successful");
      }
    }
  );
  
  // signup and login
  // signup => username, email and password
  // store in db //mongo db => register/signup
  
  // for login after signup
  // email and password => goes to backend =>function (controller) => communicate with database(model) => checks
  
//actual route /signup/register
const signupRouter = require("./routes/signuproute");
app.use("/signup", signupRouter);

const LoginRouter = require("./routes/loginroute");
app.use("/login", LoginRouter);

const getproductroute = require("./routes/getproductroute");
app.use("/getproducts",getproductroute);

const getproductsbyidrouter = require("./routes/getproductbyidroute");
app.use("/products", getproductsbyidrouter);

const getproductsbycategoryroute = require ("./routes/getproductsbycategoryroute");
app.use("/products",getproductsbycategoryroute);

const getproductsbynameroute = require ("./routes/getproductsbynameroute");
app.use("/products",getproductsbynameroute);

const productaddroute = require("./routes/productaddroute");
app.use("/products",productaddroute);

  app.listen("3000", () => {
    console.log("Server is running");
  });