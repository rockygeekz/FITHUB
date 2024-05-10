const express = require("express");

const app = express();
const port = 3000;
require("./conn.js");
const cors = require("cors");
const WorkoutRoutes = require("./Routes/WorkoutRoutes.js");
const UserRoutes = require("./Routes/UserRoutes.js");

app.use(express.json());
app.use(cors());

app.use("/api/workouts", WorkoutRoutes);
app.use("/api/user", UserRoutes);

app.listen(port, (req, res) => {
  console.log("Server running at", port);
});
