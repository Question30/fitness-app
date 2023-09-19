

export default function Exercise({exercise, addExerciseToState}){
    function handleClick(){
        addExerciseToState(exercise);
    }

    return(
        <div>
            <p>{exercise.name}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}