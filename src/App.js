import React, { Component } from 'react';
import logo from './logo.svg';
import ClientsList from './Components/ClientsList';
import Client from './Components/Client';
import MainClient from './Components/MainClient';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      client: ""
    }
  }

  render() {
    return (
      <div>
      <ClientsList />

      </div>
    );
  }
}

export default App;
