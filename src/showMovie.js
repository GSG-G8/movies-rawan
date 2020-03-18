import React from 'react';

class ShowMovie extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=7cdf7d7de96673cdc912e661988a1435'
    )
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
            {item.title} {item.original_language}
            {item.overview}
            {item.release_date}
            {item.media_type}
          </li>
        ))}
      </ul>
    );
  }
}

export default ShowMovie;