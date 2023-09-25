import { Link } from "react-router-dom";

export default function WorkoutCard({workout, deleteWorkout}){
    return(
        <div className="border my-4 w-3/4 mx-auto py-4">
            <h2 className="text-lg">{workout.day}</h2>
            <div>
            <Link className="underline font-bold text-xl"  to={`/workout/${workout._id}`}>{workout.name}</Link>
            </div>
            <button onClick={() => deleteWorkout(workout)}>Delete</button>
        </div>
    )
}