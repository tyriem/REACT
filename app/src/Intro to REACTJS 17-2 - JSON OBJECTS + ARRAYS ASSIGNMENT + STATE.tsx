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
// BONUS) Need to be able to input new entries into the array
///  OBJECTIVE /// 

//////////////////
///    JSON    ///
///   OBJECT   ///
///      &     ///
///   ARRAYS   ///
//////////////////

/// IMPORTS ///

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///

//NB:  JSON OBJECT - SET OF KEYED VALUES WE ACCESS VIA THE KEY AND CAN MANIPULATE
// JSON OBJECT: classArray = { "Math": [{ "firstName": "John", "lastName": "Doe", "class": "BEG" }, { "firstName": "Jane", "lastName": "Doe", "class": "ADV" }], "Science": [{ "firstName": "John", "lastName": "Doe", "class": "BEG" }, { "firstName": "Jane", "lastName": "Doe", "class": "ADV" }] }
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
// FILTER class.level as BEG
const classBeginners = classArray.filter(
  (p) => p.class.level === "BEG"
);

console.log(classBeginners);

// GET ALL OF THE STUDENTS WHOSE CLASS LEVEL = ADV
// FILTER class.level as ADV
const classAdvanced = classArray.filter(
  (p) => p.class.level === "ADV"
);

console.log(classAdvanced);





/// RENDER ///

function App() {

  const [ setClassArray] = React.useState();
  const [studentInput, setStudentInput] = React.useState();

  const [first, setFirst] = React.useState();
  const [last, setLast] = React.useState();
  const [level, setLevel] = React.useState();
  const [subject, setSubject] = React.useState();
  const [id, setId] = React.useState();

  
    const handleFirstInput = (event) => {
      debugger;
      setFirst(event.target.value);
    };
    
    const handleLastInput = (event) => {
      debugger;
      setLast(event.target.value);
    };
    
    const handleLevelInput = (event) => {
      debugger;
      setLevel(event.target.value);
    };
    
    const handleSubjectInput = (event) => {
      debugger;
      setSubject(event.target.value);
    };
    
    const handleIdInput = (event) => {
      debugger;
      setId(event.target.value);
    };

    const handleBtnClick = () => {
      setClassArray([...classArray, studentInput]);
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {/* WRAPPING DIV */}
       <div>

       {/* H1 HEADER FOR Form */}
       <h1>FORM FOR ADDING STUDENTS</h1>
        <input placeholder="First Name" value={first|| ''} onChange={handleFirstInput} />
        <input placeholder="Last Name" value={last|| ''} onChange={handleLastInput} />
        <input placeholder="Class Level" value={level|| ''} onChange={handleLevelInput} />
        <input placeholder="Class Subject" value={subject|| ''} onChange={handleSubjectInput} />
        <input placeholder="ID" value={id|| ''} onChange={handleIdInput} />
        <button onClick={() => handleBtnClick()}>SUBMIT</button>
      

         {/* H1 HEADER FOR ARRAY: classArray*/}
         <h1>ARRAY OF ALL CLASSMATES:</h1>
         {/* MAP TO OUTPUT ELEMENTS OF ARRAY: classArray */}
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
         {/* H1 HEADER FOR ARRAY: classBeginners*/}
       <h1>ARRAY OF CLASSMATES IN THE BEGINNERS CLASS:</h1>
       {/* MAP FOR ARRAY: classBeginners*/}
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

       <div>
         {/* H1 HEADER FOR ARRAY: classAdvanced*/}
       <h1>ARRAY OF CLASSMATES IN THE ADVANCED CLASS:</h1>
       {/* MAP FOR ARRAY: classAdvanced*/}
       {classAdvanced.map((classmate) => {
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