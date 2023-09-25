import {useState} from 'react';
import * as workoutAPI from '../utilities/workout/workout-api'
import { useNavigate } from 'react-router-dom';

export default function NewWorkoutPage({user}){
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
        workoutAPI.createWorkout(data, user);
        navigate('/workout')
    }

    return(
        <main>
            <div className='text-center my-4 text-3xl underlines'>New Workout Template</div>
            <form className='text-center flex flex-col w-3/4 mx-auto my-4' onSubmit={handleSubmit}>
                <label className='text-orange-100 underline text-xl'>Name:</label>
                <input className='text-' type='text' name='name' value={formData.name} onChange={handleChange}/>
                <label className='text-orange-100 underline text-xl'>Day:</label>
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
                <input className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50' type='submit' value='Add Workout'/>
            </form>
        </main>
    )
}