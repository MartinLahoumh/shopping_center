import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import Post from "./Routes/Post";
import Home from "./Routes/Home";
import ErrorPage from "./Routes/ErrorPage";
import ArtPage from "./Routes/ArtPage";
import CheckoutPage from "./Routes/CheckoutPage";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:auth" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Post" element={<Post />}></Route>
        <Route path="/ArtPage" element={<ArtPage />}></Route>
        <Route path="/test2" element={<CheckoutPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
