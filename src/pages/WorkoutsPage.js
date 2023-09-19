import WorkoutCard from "../components/WorkoutCard/WorkoutCard";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import * as workoutAPI from '../utilities/workout/workout-api';


export default function WorkoutPage(){
    const[workouts, setWorkouts] = useState([]);

    useEffect(function(){
       async function getAllWorkouts(){
            const allWorkouts = await workoutAPI.getAllWorkouts();
            // console.log(allWorkouts);
            setWorkouts(allWorkouts);
        }
        getAllWorkouts();
    }, []);
    

    return(
        <main>
            <h1>WorkoutPage</h1>
            {
                workouts ? 
                workouts.map((workout) => {
                    return(
                        <WorkoutCard workout={workout}/>
                    )
                })
                :
                <div>No Workouts to display</div>
            }

            <Link to='/Workout/new'>+</Link>
        </main>
    )
}