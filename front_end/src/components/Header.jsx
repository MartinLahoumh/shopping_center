import "../css/App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(localStorage.getItem("user_id"));
    console.log(localStorage.getItem("user_id"));
  }, [userId]);

  function handleLogOut() {
    localStorage.removeItem("user_id");
    window.location.reload();
  }

  return (
    <header>
      <Link to="/">
        <p>Shopping Center</p>
      </Link>
      <div className="sections">
        {userId === null ? (
          <Link to="/SignIn">Sign In</Link>
        ) : (
          <>
            <Link to="/Post">Post</Link>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
