/// AUTHOR: TMRM
/// CONTRIBUTORS:   
// PROJECT: Intro to REACT 
/// VER: 1.0
/// DATE: 06-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 


//ARRAYs
class App extends React.Component {

 


  render() {
    //ARRAY
    //TO SET OUR ARRAY AS PERMANENT WE SET IT AS CONST, TO SET IT AS FUNGIBLE WE SET IT WITH A LET
    let anArray = ['a', 'b', 'c', 'd']

        //WE CAN ADD ELEMENTS TO THE END OF AN ARRAY USING PUSH
        anArray.unshift('1');
        //WE CAN ADD ELEMENTS TO THE END OF AN ARRAY USING PUSH
        anArray.push('5');

    const index = 0;

    //console.log spits out the value of what you put in it
    console.log(anArray)
    
    return (
      <div>
      <div>An Array: {anArray}</div>
      <div>An Array Element: {anArray[0]}</div>
      <div>An Array Element: {anArray[index]}</div>
      </div>
    );
  }
  
}

React.render(<App />, document.getElementById('app'));