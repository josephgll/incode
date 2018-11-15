import React from 'react';
import Clients from '../clients.json';

class Client extends React.Component{
  render(){
    return(
      <div class="ui celled list selection">
  <div class="item">
    <img class="ui avatar image" src={Clients[0].general.avatar} />
    <div class="content">
      <div class="header">{Clients[0].general.firstName} {Clients[0].general.lastName}</div>
      {Clients[0].job.title}
    </div>
  </div>
</div>

    )
  }
}

export default Client;
