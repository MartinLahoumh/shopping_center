import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from '../components/Header';
const SignIn = (props)=>{
    const [authForm, setAuthForm] = useState({
        username: "",
        password: "",
    });
    const config = {headers:{'Content-Type':'application/json'}}
    const handleChange = async(event)=>{
        let value = event.target.value;
        const fieldName = event.target.id;
        setAuthForm((prevData)=>({...prevData, [fieldName]:value}));
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await axios.post(`/SignIn/${authForm.username}`, config)
            if(response.msg == 1){
                alert("Username not found");
            }
            else if(response.msg == 2){
                alert("Incorrect password");
            }
            else{
                return(<Redirect to="/" />)
            }
        } catch (error) {
            console.log(error);
        }
    } 
  return (
    <>
      <div>
        <Header auth={null}/>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" id="username" value={authForm["username"]} onChange={handleChange}></input>
          <br />
          <label>Password</label>
          <input type="text" name="password" id="password" value={authForm["password"]} onChange={handleChange}></input>
          <br />
          <button type="submit">Sign In</button>
        </form>
        <p>Dont have an account?</p><Link to='/SignUp'>Sign Up!</Link>
      </div>
    </>
  );
}

export default SignIn;
