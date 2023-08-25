import "../css/App.css";
import { Link } from "react-router-dom";

import SignIn from "../Routes/SignIn";
import Home from "../Routes/Home";

function Header(props) {
  return (
    <header>
      {/* replace p with logo */}
      <Link to="/" element={<Home />}>
        <p>Shopping Center</p>
      </Link>
      <div className="sections">
        {/* place everything else in header into here */}
        {props.auth == null && (
          <Link to="/SignIn" element={<SignIn />}>
            Sign In
          </Link>
        )}
        {props.auth != null && <Link to="/SignIn">Post</Link> && (
          <Link to="/SignIn">Log Out</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
