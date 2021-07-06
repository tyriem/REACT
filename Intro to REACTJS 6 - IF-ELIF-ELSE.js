/// AUTHOR: TMRM
/// CONTRIBUTORS:   
// PROJECT: Intro to REACT 
/// VER: 1.0
/// DATE: 06-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

//IF ELSE-IF ELSE

class App extends React.Component {

 


  render() {
    
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
    
    return (
      <div>
      <div>My Face is {face}</div>
      </div>
    );
  }
  
}

React.render(<App />, document.getElementById('app'));