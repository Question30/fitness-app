import { useState, useEffect } from "react"
import * as dataApi from "../../utilities/data-api";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function LineChart({exercise, workouts}){
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(dataApi.getData(exercise, workouts));
        dataApi.getExerciseDates(exercise, workouts);
    }, [exercise]);

    // ChartJS.register(
    //     CategoryScale,
    //     LinearScale,
    //     PointElement,
    //     LineElement,
    //     Title,
    //     Tooltip,
    //     Legend
    // );

    // const options = {
    //     responive: true,
    //     plugins: {
    //         legend: {
    //             position: 'top',
    //         },
    //         title: {
    //             display: true,
    //             text: exercise,
    //         },
    //     },
    // };


    console.log(workouts);

    return(
        <div>
            <div>{exercise}</div>
            {/* <Line /> */}
        </div>
    )
}