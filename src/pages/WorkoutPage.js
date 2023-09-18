import WorkoutCard from "../components/WorkoutCard/WorkoutCard";
import {Link} from 'react-router-dom';


export default function WorkoutPage(){
    return(
        <main>
            <h1>WorkoutPage</h1>
            <WorkoutCard />

            <Link to='/Workout/new'>+</Link>
        </main>
    )
}