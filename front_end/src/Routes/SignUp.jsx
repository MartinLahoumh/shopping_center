import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Redirect from "react-router-dom";
import Header from '../components/Header';
const SignUp = (props)=>{
    const [newUserForm, setNewUserForm] = useState({
        username: "",
        password: "",
    });
    const config = {headers:{'Content-Type':'application/json'}}
    const handleChange = async(event)=>{
        let value = event.target.value;
        const fieldName = event.target.id;
        setNewUserForm((prevData)=>({...prevData, [fieldName]:value}));
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await axios.post(`/SignUp`, config)
            console.log(response)
            return(<Redirect to="http://localhost:5000/SignIn" />)
        } catch (error) {
            console.log(error);
        }
    } 
  return (
    <>
      <div>
        <Header auth={null}/>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" id="username" value={newUserForm["username"]} onChange={handleChange}></input>
          <br />
          <label>Password</label>
          <input type="text" name="password" id="password" value={newUserForm["password"]} onChange={handleChange}></input>
          <br />
          <button type="submit">Create Account</button>
        </form>
        <p>Already have an account?</p><Link to='/SignIn'>Sign In!</Link>
      </div>
    </>
  );
}

export default SignUp;
