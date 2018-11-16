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
  this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  handleClick(event){
    let clientKey = this.props.clientID;
    this.props.getClient(clientKey);
  }

   componentDidUpdate(){
     let userSearch = this.props.clientSearch.toUpperCase();
     let subStr = this.props.clientID.substring(0,this.props.clientSearch.length).toUpperCase();
     for (let i = 0; i<this.props.clientSearch.length; i++){
       if (userSearch!==subStr){
         window.$('#'+this.props.clientID).addClass('hiddenn');
       }
       else if (userSearch===subStr){
         window.$('#'+this.props.clientID).removeClass('hiddenn');
       }
     }
     if (this.props.clientSearch===""){
       window.$('.item').removeClass('hiddenn');
     }
    }

  render(){
    return(
      <div class="ui list selection celled big">
  <div class='item' id={this.props.clientID} onClick={this.handleClick}>
    <img class="ui mini image" src={this.props.client.general.avatar} />
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
