import React from 'react';
import Client from './Client';
import './ClientsList.css';
import Clients from '../clients.json';
import SearchBar from './SearchBar';
import MainClient from './MainClient.js'

class ClientsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      mainClient: Clients[0],
      visibility: ""

    }
    this.getClientObj = this.getClientObj.bind(this);
    this.searchClients = this.searchClients.bind(this);
  }

  getClientObj(clientName) {
    Clients.map(client => {
      if (client.general.firstName === clientName) {
        this.setState({client: clientName, mainClient: client});
      }
    })
  }

  searchClients(clientSearch) {
    this.setState({visibility: clientSearch});
  }

  render() {
    return (<div>
      <div className="ui very wide sidebar vertical menu visible">
        <SearchBar searchClients={this.searchClients}/> {
          Clients.map(client => {
            return (<Client client={client} key={client.general.firstName} getClient={this.getClientObj} clientID={client.general.firstName} clientSearch={this.state.visibility}/>);
          })
        }
      </div>
      <MainClient client={this.state.mainClient}/>
    </div>)
  }
}

export default ClientsList;
