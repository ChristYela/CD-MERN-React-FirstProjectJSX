import React from 'react'
import './App.css';

class App extends React.Component{

  render(){
    return(
      <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Clim Mt. Everst</li>
        <li>Run a marathon</li>
        <li>Feed the dog!</li>
        <li>Sleep 12 hours</li>
      </ul>
    </div>  
  );
        }
}

export default App;

