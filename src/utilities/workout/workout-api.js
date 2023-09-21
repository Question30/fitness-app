import sendRequest from "../sendRequest";

const BASE_URL = '/api/workout'

export function createWorkout(formData){
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}

export function getAllWorkouts(){
    return sendRequest(BASE_URL);
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