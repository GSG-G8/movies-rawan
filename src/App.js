import React, { Component } from 'react';
import './App.css';
import SearchForm from './movies'

class App extends Component{
  state={
    searchValue: null,
  };

  setSearchValue= newValue=> this.setState({searchValue: newValue});

  render(){
  return (
    <div>
      <header>
      <h1 class="h1-app">Movie App</h1>
      <h3 class="h1-app">The Place Where You Can Find All Your Favourite Movies</h3>
      </header>
      <SearchForm class="search-form" SearchMovie={this.setSearchValue} />
    </div>
  );
}
}

export default App;
