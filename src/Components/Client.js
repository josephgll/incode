import React from 'react';
import Clients from '../clients.json';
import './Client.css';
import ClientsList from './ClientsList';


class Client extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    let clientKey = this.props.clientID;
    this.props.getClient(clientKey);
  }

  render(){
    return(
      <div class="ui list selection celled big">
  <div class="item" onClick={this.handleClick}>
    <img class="ui mini image" src={this.props.client.general.avatar} />
    <div class="content">
      <div class="header">{this.props.client.general.firstName} {this.props.client.general.lastName}</div>
      {this.props.client.job.title}
    </div>
  </div>
</div>

    )
  }
}

export default Client;
