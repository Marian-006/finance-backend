
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(5000, ()=>console.log("Server running on port 5000"));
