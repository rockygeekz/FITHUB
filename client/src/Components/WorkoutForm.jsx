import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loads, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, loads };
    const response = await fetch(" http://localhost:3000/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setLoad("");
      setReps("");
      setTitle("");
      console.log("New Workout Added ", json);
    }
  };
  return (
    <div className="bg-red-400 h-[100vh] m-5 ">
      <form action="" className="" onSubmit={handlesubmit}>
        <h2>Add new workout</h2>
        <label>Exercise Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label>Load (in Kg: )</label>
        <input
          type="text"
          onChange={(e) => setLoad(e.target.value)}
          value={loads}
        />
        <br />
        <label>Reps (in kg: )</label>
        <input
          type="text"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <button className="bg-yellow-300">Add form</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WorkoutForm;
