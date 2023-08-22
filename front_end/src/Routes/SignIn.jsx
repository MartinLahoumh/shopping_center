function SignIn() {
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
