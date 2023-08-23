import "./css/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SignIn from "./Routes/SignIn";
import Home from "./Routes/Home";
import ErrorPage from "./Routes/ErrorPage";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header auth={null} />
        <Routes>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route path="/:auth" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
