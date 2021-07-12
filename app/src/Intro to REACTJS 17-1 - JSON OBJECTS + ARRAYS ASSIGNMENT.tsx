/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 17-1 - JSON OBJECTS + ARRAYS
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// 1) Create a new array of elements, student- first, last / class / id , 5 elements in the array
// 2) Render the list of elements in an array
// 3) Class name must be like this BEG - Math, ADV - Math
// 4) Need to be able to filter the list by BEG or ADV
///  OBJECTIVE /// 

//////////////////
///    JSON    ///
///   OBJECT   ///
///      &     ///
///   ARRAYS   ///
//////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///

// JSON OBJECT - SET OF KEYED VALUES WE ACCESS VIA THE KEY AND CAN MANIPULATE
const classArray = [
  {
    student: {
      first: "Aaron",
      last: "Saunders",
    },
    class: {
      level: "ADV",
      subject: "Math",
    },
    id: 1
  },
  {
    student: {
      first: "Barry",
      last: "Michael",
    },
    class: {
      level: "BEG",
      subject: "Math",
    },
    id: 2
  },
  {
    student: {
      first: "Carey",
      last: "Smith",
    },
    class: {
      level: "BEG",
      subject: "Math",
    },
    id: 3
  },
];

console.log(classArray);


// GET ALL OF THE STUDENTS WHOSE CLASS LEVEL = BEG
const classBeginners = classArray.filter(
  (p) => p.class.level === "BEG"
);

console.log(classBeginners);

/// RENDER ///

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        
       <div>
         <h1>ARRAY OF ALL CLASSMATES:</h1>
       {classArray.map((classmate) => {
          return (
            
              <div key = {classmate.id}>
                <div>id: {classmate.id}</div>
                <div>First Name: {classmate.student.first}</div>
                <div>Last Name: {classmate.student.last}</div>
                <div>Class Subject: {classmate.class.subject}</div>
                <div>Class Level: {classmate.class.level}</div>

                <br></br>

              </div>
            
            ); })}

       </div>

       <div>
       <h1>ARRAY OF CLASSMATES IN THE BEGINNERS CLASS:</h1>
       {classBeginners.map((classmate) => {
          return (
            
              <div key = {classmate.id}>
                <div>id: {classmate.id}</div>
                <div>First Name: {classmate.student.first}</div>
                <div>Last Name: {classmate.student.last}</div>
                <div>Class Subject: {classmate.class.subject}</div>
                <div>Class Level: {classmate.class.level}</div>

                <br></br>

              </div>
            
            ); })}

       </div>

       </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////