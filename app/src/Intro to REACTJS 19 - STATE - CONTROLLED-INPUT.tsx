/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 19 - REF VS CONTROLLED-INPUTS
/// VER: 1.0
/// DATE: 07-XX-2021

///  OBJECTIVE /// 
// CONTROL STATE USING CONTROLLED-INPUTS
///  OBJECTIVE /// 

///  NOTES /// 
// DATA IS STORED IN:
// 1) A DATABASE IN THE BACKEND
// 2) WITHIN THE APP ONCE LOGGED IN
// THIS DATA IS CALLED STATE
// REACT IS STATE SENSITIVE IN THAT IT REFRESHES WHEN IT NOTICES A STATE CHANGE
// STATE - CURRENT REPRESENTATION OF THE DATA IN YOUR APP
// THIS IS DONE TWO WAYS IN REACT-JS: REF AND/OR CONTROLLED-INPUTS
// 1) REF - THIS UPDATES VISUALLY ONCE A COMMAND IS ISSUED (EX. SUBMIT)
// 2) CONTROLLED-INPUTS - THIS UPDATES AS CHANGES ARE MADE
// WE USE useState TO MANAGE STATE LOCALLY ON-DEVICE
// IT HAS TWO ARGS: state & ageState
// "PUTTING USER IN MODAL STATE" - PUTTING THEM IN A STATE WHERE THEY CAN ONLY DO WHAT YOU WANT
///  NOTES /// 

///////////////
///  STATE ///
/// CONTROL ///
///  INPUT  ///  
//////////////

/// IMPORT ///

import React from 'react';
import logo from './logo.svg';
import './App.css';


/// LOGIC + RENDER ///

function App() {


// NB: A state has two args, the state itself and a set for that state
const [age, setAge] = React.useState();




 const handleAgeInput = (event) => {
 debugger;
 setAge(event.target.value)
 };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>

          <div>
            <div><h1>USING STATE</h1></div>
              <input placeholder="age" value={age|| ''} onChange= {handleAgeInput}/>
              <button onClick={() => alert(age)}>ADD</button>
        
              <div>AGE: {age}</div>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
