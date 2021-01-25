import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };

    this.updateMoviesState = this.updateMoviesState.bind(this);
  }

  componentDidMount() {
    this.updateMoviesState();
  }

  updateMoviesState() {
    this.setState({ isLoading: true }, async () => {
      const allMovies = await movieAPI.getMovies();
      this.setState({
        movies: allMovies,
        isLoading: false,
      });
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    console.log(isLoading);
    return (
      <div data-testid="movie-list">
        {isLoading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
      </div>
    );
  }
}

export default MovieList;
