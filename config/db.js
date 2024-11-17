// Basically its used for mongoDB atlast conection where data come this file "user"
// connect the mongodb
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.info(
      `Connected to database successfully! on cloud ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error(`Connection error: ${error} `);
  }
};
//export is imp
module.exports = connectDB;
// then call this function in main server js(entry point);
