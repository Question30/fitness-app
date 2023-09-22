import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as workoutAPI from "../utilities/workout/workout-api";
import ExerciseSets from "../components/ExerciseSets/ExerciseSets";

export default function WorkoutPage({user}) {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const [workout, setWorkout] = useState('');
  const exercises = workout.exercises;

  useEffect(() => {
    async function getWorkout(id) {
      const workout = await workoutAPI.getWorkoutByID(id);
      setWorkout(workout);
    }
    getWorkout(id);
  }, []);

  function handleFinishWorkout(){
    const copyOfWorkout = {...workout};
    copyOfWorkout.isFinished = true;
    workoutAPI.updateWorkout(id, copyOfWorkout, user);
    navigate('/workout')
  }

  function removeExercise(exercise){
    const indexOfExercise = exercises.findIndex((ex)=> ex.name === exercise.name);
    const copyOfWorkout = {...workout};
    copyOfWorkout.exercises.splice(indexOfExercise, 1)

    setWorkout(copyOfWorkout);
  }
  
  console.log(workout);

  return (
    <main>
      <h1>{workout.name}</h1>
      <h2>{workout.day}</h2>
      {exercises ? (
        exercises.map((exercise) => {
            console.log(exercise.sets);
          return (
            <>
           <ExerciseSets workout={workout}  exercise={exercise}/>
           <button onClick={()=>removeExercise(exercise)}>Remove Exercise</button>
            </>
          );
        })
      ) : (
        <div>No Exercises</div>
      )}

      <Link to={`/workout/add-exercise/${id}`}>Add Exercises</Link>
      <button onClick={ handleFinishWorkout}>Finish Workout</button>
    </main>
  );
}
