/// AUTHOR: TMRM
/// CONTRIBUTORS:   
// PROJECT: Intro to REACT 
/// VER: 1.0
/// DATE: 06-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 


// MANIPULATING ARRAYs

// TODO CREATE AN INDEX OF 5 NUMBERS
// ADD FIRST AND LAST NUMBER USING INDEX
//DISPLAY RESULT OF ADDING FIRST AND LAST NUMBER
class App extends React.Component {

  render() {
    //ARRAY
    //TO SET OUR ARRAY AS PERMANENT WE SET IT AS CONST, TO SET IT AS FUNGIBLE WE SET IT WITH A LET
    let anArray = [1, 2, 3, 4, 5]

    // NB: WE CAN EITHER SET AN ARRAY INDEX VALUE AS A CONSTANT AND CALL IT FROM THERE OR JUST SET A NEW VALUE BASED ON THE ARRAY USING INDEX
    // EX: varX = anArray[0]; varY = anArray[4]; const aSumVar = (varX + varY) 
    // OR const firstIndex = 0; const lastIndex = 4; const total = anArray[firstIndex] + anArray[lastIndex]
    var varX = anArray[0];
    
    var varY = anArray[4];
    
    
    const aSumVar = (varX + varY);
    
    //console.log spits out the value of what you put in it
    console.log(anArray)
    
    return (
      <div>
      <div>An Array: {anArray}</div>
      <div>The sum of {anArray[0]} and {anArray[4]} is: {aSumVar} </div>
      </div>
    );
  }
  
}

React.render(<App />, document.getElementById('app'));