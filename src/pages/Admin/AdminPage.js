import { useState, useEffect } from "react"
import * as userService from '../../utilities/users-service';

export default function AdminPage(){

    const [userList, setUserList] = useState([]);

    useEffect(function(){
        async function getAllUsers(){
            const allUsers = await userService.getAllUsers();
            setUserList(allUsers);
        }

        getAllUsers();
    }, [])

    console.log(userList);

    function deleteUser(id){
        const indexOfUser = userList.findIndex((user) => user._id === id);
        const copyOfUserList = [...userList];
        copyOfUserList.splice(indexOfUser, 1);
        setUserList(copyOfUserList);
        userService.deleteUser(id);
    }

    return(
        <main className="text-center text-orange-100 my-4">
        <h1 className="text-3xl">All Users</h1>
        {
            userList ?
            userList.map((user) => {
                return(
                    <div className="border my-4 w-3/4 mx-auto py-4 text-lg">
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/4' onClick={() => deleteUser(user._id)}>Delete User</button>
                    </div>
                )
            })
            :
            <div>No Users Found</div>
        }
        </main>
    )
}