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
    // console.log(copyOfWorkout);
    workoutAPI.finishWorkout(copyOfWorkout);
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
    <main className="text-center my-4 text-orange-100">
      <h1 className="text-3xl underline font-bold my-2">{workout.name}</h1>
      <h2 className="text-xl my-2">{workout.day}</h2>
      <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4' onClick={ handleFinishWorkout}>Finish Workout</button>
      {exercises ? (
        exercises.map((exercise) => {
            console.log(exercise.sets);
          return (
            <>
           <ExerciseSets workout={workout}  exercise={exercise}/>
           <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50' onClick={()=>removeExercise(exercise)}>Remove Exercise</button>
            </>
          );
        })
      ) : (
        <div>No Exercises</div>
      )}
    <div className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4 mx-auto'>
      <Link to={`/workout/add-exercise/${id}`}>Add Exercises</Link>
    </div>
      
    </main>
  );
}
