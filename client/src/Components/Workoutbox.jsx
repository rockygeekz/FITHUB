/* eslint-disable react/prop-types */

const Workoutbox = ({ workout }) => {
  return (
    <div className="workoutbox bg-stone-700 text-white m-7 p-8 rounded-lg">
      <h4 className="text-yellow-300 uppercase">{workout.title}</h4>
      <p>
        <strong>Load (in kg): </strong>
        {workout.loads}
      </p>
      <p>
        <strong>reps (in kg): </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default Workoutbox;
