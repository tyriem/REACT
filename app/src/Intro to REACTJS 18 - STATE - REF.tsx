/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 18 - STATE
/// VER: 1.0
/// DATE: 07-XX-2021

///  OBJECTIVE /// 
// CONTROL STATE USING REF
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

//////////////
/// STATE  ///
///  REF   ///
//////////////

/// LOGIC ///

import React from 'react';
import logo from './logo.svg';
import './App.css';

const nameRef = React.createRef(null);

const handleNameBtnClick = () => {
  console.log(nameRef);
  alert(nameRef.current.value)
};

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>

            <input placeholder="name" ref={nameRef} />
            <button onClick={handleNameBtnClick}>ADD</button>
          </p>
          <div>NAME: {nameRef?.current?.value}</div>
          </div>
      </header>
    </div>
  );
}

export default App;
