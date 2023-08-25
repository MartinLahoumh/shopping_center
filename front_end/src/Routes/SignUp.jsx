import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const [authForm, setAuthForm] = useState({
    username: "",
    password: "",
  });
  const config = { headers: { "Content-Type": "application/json" } };
  const navigate = useNavigate();
  const handleChange = async event => {
    let value = event.target.value;
    const fieldName = event.target.id;
    setAuthForm(prevData => ({ ...prevData, [fieldName]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/SignUp`,
        authForm,
      );
      alert(response.data["msg"]);
      navigate("/SignIn");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={authForm["username"]}
            onChange={handleChange}
          ></input>
          <br />
          <label>Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={authForm["password"]}
            onChange={handleChange}
          ></input>
          <br />
          <button type="submit">Create Account</button>
          <p>Already have an account?</p>
          <Link to="/SignIn">Sign In!</Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
