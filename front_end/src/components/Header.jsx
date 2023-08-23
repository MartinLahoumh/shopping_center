import "../css/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SignIn from "../Routes/SignIn";
import Home from "../Routes/Home";
import ErrorPage from "../Routes/ErrorPage";

function Header(props) {
  return (
        <header>
          {/* replace p with logo */}
          <p>Shopping Center</p>
          <div className="sections">
            {/* place everything else in header into here */}
            {props.auth == null &&
            <Link to="/SignIn">Sign In</Link>}
            {props.auth != null &&
            <Link to="/SignIn">Log Out</Link>}
          </div>
        </header>
  );
}

export default Header;
