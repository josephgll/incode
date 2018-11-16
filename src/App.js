import React, {Component} from 'react';
import ClientsList from './Components/ClientsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: ""
    }
  }

  render() {
    return (<div>
      <ClientsList/>

    </div>);
  }
}

export default App;
