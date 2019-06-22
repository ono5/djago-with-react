import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movie-list';

class App extends Component {

  state = {
    movies: []
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
            <MovieList movies={this.state.movies} />
        </div>
      );
   }
}

export default App;
