import "./css/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import Home from "./Routes/Home";
import ErrorPage from "./Routes/ErrorPage";
import ArtPage from "./Routes/ArtPage";
import CheckoutPage from "./Routes/CheckOutPage";
import Post from "./Routes/Post";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/SignIn" element={<SignIn />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:auth" element={<Home />}></Route>
        <Route path="/ArtPage" element={<ArtPage />}></Route>
        <Route path="/test2" element={<CheckoutPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
