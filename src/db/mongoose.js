const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);


function connection() {
        mongoose.connect(process.env.MONGO_URI);
}





module.exports = { connection };