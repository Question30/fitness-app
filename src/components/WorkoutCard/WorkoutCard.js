import { Link } from "react-router-dom";

export default function WorkoutCard({workout}){
    return(
        <div>
            <Link to={`/workout/${workout._id}`}>{workout.name}</Link>
            <h2>{workout.day}</h2>
        </div>
    )
}