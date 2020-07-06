import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';


class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Kredit Turi: Ipoteka Yillik</h1>
        <Calculator />
      </div>
    )
  }
}

export default App;
