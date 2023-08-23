import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Redirect from 'react-router-dom';

function SignUp() {
    const [authForm, setAuthForm] = useState({
        username: "",
        password: "",
    })
    const config = {headers:{'Content-Type':'application/json'}}
    const handleChange = async(event)=>{
        let value = event.target.value;
        const fieldName = event.target.id;
        setAuthForm((prevData)=>({...prevData, [fieldName]:value}));
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/SignUp/${authForm.username}`,config)
            alert(response.data["msg"])
            return(<Redirect to={"/SignIn"} />);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <div>
        <h1>Sign In</h1>
        <form>
          <label>Username</label>
          <input type="text" name="username" id="username"></input>
          <br />
          <label>Password</label>
          <input type="text" name="password" id="password"></input>
          <br />
          <button type="submit">Create Account</button>
          <p>Already have an account?</p><Link to="/SignIn">Sign In!</Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
