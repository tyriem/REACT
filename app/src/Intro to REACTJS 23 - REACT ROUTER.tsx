/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 23 - REACT ROUTER
/// VER: 1.0
/// DATE: 07-XX-2021

///  OBJECTIVE ///
/// ROUTE BETWEEN PAGES IN REACT
///  OBJECTIVE ///

/////////////////
///   REACT   ///
///   ROUTER  ///
/////////////////

import React from "react";
import logo from "./logo.svg";
import "./App.css";

// IMPORT REACT WITH ROUTER TO HANDLE ROUTES,
// ROUTE TO SPECIFY ROUTES
// SWITCH TO PRIORITIZE ROUTES IN ORDER
// LINK TO HOTLINK TO A SPECIFIC ROUTE/PAGE
// USEHISTORY TO GET HISTORY OBJECT
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

export default function App() {
  return (
    // ROUTES GO IN THE ROUTER AS CHILDREN, as children
    <Router>
      {/* WE WRAP THE ROUTES IN A SWITCH SO THAT IT PRIORITIZES EXACT ROUTES AND 
      THE EARLIEST MATCHING ROUTE */}
      <Switch>
        {/* ROUTE TO: Home */}

        {/* OPTION 1: RENDER */}
        {/* NB: YOU CAN PERFORM BUSINESS LOGIC WITHIN THE RENDER IF YOU GO WITH IT OVER COMPONENT */}
        {/* NB: IF YOU SET THE HOME ROUTE AS THE SAME / THEN THE ROUTER ASSOCIATES HOME WITH ROOT */}
        <Route path="/" render={() => <Home />} />

        {/* OPTION 1.5: EXACT PATH */}
        <Route exact path="/" render={() => <Home />} />

        {/* OPTION 2: COMPONENT */}
        <Route path="/home" component={Home} />

        {/* OPTION 3: PARENT-CHILD */}
        <Route path="home">
          <Home />
        </Route>

        {/* OPTION 4: LINK */}
        <Link to="/">Home</Link>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ROUTE TO: About */}

        <Route path="/about" component={About} />

        <Route path="/about" render={() => <About />} />
      </Switch>

      {/* ROUTE FAILURE HANDLING */}
      <Route path="*" render={() => <NotFound />} />
    </Router>
  );
}

// FUNC TO PAGE: Home
function Home() {
  return <>home</>;
}

// FUNC TO PAGE: About
function About() {
  // USING HISTORY TO RETURN A LINK TO A PAGE
  const history = useHistory();
  console.log(history.location.pathname); // '/about'

  return (
    <>
      <h1>The about page is on: {history.location.pathname}</h1>
    </>
  );
}

// FUNC TO PAGE: About
function NotFound() {
  return <>notfound</>;
}
