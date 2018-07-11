import React, {Component} from 'react';
import {PromoScreen} from "./PromoScreen";
import {NavRow} from "./NavRow";
import {Tab1} from "./Tab1";
import {Tab2} from "./Tab2";
import {Tab3} from "./Tab3";
import {Footer} from "./Footer";


export class App extends Component{
  state = {
    nowTab: 1
  };

  changeTab = newTab => {
    this.setState({
      nowTab: newTab
    });
  };

  render(){
    return(
      <div className="App">
        <PromoScreen/>
        <NavRow changeTab={this.changeTab}/>
        {this.state.nowTab === 1 ? <Tab1/> : null}
        {this.state.nowTab === 2 ? <Tab2/> : null}
        {this.state.nowTab === 3 ? <Tab3/> : null}
        <Footer/>
      </div>
    );
  }
}