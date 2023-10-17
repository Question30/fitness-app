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
import AdminPage from "./pages/Admin/AdminPage";
import AdminNav from "./components/AdminNav";
import AllWorkouts from "./pages/Admin/AllWorkouts";
import AllExercises from "./pages/Admin/AllExercises";
import ProfilePage from "./pages/ProfilePage";
import DataPage from "./pages/DataPage";

function App() {
  const [user, setUser] = useState(getUser());

  return( 
  <main className="bg-cyan-700 min-h-screen pb-4">
    {user ? 
    (
      user.isAdmin ?
      <> 
      <AdminNav/>
      <Routes>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/workouts' element={<AllWorkouts/>}/>
        <Route path='/exercises' element={<AllExercises/>}/>
       
      </Routes>
      </>
      :
    <>
    <Nav user={user} setUser={setUser} />
    <Routes>
      <Route path="/data" element={<DataPage user={user} />} />
      <Route path="/profile" element={<ProfilePage user={user}/>} />
      <Route path='/workout'  element={<WorkoutsPage user={user}/>}/>
      <Route path='/' element={<WorkoutHistoryPage  user={user}/>}/>
      <Route path='/workout/new' element={<NewWorkoutPage user={user} />} />
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
