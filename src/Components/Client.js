import React from 'react';
import Clients from '../clients.json';
import './Client.css'


class Client extends React.Component{
  render(){
    return(
      <div class="ui list selection celled big">
  <div class="item">
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
