import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import Login from "./Login";
import LoginWithHooks from "./LoginWithHooks";
import HPCharacters from "./HPCharacters"
import HPCharactersWithHooks from "./HPCharactersWithHooks";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="nav-items">
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/login" className="nav-item">
              Login
            </Link>
            <Link to="/loginWithHooks" className="nav-item">
              Login with Hooks
            </Link>
            <Link to="/hpCharacters" className="nav-item">
              Characters
            </Link>
            <Link to="/hpCharactersWithHooks" className="nav-item">
              Characters with Hooks
            </Link>
          </ul>
        </nav>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/loginWithHooks" component={LoginWithHooks} />
          <Route path="/hpCharacters" component={HPCharacters} />
          <Route path="/hpCharactersWithHooks" component={HPCharactersWithHooks} />
        </div>
      </div>
    </Router>
  );
}

export default App;