const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/learningDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/students", require("./routes/studentRoutes"));
app.use("/courses", require("./routes/courseRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));