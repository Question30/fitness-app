import { useState, useEffect } from "react";
import * as exerciseService from "../utilities/exercise/exercise-service";
import Exercise from "../components/Exercise/Exercise";
import { useNavigate, useParams } from "react-router-dom";
import * as workoutAPI from "../utilities/workout/workout-api";

export default function AddExercisePage() {
  const [exerciseList, setExerciseList] = useState([]);
  const [exercisesToAdd, setExercisesToAdd] = useState([]);
  const [filter, setFilter] = useState([]);

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  useEffect(function () {
    async function getAllExercises() {
      const allExercises = await exerciseService.getAllExercises();
      // console.log(allExercises)
      setExerciseList(allExercises);
    }
    getAllExercises();
  }, []);

  async function handleOnClick() {
    await workoutAPI.addExercises(exercisesToAdd, id);
    navigate(`/workout/${id}`);
  }
  function addExerciseToState(exercise) {
    setExercisesToAdd([...exercisesToAdd, exercise]);
  }

  function filterExercises(e){
    console.log(e.target.value);
    setFilter(e.target.value)
  }

  return (
    <main className="text-center text-orange-100" >
      <h1 className="text-3xl my-4">Add exercises to workout</h1>
      <select className="text-slate-900" onChange={filterExercises}>
        <option value="">Select A Muscle Group</option>
        <option value='Chest'>Chest</option>
        <option value="Shoulders" >Shoulders</option>
        <option value="Upper Chest" >Upper Chest</option>
        <option value="Triceps" >Triceps</option>
        <option value = "Back">Back</option>
        <option value="Lats">Lats</option>
        <option value="Rear Delts">Rear Dealts</option>
        <option value="Biceps">Biceps</option>
        <option value="Quads">Quads</option>
        <option value="Hamstrings">Hamstrings</option>
        <option value="Calves">Calves</option>
      </select>
      <button className="border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4" onClick={handleOnClick}>Done</button>
      {exerciseList ? (
        exerciseList.filter((exercise) => exercise.muscleGroup === filter).map((exercise) => {
          return (
            <div>
              <Exercise
                exercise={exercise}
                addExerciseToState={addExerciseToState}
              />
            </div>
          );
        })
      ) : (
        <div>No exercises Found</div>
      )}
    </main>
  );
}
