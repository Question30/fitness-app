import sendRequest from '../sendRequest';

const BASE_URL = '/api/exercise'

export function getAllExercises(){
    return sendRequest(BASE_URL);
};

export function deleteExercise(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

