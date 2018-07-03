import React, {Component} from 'react';
import MovieList from './MovieList';
import FavMovieList from './FavMovieList';

export default class ReduxTest extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <MovieList />
        <FavMovieList/>
      </div>
    );
  };
}