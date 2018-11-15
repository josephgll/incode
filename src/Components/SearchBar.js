import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  render(){
    return (
      <div class="ui search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="" />
    <i class="search icon"></i>
  </div>
  <div class="results"></div>
</div>
    )
  }
}

export default SearchBar;