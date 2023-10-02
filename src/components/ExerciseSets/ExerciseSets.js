import Set from "../Set/Set";
import { useState } from "react";

export default function ExerciseSets({exercise}){
const [numOfSets, setNumOfSets] = useState([]);
const [setsToAdd, setSetsToAdd] = useState([{}]);

function addSet(){
    const copyOfNumOfSets = [...numOfSets];
    copyOfNumOfSets.push(1)

    setNumOfSets(copyOfNumOfSets);
}

function removeSet(){
    const numOfSetsCopy = [...numOfSets];
    numOfSetsCopy.pop();

    setNumOfSets(numOfSetsCopy);
}

// function addSetToExercise(){
//     const copyOfSets = setsToAdd;
//     copyOfSets.shift();
//     copyOfSets.map(set => exercise.sets.push(set));
// }

    return(
        <div className="border w-3/4 mx-auto">
        <div className="font-bold my-2">{exercise.name}</div>
        {
            numOfSets.length ? 
            numOfSets.map((set)=> {
                return(
                    <Set exercise={exercise} setSetsToadd={setSetsToAdd} setsToAdd={setsToAdd}/>
                )
            })
            :
            <div>No Sets</div>
        }
        <div className="flex justify-evenly">
        <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4' onClick={addSet}>Add Set</button>
        <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4' onClick={removeSet}>Remove Set</button>
        {/* <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4' onClick={addSetToExercise}>Finish Sets</button> */}
        </div>
      </div>
    )
}