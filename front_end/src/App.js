import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component} from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SignIn from './Routes/signIn';

function App(){
    return(
      <Router>
        <div className="App">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',backgroundColor: 'red'}}>
            <p>Shopping Center</p>
            <div className='sections'>
              <Link to= '/SignIn'>Sign In</Link>
            </div>
          </div>
          <Routes>
            <Route exact path='/SignIn' element={<SignIn />}></Route>
          </Routes>
        </div>
      </Router>
    )
}

export default App;
