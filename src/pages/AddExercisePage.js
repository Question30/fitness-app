import { useState, useEffect } from "react";
import * as exerciseService from '../utilities/exercise/exercise-service';
import Exercise from "../components/Exercise/Exercise";

export default function AddExercisePage(){
    const [exerciseList, setExerciseList] = useState([]);
    const [exercisesToAdd, setExercisesToAdd] = useState([]);

    useEffect(function(){
         async function getAllExercises(){
            const allExercises = await exerciseService.getAllExercises();
            // console.log(allExercises)
            setExerciseList(allExercises);
        }
        getAllExercises();
    }, [])

    function handleOnClick(){
        console.log(exercisesToAdd);
    }

    function addExerciseToState(exercise){
        setExercisesToAdd([...exercisesToAdd, exercise]);
    }

    return(
        <main>
            <h1>add exercise page</h1>
            <button onClick={handleOnClick} >Add exercises</button>
          {
            exerciseList ? 
            exerciseList.map((exercise) =>{
                return(
                    <Exercise exercise={exercise} addExerciseToState={addExerciseToState}/>
                )
            })
            : <div>No exercises Found</div>
          }
        </main>
    )
}