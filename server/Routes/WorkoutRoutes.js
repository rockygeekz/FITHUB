const express = require("express");
const {
  PostWorkout,
  getsingleWorkout,
  getAllWorkout,
  deleteWorkout,
  updateWorkout
} = require("../Controllers/WorkOutControllers");
const router = express.Router();

//GET ALL WORKOUTS
router.get("/", getAllWorkout);

//GET SINGLE WORKOUT
router.get("/:id",getsingleWorkout);

//POST NEW WORKOUT
router.post("/", PostWorkout);

//UPDATE NEW WORKOUT
router.patch("/:id",updateWorkout);

//DELETE WORKOUT
router.delete("/:id",deleteWorkout);

module.exports = router;
