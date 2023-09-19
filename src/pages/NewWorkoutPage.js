import {useState} from 'react';
import * as workoutService from '../utilities/workout/workout-service';
import { useNavigate } from 'react-router-dom';

export default function NewWorkoutPage(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        day: '',
    });

    function handleChange(e){
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        );
    }

    function handleSubmit(e){
        e.preventDefault();
        const data = formData;
        workoutService.createWorkout(data);
        navigate('/workout')
    }

    return(
        <main>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange}/>
                <label>Day:</label>
                <select value={formData.day} onChange={handleChange} name='day'>
                    <option value=''>Select a day</option>
                    <option value='Mon' >Mon</option>
                    <option value='Tue'>Tue</option>
                    <option value='Wed'>Wed</option>
                    <option value='Thur'>Thur</option>
                    <option value='Fri'>Fri</option>
                    <option value='Sat'>Sat</option>
                    <option value='Sun'>Sun</option>
                </select>
                <input type='submit' value='Add Workout'/>
            </form>
        </main>
    )
}