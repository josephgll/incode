import React from 'react';
import Client from './Client';
import './ClientsList.css';
import Clients from '../clients.json';
import SearchBar from './SearchBar';

class ClientsList extends React.Component{


  render(){
    return(

<div>
      <div class="ui very wide sidebar vertical menu visible">
      <SearchBar/>
      {Clients.map(client=>{
         return (<Client client={client} key={client.general.firstName}/>
       );

      })}
   </div>

   </div>
    )
  }
}

export default ClientsList;
