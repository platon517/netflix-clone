import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReduxTest extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>{this.props.user}<br/>{this.props.phrase}</div>
    );
  };
}

function state_to_props (state) {
  console.log(state);
  return {
    user: state.names.user,
    phrase: state.phrases.phrase
  }
}

export default connect(state_to_props)(ReduxTest);