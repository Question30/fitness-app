import { useState, useEffect } from "react"
import * as WorkoutAPI from '../utilities/workout/workout-api';
import * as exerciseService from '../utilities/exercise/exercise-service';
import LineChart from "../components/LineChart/LineChart";

export default function DataPage({user}){

    const [workouts, setWorkouts] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [exerciseToPlot, setExerciseToPlot] = useState("");

    useEffect(() => {
        async function getWorkouts(){
            const allWorkouts = await WorkoutAPI.getWorkoutHistory(user);
            setWorkouts(allWorkouts);
        }
        async function getExercises(){
            const allExercises = await exerciseService.getAllExercises();
            setExercises(allExercises);
        }
        getExercises();
       getWorkouts();
    }, [user]);

    function handleChange(e){
        setExerciseToPlot(e.target.value);
        console.log(exerciseToPlot);
    }


    return(
        <main>

            <div>Data Page</div>
            <p>Select an option to view data</p>
            <select onChange={handleChange}>
                {
                    exercises ? exercises.map((exercise) => {
                        return(
                            <option key={exercise.name} value={exercise.name}>{exercise.name}</option>
                        )
                    }
                    ) : <div>Loading...</div>
                }
            </select>
            <LineChart exercise={exerciseToPlot} workouts={workouts}/>
        </main>
    )
}