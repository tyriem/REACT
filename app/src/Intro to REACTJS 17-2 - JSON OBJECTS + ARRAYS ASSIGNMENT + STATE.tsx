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


export default function App() {
  // create student array as state because we want changes
  // to cause screen to re draw
  const [studentArray, setStudentArray] = React.useState([
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


  // function that is called when I click on the add button
  // for the name input field,  it will add the student to the
  // array
  const handleBtnClick = student => {
    // javascript spread operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    setStudentArray([...studentArray, student]);
  };

  

  return (
    <>
      <FormEntry handleBtnClick={handleBtnClick} />

      <ListDisplay listData={studentArray} />
    </>
  );
}


/////////////////////////////////////////////////

function FormEntry(props) {
  // this is where the new student name will be contained as
  // user is typing it, you call setStudentInput to update the
  // studentInput
  const [studentFirstInput, setStudentFirstInput] = React.useState();

  const [studentLastInput, setStudentLastInput] = React.useState();

  const [studentClassInput, setStudentClassInput] = React.useState();

  const [studentLevelInput, setStudentLevelInput] = React.useState();

  var [counter, setCounter] = React.useState(3);

  return (
    <div style={{ marginTop: 10, padding: 12, border: 'black 1px solid' }}>
      <p>
        <input
          placeholder="Student First Name"
          value={studentFirstInput || ''}
          onChange={event => setStudentFirstInput(event.target.value)}
        />
      </p>

      <p>
        <input
          placeholder="Student Last Name"
          value={studentLastInput || ''}
          onChange={event => setStudentLastInput(event.target.value)}
        />
      </p>

      <p>
        <input
          placeholder="Student Class"
          value={studentClassInput || ''}
          onChange={event => setStudentClassInput(event.target.value)}
        />
      </p>

      <p>
        <input
          placeholder="ID"
          value={++counter || ''}
          onChange={event => setCounter(event.target.value)}
          disabled
        />
      </p>

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
        {/* // when button clicked, pass the student as a value to the 
        // props.handleBtnClick function, the appropriate action is 
        // then taken, see App.js function for additional information */}
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
        <li key= {s.id}>
          {s.studentFirstName} : {s.studentLastName} : {s.class} : {s.level} : {s.id}
        </li>
      ));
    } else {
      // if the value passed in is ALL, then use
      // the original list
      return props.listData?.map(s => (
        <li key= {s.id}>
          {s.studentFirstName} : {s.studentLastName} : {s.class} : {s.level} : {s.id}
        </li>
      ));
    }
  };

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