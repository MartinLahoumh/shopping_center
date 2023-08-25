import "../css/App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <p style={{color:'black', fontFamily:'Ruwudu', fontWeight:'700px', fontSize: '30px'}}>Shopping Center</p>
      </Link>
      <div className="sections">
        {props.auth == null ? (
          <Link to="/SignIn">Sign In</Link>
        ) : (
          <>
            <Link to="/Post">Post</Link>
            <Link to="/SignIn">LogOut</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
