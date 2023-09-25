import { useState, useEffect } from "react";
import * as workoutAPI from "../../utilities/workout/workout-api";

export default function AllWorkouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(function () {
    async function getAllWorkouts() {
      const allWorkouts = await workoutAPI.getAllWorkouts();
      setWorkouts(allWorkouts);
    }

    getAllWorkouts();
  }, []);

  function handleClick(workout) {
    const indexOfWorkout = workouts.findIndex((ex) => ex._id === workout._id);
    const copyOfWorkout = [...workouts];
    copyOfWorkout.splice(indexOfWorkout, 1);
    setWorkouts(copyOfWorkout);
    workoutAPI.deleteWorkout(workout._id);
  }

  return (
    <main className="text-center text-orange-100 my-4">
      <div className="text-3xl">All Workouts</div>
      {workouts ? (
        workouts.map((workout) => {
          return (
            <div className="border my-4 w-3/4 mx-auto py-4 text-lg">
              <h1>{workout.name}</h1>
              <h2>{workout.day}</h2>
              <h3>{workout.owner}</h3>
              <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4' onClick={() => handleClick(workout)}>Delete</button>
            </div>
          );
        })
      ) : (
        <div>No Workouts to display</div>
      )}
    </main>
  );
}
