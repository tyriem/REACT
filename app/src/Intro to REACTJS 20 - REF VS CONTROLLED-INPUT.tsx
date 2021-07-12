/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 19 - REF VS CONTROLLED-INPUTS
/// VER: 1.0
/// DATE: 07-XX-2021

///  OBJECTIVE /// 
// CONTROL STATE USING BOTH REF AND CONTROLLED-INPUT
///  OBJECTIVE /// 

///  NOTES /// 
// WHEN WE SET STATES WE CAN ISSUE THEM AND TRACK THEM IN TWO WAYS
// 1) REF - THIS UPDATES VISUALLY ONCE A COMMAND IS ISSUED (EX. SUBMIT)
// 2) CONTROLLED-INPUTS - THIS UPDATES AS CHANGES ARE MADE
///  NOTES /// 

///////////////
///  STATE ///
/// CONTROL ///
///  INPUT  ///  
//////////////

/// LOGIC + IMPORT ///

import React from 'react';
import logo from './logo.svg';
import './App.css';

// REF IMPLEMENTATION - NAME PART 1
const nameRef = React.createRef(null);

// REF IMPLEMENTATION - NAME PART 1
const handleNameBtnClick = () => {
  console.log(nameRef);
  alert(nameRef.current.value)
};


/// LOGIC + RENDER ///

function App() {

// CONTROLLED-INPUT IMPLEMENTATION - AGE PART 1
// NB: A state has two args, the state itself and a set for that state
const [age, setAge] = React.useState();



// CONTROLLED-INPUT IMPLEMENTATION - AGE PART 2
 const handleAgeInput = (event) => {
 debugger;
 setAge(event.target.value)
 };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>

        {/* TODO: Add Data Constraint / Validation */}
        {/* REF IMPLEMENTATION - AGE PART 3 */}
          <div>
            <div><h1>USING REF: </h1></div>
            <input placeholder="name" ref={nameRef} />
            <button onClick={handleNameBtnClick}>ADD</button>
          
             <div>NAME: {nameRef?.current?.value}</div>
          </div>

        {/* CONTROLLED-INPUT IMPLEMENTATION - AGE PART 3 */}
          <div>
            <div><h1>USING CONTROLLED-INPUTS: </h1></div>
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
