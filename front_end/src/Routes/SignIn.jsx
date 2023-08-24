import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
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
      <div>
        <Header auth={null} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" id="username" onChange={handleChange}></input>
          <br />
          <label>Password</label>
          <input type="text" name="password" id="password" onChange={handleChange}></input>
          <br />
          <button type="submit">Sign In</button>
          <p>Dont have an account?</p><Link to="/SignUp">Sign Up!</Link>
        </form>
      </div>
    </>
  );
}

export default SignIn;
