import { Link } from "react-router-dom"


export default function ProfilePage({user}){

    return(
        <main>
        <h1>Welcome {user.name}</h1>
        <Link to='/edit-user'>Edit info</Link>
        </main>
    )
    }