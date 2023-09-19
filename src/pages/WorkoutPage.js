import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as workoutAPI from '../utilities/workout/workout-api';


export default function WorkoutPage(){
    const params = useParams();
    const {id} = params;

    const [workout, setWorkout] = useState('');

    useEffect(() => {
        async function getWorkout(id){
            const workout = await workoutAPI.getWorkoutByID(id);
            setWorkout(workout);
        }
        getWorkout(id);
    }, []);

    const exercises = workout.exercises;

    return(
        <main>
            <h1>{workout.name}</h1>
            <h2>{workout.day}</h2>
            {
                exercises ?
                exercises.map((exercise) => {
                    return(
                        <div>
                            <div>{exercise.name}</div>
                            <button>Add Set</button>
                        </div>
                    )
                })
                :
                <div>No Exercises</div>
            }

            <Link to={`/workout/add-exercise/${id}`}>Add Exercises</Link>
        </main>
    )
}