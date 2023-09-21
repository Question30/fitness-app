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
    <>
    <div>Set:</div>
    <label>Weight: <input type='number' name='weight' value={set.weight} onChange={handleChange} /></label>
    <label>Reps: <input type='number' name='reps' value={set.reps} onChange={handleChange}/></label>
    <input type='checkbox' onChange={finished}/>
    </>
  )
}