import React, { Component } from 'react';
import './App.css';
import {update} from './AppLogic';

class App extends Component {
  state = {
    content: 'sup'
  }
  update = () => {
    this.setState({
      content: update('I', ' am Groot')
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.content}
        <button onClick={this.update}>Groot</button>
      </div>
    );
  }
}

export default App;