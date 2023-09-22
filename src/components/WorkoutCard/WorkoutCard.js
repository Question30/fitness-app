import { Link } from "react-router-dom";

export default function WorkoutCard({workout}){
    return(
        <div>
            <h2>{workout.day}</h2>
            <Link to={`/workout/${workout._id}`}>{workout.name}</Link>
        </div>
    )
}