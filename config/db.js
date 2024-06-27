// const mongoose = require('mongoose');

// const colors= require('colors');

// const connectDB = async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log(`Connected to Mongodb Database ${mongoose.connection.host}`.bgCyan.white);
//     } catch (error) {
//         console.log(`Mongoose database error ${error}`.bgRed.white);
//     }
// }
// module.exports = connectDB;
const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;