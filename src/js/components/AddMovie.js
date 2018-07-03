import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addMovie} from "../redux/actions/add_movie";
import {asyncTest} from "../redux/actions/async_test";

class AddMovie extends Component {
  constructor(props){
    super(props);
    this.inputField = React.createRef();
    this.addMovie = this.addMovie.bind(this);
  }
  addMovie(){
    const title = this.inputField.current.value;
    if (!isNaN(parseInt(title))) {
      this.props.asyncTest(title);
      return;
    }
    if (title !== '' && this.props.movieArr.every(item => item.title !== title)) this.props.addMovie(title);
  }
  render(){
    return(
      <div>
        <input ref={this.inputField}/>
        <button onClick={this.addMovie}>add movie</button>
      </div>
    )
  };
}

function mapStateToProps(state){
  return{
    movieArr: state.movieReducer.movies
  }
}

function mapDispatchToProps(dispatch){
  return {
    asyncTest: bindActionCreators(asyncTest, dispatch),
    addMovie: bindActionCreators(addMovie, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);