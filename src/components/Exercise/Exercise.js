import { useState } from "react";

export default function Exercise({exercise, addExerciseToState}){
    const [isSelected, setIsSelected] = useState(false);

    function handleClick(){
        addExerciseToState(exercise);
        setIsSelected(true);
    }


    return(
        <div className="border w-1/4 mx-auto my-2 py-2">
            <p>{exercise.name}</p>
            <button className='border my-4 rounded bg-emerald-500 font-bold text-slate-50 w-1/4 mx-2' onClick={handleClick}>Add</button>
           <label>selected <input className="mx-2" type='checkbox' checked={isSelected}/></label>
        </div>
    )
}