import React from 'react';
import Client from './Client';
import './ClientsList.css';
import Clients from '../clients.json';

class ClientsList extends React.Component{


  render(){
    return(


      <div class="ui very wide sidebar vertical menu visible">

      {Clients.map(client=>{
         return (<Client client={client} key={client.general.firstName}/>
       );

      })}
   </div>

    )
  }
}

export default ClientsList;
