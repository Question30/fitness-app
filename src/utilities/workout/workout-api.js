import sendRequest from "../sendRequest";

const BASE_URL = '/api/workout'

export function createWorkout(formData, user){
    formData.owner = user.email;
    console.log(formData);
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}

export function getAllWorkouts(){
    return sendRequest(BASE_URL);
}

export function getAllUserWorkouts(user){
    return sendRequest(`${BASE_URL}/all`, 'POST', user)
}

export function getWorkoutByID(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

export function addExercises(exercises, id){
    return sendRequest(`${BASE_URL}/add-exercise/${id}`, 'PUT', exercises)
}

export function addSets(id){
    return sendRequest(`${BASE_URL}/add-sets/${id}`, 'PUT');
}

export function updateWorkout(id, workout, user){
    const updatedUser =  user;
    updatedUser.workouts = workout;
return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', updatedUser);
}

export function finishWorkout(workout){
    const copyOfWorkout = workout;
    delete copyOfWorkout._id;
    console.log(copyOfWorkout);
    return sendRequest(`${BASE_URL}/finish-workout`, 'POST', copyOfWorkout);
}

export function getWorkoutHistory(user){
    return sendRequest(`${BASE_URL}/history`, 'POST', user);
}

export function deleteWorkout(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}