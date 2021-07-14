/// AUTHOR: TMRM
/// CONTRIBUTORS: @aaronsaunders
/// PROJECT: Intro to REACT 17-1 - JSON OBJECTS + ARRAYS + STATE
/// VER: 2.0
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
///   ARRAYS   ///
///     &      ///
//    STATE    ///
//////////////////

/// IMPORTS ///

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// APP COMPONENT ///

export default function App() {
  // CREATE STUDENT ARRAY AND SET STATE
  const [studentArray, setStudentArray] = React.useState([
    // FILL ARRAY WITH INITIAL DATA
    {
      studentFirstName: 'Aaron',
      studentLastName: 'Saunders',
      level: 'ADV',
      class: 'Math',
      id: 1
    },
    {
      studentFirstName: 'Bernie',
      studentLastName: 'Michael',
      level: 'BEG',
      class: 'Math',
      id: 2
    },
    {
      studentFirstName: 'Casey',
      studentLastName: 'Smith',
      level: 'BEG',
      class: 'Math',
      id: 3
    }
  ]);


  // CONST FUNC TO HAND BUTTON CLICK
  const handleBtnClick = student => {
    // SPREAD OPERATOR (...) TO DISTRIBUTE CHANGING INPUT TO STATES
    setStudentArray([...studentArray, student]);
  };

  

  return (
    <>
      {/* FEED handleBtnClick TO FormEntry COMPONENT */}
      <FormEntry handleBtnClick={handleBtnClick} />

      {/* FEED studentArray TO ListDisplay COMPONENT AS listData*/}
      <ListDisplay listData={studentArray} />
    </>
  );
}


/////////////////////////////////////////////////

/// FORM-ENTRY COMPONENT ///

function FormEntry(props) {
  // COLLECT THE STATE OF THE VALUES AS USER INPUTS
  const [studentFirstInput, setStudentFirstInput] = React.useState();

  const [studentLastInput, setStudentLastInput] = React.useState();

  const [studentClassInput, setStudentClassInput] = React.useState();

  const [studentLevelInput, setStudentLevelInput] = React.useState();

  var [counter, setCounter] = React.useState(3);

  return (
// WRAPPER DIV WITH STYLE
    <div style={{ marginTop: 10, padding: 12, border: 'black 1px solid' }}>

      {/* INPUT: STUDENT FIRST NAME */}
      <p>
        <input
          placeholder="Student First Name"
          value={studentFirstInput || ''}
          onChange={event => setStudentFirstInput(event.target.value)}
        />
      </p>

      {/* INPUT: STUDENT LAST NAME */}
      <p>
        <input
          placeholder="Student Last Name"
          value={studentLastInput || ''}
          onChange={event => setStudentLastInput(event.target.value)}
        />
      </p>

      {/* INPUT: STUDENT CLASS */}
      <p>
        <input
          placeholder="Student Class"
          value={studentClassInput || ''}
          onChange={event => setStudentClassInput(event.target.value)}
        />
      </p>

      {/* INPUT: STUDENT ID */}
      <p>
        <input
          placeholder="ID"
          value={++counter || ''}
          onChange={event => setCounter(event.target.value)}
          disabled
        />
      </p>

      {/* INPUT: STUDENT LEVEL SELECTOR */}
      <p>
        CLASS LEVEL: &nbsp;
        <select
          value={studentLevelInput || ''}
          onChange={event => setStudentLevelInput(event.target.value)}
        >
          <option value={''}>SELECT A LEVEL </option>
          <option value={'BEG'}>BEG</option>
          <option value={'ADV'}>ADV</option>
        </select>
      </p>

      <div>

        {/* // ONCLICK EVENT TO FEED DATA TO ARRAY & DISPLAY */}
        <button
          onClick={() =>
            props.handleBtnClick(
              {
                studentFirstName: studentFirstInput,
                studentLastName: studentLastInput,
                class: studentClassInput,
                level: studentLevelInput,
                id: counter,
              },
              setCounter(counter)
            )
          }
        >
          SUBMIT
        </button>
        &nbsp;
      </div>
    </div>
  );
}

/////////////////////////////////////////////////

/// LIST-DISPLAY COMPONENT ///

function ListDisplay(props) {
  //

  // FILTER: ALL
  const [classFilter, setClassFilter] = React.useState('ALL');

  // RENDER LIST
  const renderList = () => {

    //RENDER LIST CONDITIONALLY (Ex. BEG OR ADV) BASED ON FILTER
    if (classFilter !== 'ALL') {
      const filteredList = props.listData?.filter(s =>
        s.class.startsWith(classFilter)
      );
    // MAP THE NEW FILTERED LIST
      return filteredList?.map(s => (
        <li key= {s.id}>
          {s.studentFirstName} : {s.studentLastName} : {s.class} : {s.level} : {s.id}
        </li>
      ));
    } else {
      // RENDER LIST AS-IS IF FILTER SET TO ALL 
      return props.listData?.map(s => (
        <li key= {s.id}>
          {s.studentFirstName} : {s.studentLastName} : {s.class} : {s.level} : {s.id}
        </li>
      ));
    }
  };
  
  // STYLED LIST FILTER OPTION SELECTION
  return (
    <div style={{ marginTop: 10, padding: 12, border: 'black 1px solid' }}>
      Student List{' '}
      <select
        value={classFilter}
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

/////////////////////////////////////////////////