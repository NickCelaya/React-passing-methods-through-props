import React, { Component } from 'react';
import axios from "axios"
import NickTest from "./components/Nick"
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputValue: "",
      stuff: []
    }
  }


   getData = async () => {
    let response = await axios.get("https://swapi.co/api/"+this.state.inputValue)
    this.setState({
      stuff: response.data.results
    })
    console.log(this.state.inputValue && this.state.stuff)
  }

  receiveInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  // addToList = (event) => {     //// create array in state and push names to it with click event
  //   this.setState({
  //     TEST1: this.state.someArray.concat([event.target.value]),
  //     TEST: [...this.state.someArray, ...event.target.value]
  //   })
  // }


  render() {

    let data = this.state.stuff.map((element, index) => {
      return (
        <div key={index}>
          <h1>{element.name}</h1>
          <h1>{element.height}</h1>
        </div>
      )
    })
    console.log(this.state.inputValue, `value changing`)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>

          <input type="text" value={this.state.inputValue} onChange={this.receiveInput} placeholder="Search" />

          <button onClick={ this.getData } >Get Data</button>

          <br />
          <h3>{data[0]}</h3>
          <br />

          <NickTest incomingValue={this.state.inputValue} starwars={this.state.stuff} />

        </div>
      </div>
    );
  }
}

export default App;
