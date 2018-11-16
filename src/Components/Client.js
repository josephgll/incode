import React from 'react';
import './Client.css';

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientFullData: [],
      croppedData: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.getClientFullInfo = this.getClientFullInfo.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.dataChecker = this.dataChecker.bind(this);
  }

  handleClick(event) {
    let clientKey = this.props.clientID;
    this.props.getClient(clientKey);
  }

  componentDidUpdate() {
    for (let i = 0; i < this.props.clientSearch.length; i++) {

      if (this.dataChecker() < 0) {
        window.$('#' + this.props.clientID).addClass('hiddenn');
      } else if (this.dataChecker() >= 0) {
        window.$('#' + this.props.clientID).removeClass('hiddenn');
      }
    }
    if (this.props.clientSearch === "") {
      window.$('.item').removeClass('hiddenn');
    }
  }

  getClientFullInfo() {
    let dataArray = [];
    let dataArray2 = [];
    let cropped = [];
    let clientFullData = [];
    let data = this.props.client;
    for (const value in data) {
      dataArray.push(data[value]);
    }
    dataArray.forEach(data => {
      dataArray2.push(Object.values(data));
    })
    clientFullData = dataArray2[0].concat(dataArray2[1], dataArray2[2], dataArray2[3]);
    clientFullData.splice(2, 1);
    clientFullData.forEach(data => {
      cropped.push(data.split(' '));
    })
    clientFullData = [];
    cropped.forEach(data => {
      clientFullData = clientFullData.concat(data);
    })
    this.setState({clientFullData: clientFullData});
  }

  componentDidMount() {
    this.getClientFullInfo();
  }

  dataChecker() {
    let subStr = [];
    let userSearch = this.props.clientSearch.toUpperCase();
    subStr = this.state.clientFullData.map(data => {
      return data.substring(0, this.props.clientSearch.length).toUpperCase();
    });
    return window.$.inArray(userSearch, subStr);
  }

  render() {
    return (<div className="ui list selection celled big">
      <div className='item' id={this.props.clientID} onClick={this.handleClick}>
        <img className="ui mini image" alt="client avatar" src={this.props.client.general.avatar}/>
        <div className="content">
          <div className="header">{this.props.client.general.firstName} {this.props.client.general.lastName}</div>
          {this.props.client.job.title}
          {this.searchEngine}
        </div>
      </div>
    </div>)
  }
}

export default Client;
