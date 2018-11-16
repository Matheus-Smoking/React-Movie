import React, { Component } from 'react';
import './styles/css/movies-best.css';

import imgTitle from './img/best-movie.png';

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
      <section className="section-bests" >
        <div className="section-bests__hero" >
          <img className="section-bests__hero-img" src={imgTitle} />
          <h1 className="section-bests__hero-title">Melhores Filmes do ano </h1>
        </div>
        <div className="section-bests__movies-theater" >
          {
            !this.state.movies ? 'Loading...' : this.state.movies.results.map((movie, index) => {
              return (
                <div key={index} className="section-bests__movie" >
                  <img className="section-bests__cap" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title} />
                  <div className="section-bests__details show" >
                    <h2 className="section-bests__details-title" >{movie.title}</h2>
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
