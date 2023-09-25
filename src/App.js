import "./App.css";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import { getUser } from "./utilities/users-service";
import WorkoutsPage from './pages/WorkoutsPage';
import WorkoutHistoryPage from './pages/WorkoutHistoryPage';
import AddExercisePage from "./pages/AddExercisePage";
import NewWorkoutPage from './pages/NewWorkoutPage';
import WorkoutPage from "./pages/WorkoutPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const [user, setUser] = useState(getUser());

  return( 
  <main className="bg-cyan-700 min-h-screen ">
    {user ? 
    (
      user.isAdmin ?
      <AdminPage/>
      :
    <>
    <Nav user={user} setUser={setUser} />
    <Routes>
      <Route path='/workout'  element={<WorkoutsPage />}/>
      <Route path='/' element={<WorkoutHistoryPage  user={user}/>}/>
      <Route path='/workout/new' element={<NewWorkoutPage />} />
      <Route path='/workout/:id' element={<WorkoutPage user={user} />} />
      <Route path='/workout/add-exercise/:id' element={<AddExercisePage/>} />
    </Routes> 
    </>)
    : 
    <AuthPage setUser={setUser} />}
    
    </main>
  );
}

export default App;
