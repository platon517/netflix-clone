import React, {Component} from 'react';

export class MainButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <button style={{marginTop: this.props.marginTop}} className="main-button">JOIN FREE FOR A MONTH</button>
    )
  }
}