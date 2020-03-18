import React from 'react';

const SearchForm = ({ SearchMovie }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      SearchMovie(e.target.elements[0].value);
    }}
  >
    <div className="form-div">
      <input className="input-movie" type="text" />
      <input className="submit-movie" type="submit" />
    </div>
  </form>
);

export default SearchForm;
