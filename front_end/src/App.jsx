import "./css/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SignIn from "./Routes/SignIn";
import Home from "./Routes/Home";
import ErrorPage from "./Routes/ErrorPage";
import ArtPage from "./Routes/ArtPage";
import CheckoutPage from "./Routes/CheckOutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* replace p with logo */}
          <Link to="/">
            <p>Shopping Center</p>
          </Link>
          <div className="sections">
            {/* place everything else in header into here */}
            <Link to="/SignIn">Sign In</Link>
            <Link to="/test2">CheckOut</Link>
          </div>
        </header>
        <Routes>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ArtPage" element={<ArtPage />}></Route>
          <Route path="/test2" element={<CheckoutPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
