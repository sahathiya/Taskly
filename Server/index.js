

const express = require("express");
const cors = require("cors");
const cookieParser=require('cookie-parser')
const sequelize = require("./config/db");
 const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");
require("dotenv").config();

const app = express();
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}));
app.use(express.json());
app.use(cookieParser())
app.use('/api/user',userRoute)
 app.use('/api/todo',todoRoute)

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connected successfully.");
  })
  .catch((err) => {
    console.error("❌ Unable to connect to the database:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
