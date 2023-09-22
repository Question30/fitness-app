import { useState, useEffect } from "react"
import * as userService from '../utilities/users-service';

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
    }

    return(
        <>
        <h1>All Users</h1>
        {
            userList ?
            userList.map((user) => {
                return(
                    <div>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <button onClick={() => deleteUser(user._id)}>Delete User</button>
                    </div>
                )
            })
            :
            <div>No Users Found</div>
        }
        </>
    )
}