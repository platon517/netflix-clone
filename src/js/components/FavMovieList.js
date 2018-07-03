import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieLine from './MovieLine';

class FavMovieList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        Favorites:
        {
          this.props.movieArr.map((item, index) => {
            if (item.isFav) return <MovieLine key={index} title={item.title} isFav={item.isFav}/>
          })
        }
      </div>
    );
  };
}

function mapStateToProps(state){
  return{
    movieArr: state.movieReducer.movies
  }
}

export default connect(mapStateToProps)(FavMovieList);