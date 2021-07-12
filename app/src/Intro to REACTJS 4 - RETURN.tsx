/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 4 - RETURN
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// USE RETURNS TO OUTPUT SELECTED VALUES
///  OBJECTIVE /// 

//////////////
/// RETURN ///
//////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///
const isHappy = true;
    let face = "none"
  // NB: IN JS YOU DON"T HAVE TO DECLARE THE CHECK FOR TRUE OR FALSE
  // EX: You can use: if (isHappy === true;) or if (isHappy)
    if ( isHappy ) {
      face = "smiling"
    } else {
      face = "frowning"
    }
    
    
console.log;

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* NB: WHEN YOU RETURN YOU CAN ONLY RETURN ONE ELEMENT OVERALL NOT MULTIPLE ONES
        // WE GET AROUND THIS BY WRAPPING OUR RETURNED VALUES IN ONE TOP-LEVEL DIV TAG */}
          return (
            <div>
              <div>My Face is {face}</div>
            </div>
          );

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////