const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    loads:{
        type:Number,
        required:true
    },
}, { timestamps: true });


const WorkoutModel = mongoose.model("workoutcollection",WorkoutSchema)

module.exports = WorkoutModel;
