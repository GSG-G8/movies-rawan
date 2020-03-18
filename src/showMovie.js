import React from 'react';

class ShowMovie extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    let url;
    if (!this.props.value)
      url =
        'https://api.themoviedb.org/3/trending/movie/day?api_key=7cdf7d7de96673cdc912e661988a1435';
    else
      url = `https://api.themoviedb.org/3/search/movie?api_key=7cdf7d7de96673cdc912e661988a1435&language=en-US&query=${this.props.value}&page=1&include_adult=false`;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidUpdate(prevProp) {
    if (this.state.props !== prevProp.value) {
      let url;
      if (!this.props.value)
        url =
          'https://api.themoviedb.org/3/trending/movie/day?api_key=7cdf7d7de96673cdc912e661988a1435';
      else
        url = `https://api.themoviedb.org/3/search/movie?api_key=7cdf7d7de96673cdc912e661988a1435&language=en-US&query=${this.props.value}&page=1&include_adult=false`;
      fetch(url)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              items: result,
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {items.results.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt=""
            />
            <p>
              {item.title} {item.original_language}
              {item.overview}
              {item.release_date}
              {item.media_type}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShowMovie;
