import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm/LoginForm";
import { useState } from "react";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div className="text-center">
      <h1 className="text-4xl pt-10 underline font-bold text-orange-100">Welcome</h1>
      <button className="border my-4 rounded text-xl bg-emerald-500 font-bold text-slate-50 w-1/6" onClick={() => {setShowLogin(!showLogin)}}>{showLogin ? "Sign Up" : "Log In"}</button>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      </div>
    </main>
  );
}
