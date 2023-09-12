const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const helmet = require('helmet');



// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

// cookie parser
app.use(cookieParser());
app.use(cors());
// app.use(helmet());



const userRoute = require("./Routes/User/User.router")

app.get('/', (req, res) => {
  // Send the HTML file as the response
  res.sendFile('public/welcome.html', { root: __dirname });
});


app.use("/api", userRoute);





module.exports = app;