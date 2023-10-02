import WorkoutCard from "../components/WorkoutCard/WorkoutCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as workoutAPI from "../utilities/workout/workout-api";

export default function WorkoutsPage({ user }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(function () {
    async function getAllWorkouts() {
      const allWorkouts = await workoutAPI.getAllUserWorkouts(user);
      setWorkouts(allWorkouts);
    }
    getAllWorkouts();
  }, []);

  function deleteWorkout(workout){
    const indexOfWorkout = workouts.findIndex((ex) => ex._id === workout._id);
    const copyOfWorkout = [...workouts];
    copyOfWorkout.splice(indexOfWorkout, 1);
    setWorkouts(copyOfWorkout);
    workoutAPI.deleteWorkout(workout._id);
  }

  return (
    <main className="text-center my-4 text-orange-100">
      <h1 className=" text-3xl my-4">Workout Templates</h1>
      {workouts ? (
        workouts.map((workout) => {
          return <WorkoutCard workout={workout} deleteWorkout={deleteWorkout} />;
        })
      ) : (
        <div>No Workouts to display</div>
      )}

      <div className="border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/12 mx-auto">
        <Link to="/Workout/new">+</Link>
      </div>
    </main>
  );
}
