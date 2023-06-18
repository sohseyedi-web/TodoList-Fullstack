const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is run port ${PORT}`);
});
