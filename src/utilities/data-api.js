
export  function getData(exercise, workouts){
    let exercises =  getExerciseData(exercise, workouts);
    let sets = getSets(exercises);
    let exerciseDates = getExerciseDates(exercise, workouts);
    let data = [];

    sets.map((set) => {
        if(Array.isArray(set)){
            let totalVolume = 0;
            set.map((s) => {
              totalVolume += getVolume(s.weight, s.reps);
            })

            data.push(totalVolume / set.length)
        }else{
            let volume = getVolume(set.weight, set.reps);
            data.push(volume);
        }    
    });

    return data;
}

function getVolume(weight, reps){
    let volume = weight * reps;

    return volume;
}

function getSets(exercises){
    let sets = [];

    exercises.map((ex) => {

        if(ex.sets.length > 1){
            sets.push(ex.sets)
        }else{
            sets = [...sets, ...ex.sets];
        };
    });

    return sets;

}

function getExerciseData(exercise, workouts){
    let tempExercises = [];
    let newExercises = [];

    workouts.map((workout) => {
        tempExercises = [...tempExercises, ...workout.exercises];
    })

    tempExercises.map((ex) => {
        if(ex.name === exercise){
            newExercises.push(ex);
        }
    })
    return newExercises;
}

export function getExerciseDates(exercise, workouts){
    let tempExercises = []; 
    let dates = [];

    workouts.map((workout) => {
        tempExercises = [...tempExercises, ...workout.exercises];
        tempExercises.map((ex) => {
            if(ex.name === exercise){
                dates.push(workout.createdAt);
            }
        })
    });
    console.log(dates);
}