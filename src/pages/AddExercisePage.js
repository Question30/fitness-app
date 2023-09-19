import { useState, useEffect } from "react";
import * as exerciseService from '../utilities/exercise/exercise-service';
import Exercise from "../components/Exercise/Exercise";
import { useNavigate, useParams} from "react-router-dom";
import * as workoutAPI from'../utilities/workout/workout-api';

export default function AddExercisePage(){
    const [exerciseList, setExerciseList] = useState([]);
    const [exercisesToAdd, setExercisesToAdd] = useState([]);

    const params = useParams();
    const {id} = params;

    useEffect(function(){
         async function getAllExercises(){
            const allExercises = await exerciseService.getAllExercises();
            // console.log(allExercises)
            setExerciseList(allExercises);
        }
        getAllExercises();
    }, [])

    
    async function handleOnClick(){
    await workoutAPI.addExercises(exercisesToAdd, id);
    }
    function addExerciseToState(exercise){
        setExercisesToAdd([...exercisesToAdd,exercise]);
    }
    
    return(
        <main>
            <h1>add exercise page</h1>
            <button onClick={handleOnClick}>Done</button>
          {
              exerciseList ? 
              exerciseList.map((exercise) =>{
                  return(
                      <div>
                    <Exercise exercise={exercise} addExerciseToState={addExerciseToState}/>
                        </div>
                )
            })
            : <div>No exercises Found</div>
          }
        </main>
    )
}