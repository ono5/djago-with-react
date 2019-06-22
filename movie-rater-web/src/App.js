import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

class App extends Component {

  state = {
    movies: [],
    selectedMovie: null
  }

  componentDidMount() {
     // fetch data
     fetch('http://127.0.0.1:8000/api/movies/', {
        method: 'GET',
        headers: {
            'Authorization': 'Token 552790f7ff5ef8ed183d18df8433eb114cf052e6'
        }
     }).then( resp => resp.json())
     .then( res => this.setState({movies: res}))
     .catch(error => console.log(error))
  }

  render() {
      return (
        <div className="App">
            <h1>Movie Rater</h1>

            <div className="layout">
                <MovieList movies={this.state.movies} />
                <MovieDetails movie={this.state.selectedMovie} />
            </div>
        </div>
      );
   }
}

export default App;
