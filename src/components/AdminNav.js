import { Link } from "react-router-dom";
import * as usersService from '../utilities/users-service'

export default function AdminNav(user, setUser){

    function handleLogOut(){
        usersService.logOut();
        setUser(null);
    }

    return(
        <nav className='bg-emerald-500 pt-2 text-center text-slate-100 text-xl'>
            <h2 className='text-2xl mb-1'>Welcome Admin</h2>
            <Link to='/admin'>All Users</Link>
            &nbsp; | &nbsp;
            <Link to='/workouts'>All Workouts</Link>
            &nbsp; | &nbsp;
            <Link to='/exercises'>All Exercises</Link>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>Log Out</Link>
        </nav>
    )

}