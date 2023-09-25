import { useState } from "react";

export default function Set({setSetsToadd, setsToAdd}) {

  const [set, setSet] = useState({
    weight: 1,
    reps: 1
  });

  function handleChange(e){
    setSet({...set, [e.target.name] : e.target.value});
  }
  
  function finished(e){
    if(e.target.checked === true){
     setSetsToadd([...setsToAdd, set])
    }else{
      return
    }
  }
  console.log(set);
  return(
    <div>
    <div>Set:</div>
    <label className="mx-2">Weight: <input className="text-stone-950" type='number' name='weight' value={set.weight} onChange={handleChange} /></label>
    <label className="mx-2">Reps: <input className="text-stone-950" type='number' name='reps' value={set.reps} onChange={handleChange}/></label>
    <label className="mx-2">Done</label><input type='checkbox' onChange={finished}/>
    </div>
  )
}