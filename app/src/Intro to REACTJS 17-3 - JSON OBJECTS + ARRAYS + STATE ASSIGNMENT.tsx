/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 17-3 - JSON OBJECTS + ARRAYS + STATE
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// 1) Create a new array of elements, student- first, last / class / id , 5 elements in the array
// 2) Render the list of elements in an array
// 3) Class name must be like this BEG - Math, ADV - Math
// 4) Need to be able to filter the list by BEG or ADV
// BONUS) Need to be able to add students to the class
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

function App() {


  const [studentArray, setStudentArray] = React.useState([
  {
      first: "Aaron",
      last: "Saunders",
      level: "ADV",
      subject: "Math",
    id: 1,
  },
  {
    first: "Bernie",
    last: "Michael",
    level: "BEG",
    subject: "Math",
  id: 2,
  },
  {
    first: "Casey",
    last: "Smith",
    level: "BEG",
    subject: "Math",
  id: 3,
  },
]);


  const handleBtnClick = student => {
   
    setStudentArray([...studentArray, student]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* WRAPPING DIV */}
        <div>
        <FormEntry handleBtnClick={handleBtnClick} />

        <ListDisplay listData={studentArray} />

        </div>
      </header>
    </div>
  );
}
}

export default App;
//////////////////////////////////////////////////////////////////////


function FormEntry(props) {
  // this is where the new student name will be contained as
  // user is typing it, you call setStudentInput to update the
  // studentInput
  const [studentInput, setStudentInput] = React.useState();

  const [studentClassInput, setStudentClassInput] = React.useState();

  // this function will clear. the value of the student input
  const handleResetClick = () => {
    // WILL NOT WORK BECAUSE THIS IS A STATE VARIABLE
    // studentInput = ""
    setStudentInput('');
    studentClassInput('');
  };

  return (
    <div style={{ marginTop: 10, padding: 12, border: 'black 1px solid' }}>
      <p>
        <input
          placeholder="Student Name"
          value={studentInput|| ''}
          onChange={event => setStudentInput(event.target.value)}
        />
      </p>
      <p>
        <input
          placeholder="Student Class"
          value={studentClassInput|| ''}
          onChange={event => setStudentClassInput(event.target.value)}
        />
      </p>
      <div>
        {/* // when button clicked, pass the student as a value to the 
        // props.handleBtnClick function, the appropriate action is 
        // then taken, see App.js function for additional information */}
        <button
          onClick={() =>
            props.handleBtnClick({
              student: studentInput,
              class: studentClassInput
            })
          }
        >
          SUBMIT
        </button>
        &nbsp;
        <button onClick={handleResetClick}>RESET FORM</button>
      </div>
    </div>
  );
  }


//////////////////////////////////////////////////////////////////////

function ListDisplay(props) {
  //

  const [classFilter, setClassFilter] = React.useState('ALL');

  const renderList = () => {
    // if there is a value other than 'ALL' passed in as classFilter, then
    // use that value to filter the list... then render the
    // filtered list
    if (classFilter !== 'ALL') {
      const filteredList = props.listData?.filter(s =>
        s.class.startsWith(classFilter)
      );
      return filteredList?.map(s => (
        <li>
          {s.student} : {s.class}
        </li>
      ));
    } else {
      // if the value passed in is ALL, then use
      // the original list
      return props.listData?.map(s => (
        <li>
          {s.student} : {s.class}
        </li>
      ));
    }
  };

  return (
    <div style={{ marginTop: 10, padding: 12, border: 'black 1px solid' }}>
      Student List{' '}
      <select
        value={classFilter|| ''}
        onChange={e => setClassFilter(e.target.value)}
      >
        <option value={'ALL'}>ALL</option>
        <option value={'BEG'}>BEG</option>
        <option value={'ADV'}>ADV</option>
      </select>
      <ul>{renderList()}</ul>
    </div>
  );
}



