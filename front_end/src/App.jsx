import './css/App.css';
import React, {useState, useEffect, Component} from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SignIn from './Routes/SignIn';

function App(){
    return(
      <Router>
        <div className="App">
          <div style={{margin:'0',display:'flex', justifyContent:'space-between',width:'100%', alignItems:'center',backgroundColor: 'red'}}>
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