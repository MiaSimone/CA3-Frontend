import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import CatFacts from "./Components/CatFacts";
import Component2 from "./Components/Component2";
import Loginout from "./Components/Login-out";
import Home from "./Components/Home";
import NoMatch from "./Components/NoMatch";
import KanyeWest from "./Components/KanyeWest";

import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";

function Header({isLoggedIn, loginMsg}) {
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/catfacts">Cat Facts</NavLink></li>
        <li><NavLink activeClassName="active" to="/kanyewest">Kanye West</NavLink></li>

        {isLoggedIn && (
          <React.Fragment>
            <li><NavLink activeClassName="selected" to="/component2">Component 2</NavLink></li>
          </React.Fragment>
        )}
        <li><NavLink activeClassName="active" to="/login-out">{loginMsg}</NavLink></li>
      </ul>
    </div>
  );
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const setLoginStatus = status => {
    setIsLoggedIn(status);
    history.push("/");
  };

  return (
    <Router>
    <div>
      <Header 
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
      />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/catfacts">
            <CatFacts />
          </Route>
          <Route path="/kanyewest">
            <KanyeWest />
          </Route>
          <Route path="/component2">
            <Component2 />
          </Route>
          <Route path="/login-out">
            <Loginout 
              loginMsg={isLoggedIn ? "Logout" : "Login"}
              isLoggedIn={isLoggedIn}
              setLoginStatus={setLoginStatus}
            />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>  
    </div>
    </Router>
  );
}

export default App;
