import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className="border my-5 w-3/4 mx-auto">
    <div className="">
      <form className='flex flex-col text-center pt-5 content-center w-1/2 mx-auto' autoComplete="off" onSubmit={handleSubmit}>
        <label className='text-xl py-2 underline font-bold text-orange-100'>Email:</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label className='text-xl py-2 underline font-bold text-orange-100'>Password:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50' type="submit">LOG IN</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}