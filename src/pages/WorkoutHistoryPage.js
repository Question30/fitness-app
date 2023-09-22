import { useState, useEffect } from "react";
import * as userServices from "../utilities/users-service";

export default function WorkoutHistoryPage({ user }) {
  console.log(user);

  const [workoutHistory, setWorkoutHistory] = useState([]);

  useEffect(function () {
    async function getWorkoutHistory() {
      const history = await userServices.getWorkoutHistory(user._id);
      setWorkoutHistory(history);
    }
    getWorkoutHistory();
  }, []);

  return (
    <main>
      <h1>Workout History</h1>
      {workoutHistory ? (
        workoutHistory.map((workout) => {
          const date = workout.updatedAt;
          const updated = date.slice(0, 10);
          return (
            <div key={workout._id}>
              <h1>{workout.name}</h1>
              <h2>{workout.day}</h2>
              <h3>{updated}</h3>
              {workout.exercises ? (
                workout.exercises.map((exercise) => {
                  return <h5 key={exercise._id}>{exercise.name}</h5>;
                })
              ) : (
                <div>Can't find exercises</div>
              )}
            </div>
          );
        })
      ) : (
        <div>No Workouts Recorded</div>
      )}
    </main>
  );
}
