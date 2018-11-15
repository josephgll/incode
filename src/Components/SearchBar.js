import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let searchData = event.target.value;
    this.props.searchClients(searchData);
  }

  render(){
    return (
      <div class="ui search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="" onChange={this.handleChange} />
    <i class="search icon"></i>
  </div>
  <div class="results"></div>
</div>
    )
  }
}

export default SearchBar;
