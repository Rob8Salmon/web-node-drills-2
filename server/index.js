require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = process.env;
const { getInput, createInput } = require("./controller.js");

app.use(express.json());
app.use(cors());

app.get("/api/info", getInput); // this is a handler function, this ties to controller.js
app.post("/api/info", createInput); // this is a handler function, this ties to controller.js

app.listen(PORT, () => console.log(`up on Port ${PORT}`));
