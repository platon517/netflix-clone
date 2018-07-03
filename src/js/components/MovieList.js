import React, {Component} from 'react';
import MovieLine from './MovieLine';
import {connect} from "react-redux";
import AddMovie from "./AddMovie";

class MovieList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        Movies:
        {
          this.props.movieArr.map((item, index) => {
            return <MovieLine key={index} title={item.title} isFav={item.isFav}/>
          })
        }
        <AddMovie/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movieArr: state.movieReducer.movies
  }
}

export default connect(mapStateToProps)(MovieList);
