// import SearchForm from "./components/SearchForm";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Good from "./pages/Good";
import Bad from "./pages/Bad";
import Search from "./pages/Search";
// import About from "./pages/About";
import login from "./pages/login";
import Navbar from "./components/Navbar";
import About from "./pages/About";
// import Footer from "./components/Footer";
// import Calculator from "./components/calculatorForm";
// import Map from './Map';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Routes>
          <Route exact path="/about" component={About} />
          <Route exact path="/good" component={Good} />
          <Route exact path="/bad" component={Bad} />
          <Route exact path="/login" component={login} />
          {/* <Route exact path="/logout" component={logout} />  */}
          <Route exact path="/" component={About} />
          <Route exact path="/search" component={Search} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
