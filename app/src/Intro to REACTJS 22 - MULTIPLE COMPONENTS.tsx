/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 22 - MULTIPLE COMPONENTS
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
/// MULTIPLE COMPONENT APP STRUCTURE
/// EVERY COMPONENT IS ONLY A FUNCTION
/// IDEALLY YOU WOULD WANT DIFFERENT COMPONENTS FOR EACH UNIQUE PART OF YOUR APP
/// 'SEPARATION OF CONCERNS' - EACH COMPONENT SHOULD SOLVE A SINGLE PROBLEM / HAVE ONE PURPOSE
/// WHEN WE BUILD APPS WE BUILD THEM WITH AN OVERALL PARENT COMPONENT MANAGING STATES AND ERRORS 
/// AND CHILD COMPONENTS DOING A SINGLE THING FOR ERROR RESOLUTION REASONS 
///  OBJECTIVE /// 

/////////////////////
///    MULTIPLE   ///
///   COMPONENTS  ///
/////////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// FIRST COMPONENT ///

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <p>
            Hello World!
          </p>

      </header>
    </div>
  );
}

// NB: ONLY ONE COMPONENT CAN BE THE EXPORT DEFAULT 
export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////

/// SECOND COMPONENT ///
function AdditionalComponent() {
  return (
    <div className="AdditionalComponent">

    </div>
  );
}
