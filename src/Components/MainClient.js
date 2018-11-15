import React from 'react';
import './MainClient.css';
import Clients from '../clients.json';

class MainClient extends React.Component{
  render(){
    return(
      <div class="ui grid">
      <div class="two column row">
      <div class="right floated column"><img src={Clients[0].general.avatar} /></div>
      <div class="left floated column">
        <h1>{Clients[0].general.firstName} {Clients[0].general.lastName}</h1>
        <p>{Clients[0].job.company}</p>
        <p>{Clients[0].job.title}</p>
        <p>{Clients[0].contact.email}</p>
        <p>{Clients[0].contact.phone}</p>
        <p>{Clients[0].address.street}></p>
        <p>{Clients[0].address.city}</p>
        <p>{Clients[0].address.zipCode}</p>
        <p>{Clients[0].address.country}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default MainClient;
