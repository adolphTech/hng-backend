const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const helmet = require('helmet');



// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());
app.use(cors());
// app.use(helmet());



const userRoute = require("./Routes/User/User.router")



app.use("/api", userRoute);





module.exports = app;