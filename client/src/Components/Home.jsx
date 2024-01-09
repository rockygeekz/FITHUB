import { useEffect, useState } from "react";
import Workoutbox from "./Workoutbox";
import WorkoutForm from "./WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json.content);
        console.log(json.content);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="flex w-[100%]  bg-stone-400">
      <div className=" bg-stone-400 px-28 py-8 font-mono text-xl w-screen font-bold ">
        {workouts &&
          workouts.map((workout) => (
            <Workoutbox key={workout._id} workout={workout} />
          ))}
      </div>
      <div className="w-[50%] ">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
