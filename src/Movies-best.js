import React, { Component } from 'react';

import imgTitle from './img/Cinema.png';

class MoviesBest extends Component {

  constructor() {
    super();
    this.state = { movies: null };
  }

  componentWillMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2018&sort_by=vote_average.desc&api_key=5b8a631978fda81c55f8649d34ff316d&language=pt-BR')
      .then(res => res.json())
      .then(res => this.setState({ movies: res }))
  }

  render() {
    return (
      <section className="" >
        <div className="" >
          <img className="" src={imgTitle} />
          <h1 className="">Melhores Filmes do ano </h1>
        </div>
        <div className="" >
          {
            !this.state.movies ? 'Loading...' : this.state.movies.results.map((movie, index) => {
              return (
                <div key={index} className="" >
                  <img className="" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title} />
                  <div className="" >
                    <h2 className="" >{movie.title}</h2>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    );
  }
}

export default MoviesBest;
