import { useState, useEffect } from "react";
import * as workoutAPI from '../utilities/workout/workout-api'

export default function WorkoutHistoryPage({ user }) {

  const [workoutHistory, setWorkoutHistory] = useState([]);

  useEffect(function () {
    async function getWorkoutHistory() {
      const history = await workoutAPI.getWorkoutHistory(user)
      setWorkoutHistory(history);
    }
    getWorkoutHistory();
  }, []);


  return (
    <main className="text-orange-100 text-center py-4">
      <h1 className="text-2xl underline font-bold">Workout History</h1>
      {workoutHistory ? (
        workoutHistory.map((workout) => {
          const date = workout.updatedAt;
          const updated = date.slice(0, 10);
          return (
            <div className="border w-3/4 mx-auto my-4" key={workout._id}>
              <h1 className="font-bold underline pt-2">{workout.name}</h1>
              <h2>{workout.day}</h2>
              <h3>{updated}</h3>
              {workout.exercises ? (
                workout.exercises.map((exercise) => {
                  return (
                    <div key={exercise._id}>
                      <p>{exercise.name}:</p>
                      {exercise.sets.map(set => {
                        return <p>{set.weight}X{set.reps}</p>
                      })}
                    </div>
                  );
                })
              ) : <div>Can't find exercises</div>
              
              }
            </div>
          );
        })
      ) : (
        <div>No Workouts Recorded</div>
      )}
    </main>
  );
}
