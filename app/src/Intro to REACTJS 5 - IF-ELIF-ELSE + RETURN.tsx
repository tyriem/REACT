/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 5 - IF - ELSE IF - ELSE
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

///////////////
///   IF    ///
/// ELSE IF ///
///  ELSE   ///
///////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
const isHappy = true;
    let face = "none"

 
    if ( isHappy === true) {
      face = "smiling"
    //NB: IN EVERY LANGUAGE WE CAN DECLARE THE NOT EQUAL (USING BANG ! BEFORE THE BOOLEAN) OR THE EQUAL 
    //EX: else if ( !isHappy) or else if ( isHappy === false){
    } else if ( isHappy === false){
      face = "frowning"
    } else {
      face = "nothing"
    }
    
    
console.log;

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          
            <div>
              <div>My Face is {face}</div>
            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////
