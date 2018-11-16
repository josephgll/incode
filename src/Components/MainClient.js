import React from 'react';
import './MainClient.css';

class MainClient extends React.Component {
  render() {
    return (<div className="ui grid">
      <div className="two column row">
        <div className="right floated column"><img id="mainImg" alt="client avatar" src={this.props.client.general.avatar}/></div>
        <div className="left floated column">
          <h1>{this.props.client.general.firstName} {this.props.client.general.lastName}</h1>
          <h4>{this.props.client.job.company} - {this.props.client.job.title}</h4>
          <p>Adress: {this.props.client.address.country}, {this.props.client.address.city}, {this.props.client.address.street}
            {this.props.client.address.zipCode}
          </p>
          <p>Email: {this.props.client.contact.email}</p>
          <p>Phone: {this.props.client.contact.phone}</p>
        </div>
      </div>
    </div>)
  }
}

export default MainClient;
