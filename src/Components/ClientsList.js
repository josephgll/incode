import React from 'react';
import Client from './Client';
import './ClientsList.css';
import Clients from '../clients.json';
import SearchBar from './SearchBar';
import MainClient from './MainClient.js'

class ClientsList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      client: "",
      mainClient: Clients[0],
    }
    this.handleClick = this.handleClick.bind(this);
    this.getClientObj = this.getClientObj.bind(this);
  }

  handleClick(client){
    this.setState({client: client});
    this.getClientObj();
  }

  getClientObj(clientName){
    Clients.map(client=>{
      if (client.general.firstName === clientName){
        this.setState({mainClient: client});
      }
    })
  }

  render(){
    return(

<div>
      <div class="ui very wide sidebar vertical menu visible">
      <SearchBar onChange={this.handleChange}/>
      {Clients.map(client=>{
         return (<Client client={client} key={client.general.firstName} getClient={this.getClientObj} clientID={client.general.firstName}/>
       );

      })}
   </div>
   <MainClient client = {this.state.mainClient} />
   </div>
    )
  }
}

export default ClientsList;
