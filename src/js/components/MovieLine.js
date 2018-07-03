import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pushFav} from "../redux/actions/push_fav";


class MovieLine extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFav: this.props.isFav
    };
    this.favCheckbox = this.favCheckbox.bind(this);
  }
  favCheckbox() {
    this.props.pushFav(this.props.title);
  }
  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>{this.props.title}</div>
        <input onChange={this.favCheckbox} type={'checkbox'} checked={this.props.isFav}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushFav: bindActionCreators(pushFav, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(MovieLine);
