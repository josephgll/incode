import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let searchData = event.target.value;
    this.props.searchClients(searchData);
  }

  render() {
    return (<div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type="text" placeholder="" onChange={this.handleChange}/>
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>)
  }
}

export default SearchBar;
