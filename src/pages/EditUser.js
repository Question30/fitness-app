
export default function EditUSer({user}){
    return(
        <main>
            <h1>Edit user info</h1>
            <form>
            <label>Name:</label>
            <input type="text" value={user.name} />
            <label>Password:</label>
            <input type="password" value='password'/>

            </form>
        </main>
    )
}