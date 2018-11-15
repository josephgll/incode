import React from 'react';
import './MainClient.css';
import Clients from '../clients.json';

class MainClient extends React.Component{
  render(){
    return(
      <div class="ui grid">
      <div class="two column row">
      <div class="right floated column"><img src={this.props.client.general.avatar} /></div>
      <div class="left floated column">
        <h1>{this.props.client.general.firstName} {this.props.client.general.lastName}</h1>
        <p>{this.props.client.job.company}</p>
        <p>{this.props.client.job.title}</p>
        <p>{this.props.client.contact.email}</p>
        <p>{this.props.client.contact.phone}</p>
        <p>{this.props.client.address.street}></p>
        <p>{this.props.client.address.city}</p>
        <p>{this.props.client.address.zipCode}</p>
        <p>{this.props.client.address.country}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default MainClient;
