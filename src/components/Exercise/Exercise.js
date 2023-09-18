

export default function Exercise({exercise, addExerciseToState}){

    function handleOnClick(e){
        addExerciseToState(exercise);
    }

    return(
        <div>
            <p>{exercise.name}</p>
            <button onClick={handleOnClick}>Add</button>
        </div>
    )
}