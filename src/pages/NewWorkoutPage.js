

export default function NewWorkoutPage(){
    return(
        <main>
            <form>
                <label>Name:</label>
                <input type='text'/>
                <label>Day:</label>
                <select>
                    <option>Select a day</option>
                    <option>Mon</option>
                    <option>Tue</option>
                    <option>Wed</option>
                    <option>Thur</option>
                    <option>Fri</option>
                    <option>Sat</option>
                    <option>Sun</option>
                </select>
                <input type='submit' value='Add Workout'/>
            </form>
        </main>
    )
}