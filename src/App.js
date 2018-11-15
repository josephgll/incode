import React, { Component } from 'react';
import logo from './logo.svg';
import ClientsList from './Components/ClientsList';
import Client from './Components/Client';


class App extends Component {
  render() {
    return (
      <ClientsList />
    );
  }
}

export default App;
