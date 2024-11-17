const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
// const cors = require("cors");
const dotenv = require("dotenv");
// const  = require("./routes/userRoutes");
const router = require("./routes/userRoutes");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');

//dotenv config
dotenv.config();

//Mongodb connection
connectDB();

// rest object
const app = express();
app.use(express.json()); // body parser not error when comes any JSON formate
app.use(morgan("dev"));
app.use(bodyParser.json()); // Middleware to parse JSON
// app.use(cors());
// routes
// app.use("/api/v1/user", router);
// // const router = express.Router();

app.post('/api/v1/user/register', (req, res) => {
  const { name, email, password } = req.body;
  
  // Here you would normally check for existing users and save the new user to your database
  // For demonstration, let's assume registration is always successful
  res.json({ success: true, message: "User registered successfully!" });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});

//pass Xra5rSXh3yt7RbEG
//username
//   // "dev": "concurrently \"npm run server\" \"npm run client\""
