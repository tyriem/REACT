/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 2 - VARs + STRINGs
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

//////////////////////
/// VARs + STRINGs ///
//////////////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
let aString = "REACT";
console.log;

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          <h1>Hello World. I am learning {aString}.</h1>

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////