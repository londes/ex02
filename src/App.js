import './App.css';
import Child from './Child';
import React from 'react';

function App() {
  let myName = 'will'
  return (
    <div className="App">
      <Child name={myName}/>
    </div>
  );
}

export default App;
