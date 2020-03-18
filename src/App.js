import React, { Component } from 'react';
import './App.css';
import SearchForm from './movies';
import ShowMovie from './showMovie';

class App extends Component {
  state = {
    searchValue: null,
  };

  setSearchValue = newValue => this.setState({ searchValue: newValue });

  render() {
    return (
      <div>
        <header>
          <h1 className="h1-app">Movie App</h1>
          <h3 className="h3-app">
            The Place Where You Can Find All Your Favourite Movies
          </h3>
        </header>
        <SearchForm class="search-form" SearchMovie={this.setSearchValue} />
        <ShowMovie value={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
