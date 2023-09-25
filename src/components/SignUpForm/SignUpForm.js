import { useState } from "react";
import { signUp } from "../../utilities/users-service";

// SignUpForm.jsx <--> users-service.js <--> users-api.js
// <-Internet-> routes/users.js <--> controller/users.js

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const disable = formData.password !== formData.confirm;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      error: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      //Copy formData
      const userFormData = { ...formData };
      //remove unused data
      delete userFormData.confirm;
      delete userFormData.error;

      //calling user service signUp function
      const user = await signUp(userFormData);
      setUser(user);
    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        error: "Sign Up Failed - Try Again",
      });
    }
  };

  return (
    <div>
      <div className="border my-5 w-3/4 mx-auto">
        <form className="flex flex-col text-center pt-5 content-center w-1/2 mx-auto" autoComplete="off" onSubmit={handleSubmit}>
          <label className="text-xl py-2 underline font-bold text-orange-100">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="text-xl py-2 underline font-bold text-orange-100">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="text-xl py-2 underline font-bold text-orange-100">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="text-xl py-2 underline font-bold text-orange-100">Confirm Password:</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />

          <button className='border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50' type="submit" disabled={disable}>
            Sign Up
          </button>
        </form>
      </div>
      <p className="error-message">{FormData.error}</p>
    </div>
  );
}
