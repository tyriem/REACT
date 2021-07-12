/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 3 - IF-ELSE
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// USE IF-ELSE STATEMENT TO CONTROL VAR
///  OBJECTIVE /// 

///////////////
/// IF-ELSE ///
///////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';


/// LOGIC ///
const isHappy = true;
let face = "none"

if (isHappy) {
face = "smiling"
} else {
	face = "frowning"
}

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          <h1>Hello World. I am {face}.</h1>,

      </header>
    </div>
  );
}

export default App;