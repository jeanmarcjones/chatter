import React, { Component } from 'react';
import '../styles/App.css';
import * as API from '../utils/api'

class App extends Component {

  componentDidMount() {
    const data = { action: "post", data: "Hello Post!" }

    API
      .post(data)
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <p>Hello World!</p>
      </div>
    );
  }
}

export default App;
