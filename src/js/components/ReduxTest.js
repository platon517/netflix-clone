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
      <div>{this.props.user}</div>
    );
  };
}

function state_to_props (state) {
  return {
    user: state.user
  }
}

export default connect(state_to_props)(ReduxTest);