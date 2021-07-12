/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 1 - LET
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// USE let, const, & var to declare variables
///  OBJECTIVE /// 

////////////
/// LETs ///
////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///
let aNumber = 400;
const total = aNumber + 100;
console.log;

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          <h1>Hello World. The Number is {total}.</h1>

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////
