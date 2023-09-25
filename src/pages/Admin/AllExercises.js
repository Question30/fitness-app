import { useEffect, useState } from "react";
import * as exerciseAPI from '../../utilities/exercise/exercise-api'

export default function AllExercises(){

    const [exercises, setExercises] = useState([]);

    useEffect(function(){
        async function getExercises(){
            const exercisesToAdd = await exerciseAPI.getAllExercises();
            setExercises(exercisesToAdd);
        }

        getExercises();
    }, [])

    function handleClick(exercise){
        const indexOfExercise = exercises.findIndex((ex) => ex._id === exercise._id);
        const copyOfExercises = [...exercises];
        copyOfExercises.splice(indexOfExercise, 1);
        setExercises(copyOfExercises);
        exerciseAPI.deleteExercise(exercise._id);
    }

    return(
        <main className="text-center text-orange-100 my-4">
            <div className="text-3xl">All Exercises</div>
            {exercises ? (
        exercises.map((exercise) => {
          return (
            <div className="border my-4 w-3/4 mx-auto py-4 text-lg">
                <h1>{exercise.name}</h1>
                <p>Muscle Group: {exercise.muscleGroup}</p>
                <p>Type: {exercise.type}</p>
                <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4' onClick={() =>handleClick(exercise)}>Delete</button>
            </div>
          );
        })
      ) : (
        <div>No exercises Found</div>
      )}
        </main>
    )
}