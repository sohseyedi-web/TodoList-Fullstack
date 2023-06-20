const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/userRouter");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection..."))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server run in port ${port}`);
});
