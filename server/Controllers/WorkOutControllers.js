const WorkoutModel = require("../Models/Workoutmodel");
const mongoose = require("mongoose");

const PostWorkout = async (req, res) => {
  const { title, reps, loads } = req.body;
  try {
    const workout = await WorkoutModel.create({
      title,
      reps,
      loads,
    });
    return res.status(200).json({
      status: "Workout added succesfully",
      content: workout,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAllWorkout = async (req, res) => {
  try {
    const workout = await WorkoutModel.find().sort({ createAt: -1 });
    return res.status(200).json({
      count: workout.length,
      content: workout,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getsingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  try {
    const workout = await WorkoutModel.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  try {
    const workout = await WorkoutModel.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    return res.status(200).json({ message: "deleted succesfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  try {
    const workout = await WorkoutModel.findByIdAndUpdate(id,req.body)
    return res.status(200).json({msg:"Workout Updated"})
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};



module.exports = {
  PostWorkout,
  getAllWorkout,
  getsingleWorkout,
  deleteWorkout,
  updateWorkout
};
