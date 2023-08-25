import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import '../css/Sign.css';
function SignIn() {
    const [authForm, setAuthForm] = useState({
        username: "",
        password: "",
    })
    const config = {headers:{'Content-Type':'application/json'}}
    const navigate = useNavigate();
    const handleChange = async(event)=>{
        let value = event.target.value;
        const fieldName = event.target.id;
        setAuthForm((prevData)=>({...prevData, [fieldName]:value}));
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/SignIn/${authForm.username}`,authForm, config);
            if(response.data["msg"] == 1){
                alert("Username not found");
            } 
            else if(response.data["msg"] == 2){
                alert("Incorrect password");
            }
            else{
                navigate(`/${response.data["access_token"]}`)
                //return(<Redirect to={"/"+response.access_token} />)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <>
      <div className='sign-form-wrap'>
        <h1 className='sign-title'>Sign In</h1>
        <hr />
        <form className='sign-form' onSubmit={handleSubmit}>
          <label className='sign-form-subtitle'>Username</label>
          <input type="text" name="username" id="username" onChange={handleChange}></input>
          <br />
          <label className='sign-form-subtitle'>Password</label>
          <input type="text" name="password" id="password" onChange={handleChange}></input>
          <br />
          <button className="artButton" type="submit">Sign In</button>
          <p>Dont have an account?</p><Link to="/SignUp">Sign Up!</Link>
        </form>
      </div>
    </>
  );
}

export default SignIn;
