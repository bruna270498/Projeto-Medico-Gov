import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PatientPage from './pages/paciente';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/" element={ <Login/> }/>
        <Route exact path="/patient" element= {<PatientPage/>} />
      </Routes>
    </div >
  );
}

export default App;