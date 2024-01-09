const express = require("express");

const app = express();
const port = 3000;
require("./conn")
const cors = require("cors"); 
const WorkoutRoutes = require("./Router/WorkoutRoutes.js")


app.use(express.json())
app.use(cors())

app.use("/api/workouts" , WorkoutRoutes);

app.listen(port,(req,res)=>{
    console.log("Server running at",port);
})