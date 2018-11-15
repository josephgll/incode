import React from 'react';
import Clients from '../clients.json';
import './Client.css';
import ClientsList from './ClientsList';


class Client extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      div: "item"
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event){
    let clientKey = this.props.clientID;
    this.props.getClient(clientKey);
  }

  componentDidUpdate(){
    if (this.props.clientID!==this.props.clientSearch){
      window.$('#'+this.props.clientID).addClass('hiddenn');
    }
    else if (this.props.clientID===this.props.clientSearch){
      window.$('#'+this.props.clientID).removeClass('hiddenn');
    }
    if (this.props.clientSearch===""){
      window.$('.item').removeClass('hiddenn');
    }
  }


  render(){
    return(
      <div class="ui list selection celled big" onMouseOut={this.mouseOut}>
  <div class='item' id={this.props.clientID} onClick={this.handleClick}>
    <img class="ui mini image" src={this.props.client.general.avatar} onClick={this.searchEngine} />
    <div class="content">
      <div class="header">{this.props.client.general.firstName} {this.props.client.general.lastName}</div>
      {this.props.client.job.title} {this.searchEngine}
    </div>
  </div>
</div>

    )
  }
}

export default Client;
