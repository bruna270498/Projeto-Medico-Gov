import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/Home">
          {/* <Home /> */}
          Oi
        </Route>
        <Route exact path="/" element={ <Login/> }/>
      </Routes>
    </div >
  );
}

export default App;