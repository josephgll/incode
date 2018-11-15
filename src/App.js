import React, { Component } from 'react';
import logo from './logo.svg';
import ClientsList from './Components/ClientsList';
import Client from './Components/Client';
import MainClient from './Components/MainClient';


class App extends Component {
  

  render() {
    return (
      <div>
      <ClientsList />
      <MainClient />
      </div>
    );
  }
}

export default App;
