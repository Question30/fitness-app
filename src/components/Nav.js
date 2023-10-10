import {Link} from 'react-router-dom';
import * as usersService from '../utilities/users-service';

export default function Nav({user, setUser}){

    const handleLogOut = () =>{

        usersService.logOut();
        setUser(null);
    }

    return(
        <nav className='bg-emerald-500 pt-2 text-center text-slate-100 text-xl'>
            <Link to="/profile" className='text-2xl mb-1'>Welcome, {user.name}</Link>
           <Link to="/">Workout History</Link>
           &nbsp; | &nbsp;
           <Link to='/workout'>Workout</Link>
           &nbsp; | &nbsp;
           <Link to="" onClick={handleLogOut} >Log Out</Link>
        </nav>
    )
}