import React, { Component } from 'react';
import './styles/css/App.css';

class MoviesHero extends Component {

  constructor() {
    super();
    this.state = { movies: null };
  }

  componentWillMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release&api_key=5b8a631978fda81c55f8649d34ff316d&language=pt-BR')
      .then(res => res.json())
      .then(res => this.setState({ movies: res }))
  }

  render() {
    return (
      <section className="section-movies" >
        <div className="section-movies__hero" >
          <img className="section-movies__hero-img" src="https://matheussmokingweb.github.io/React-Movie/build/static/media/Cinema.8b3a1b8c.png" />
          <h1 className="section-movies__hero-title">Em cartaz no Mundo</h1>
        </div>
        <div className="section-movies__movies-theater" >
          {
            !this.state.movies ? 'Loading...' : this.state.movies.results.map((movie, index) => {
              return (
                <div key={index} className="section-movies__movie" >
                  <img className="section-movies__cap" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title} />
                  <div className="section-movies__details show" >
                    <h2 className="section-movies__details-title" >{movie.title}</h2>
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

export default MoviesHero;
