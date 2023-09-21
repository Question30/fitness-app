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

function addSetToExercise(){
    const copyOfSetsToAdd = [...setsToAdd];
    copyOfSetsToAdd.shift();
    exercise.sets.push(copyOfSetsToAdd);
}

    return(
        <div>
        <div>{exercise.name}</div>
        {
            numOfSets.length ? 
            numOfSets.map((set)=> {
                return(
                    <Set setSetsToadd={setSetsToAdd} setsToAdd={setsToAdd}/>
                )
            })
            :
            <div>No Sets</div>
        }
        <button onClick={addSet}>Add Set</button>
        <button onClick={removeSet}>Remove Set</button>
        <button onClick={addSetToExercise}>Finish Sets</button>
      </div>
    )
}