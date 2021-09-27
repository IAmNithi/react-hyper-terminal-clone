import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log('this is app');
  const [inputlist, setInputlist] = useState([0]);
  const [input, setInput] = useState([]);
  let tempValue = '';

  const enterisPresed = () => {
    let arr = Object.create(input);
    let listArray = [];
    arr.push(tempValue);
    setInput(arr);
    tempValue = '';
    for(let i=0;i <= inputlist.length;i++){
      listArray.push(i);
    }
    setInputlist(listArray);
  }

  const printTextBelow = (event) => {
    console.log(event);
    if(event.charCode == 13 && event.target.value !== '') {
      tempValue = event.target.value;
      enterisPresed();
    } else {
      tempValue = event.target.value;
    }
  }




  useEffect(() => {
  }, []);

  return (
    <div className="App">
        <div className="terminal-container">
          {
            inputlist.map((value) => {
              return ( 
                <React.Fragment  key={value}>
              <div className="text-input">
                <p className="dark-green">seka9005@INL7FQT7Y2</p>
                <p className="pink">MINGW64</p>
                <p className="yellow">~</p>
                <input type="text" className="text-field" id="input" onKeyPress={(e) => printTextBelow(e)}
                autoFocus={value === inputlist.length -1 } disabled={value !== inputlist.length -1 }
                autocomplete="off"/>
              </div>
              <div className="entered-Input">{input[value]}</div>
              </React.Fragment>)
            })
          }
        </div>
     </div>
  );
}

export default App;
