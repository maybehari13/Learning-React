// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { First } from './Components/First';
// import { Second } from './Components/Second';
// import Third from './Components/Third';
import ComponentWithProps from './Components/ComponentWithProps';

function App() {

  const obj = {
    str: 'Hello World',
    int: 10
  }

  return (
    <React.Fragment>
      {/* <First /> */}
      {/* <Second /> */}
      {/* <Third /> */}
      <ComponentWithProps
        headerText='passed from App'
        numericProp={100} 
        objProp={obj}
      />
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
