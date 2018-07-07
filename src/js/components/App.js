import React, {Component} from 'react';
import {MainButton} from "./MainButton";


export class App extends Component{
  constructor(){
    super();
    this.start_rad = React.createRef();
  }
  componentDidMount(){
    this.start_rad.current.checked = true
  }
  to_nav(){
    window.scrollY !== document.getElementById('nav-bar').offsetTop ? window.scrollTo(0, document.getElementById('nav-bar').offsetTop) : null;
  }
  render(){
    return(
      <div className="App">
        <div className="promo-screen">
          <div className="info">
            <a className="sign-in">
              Sign in
            </a>
            <a className="logo">
              <img className="logo__pic" src="src/img/logo.svg"/>
            </a>
            <div className="info__main">
              <h1>See what’s next.</h1>
              <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
              <MainButton/>
            </div>
          </div>
          <div className="gradient"/>
        </div>
        <input ref={this.start_rad} className="hiddenRad" id="hiddenRad1" name="hiddenRad" value="1" type="radio"/>
        <input className="hiddenRad" id="hiddenRad2" name="hiddenRad" value="2" type="radio"/>
        <input className="hiddenRad" id="hiddenRad3" name="hiddenRad" value="3" type="radio"/>
        <div className="nav-bar"  id="nav-bar">
          <div onClick={this.to_nav} className="nav-bar__wrapper">
            <label htmlFor="hiddenRad1" className="nav-bar__button" id="nav-bar__button1">
              <div className="nav-bar__button__icon">
                <svg viewBox="0 0 40 48" id="icon-cancel" width="100%" height="100%"><path d="M29.55 18.7v-4.6c-5.2.4-4.6 2.8-4.6 2.8.3 1.7 2.35 2.35 2.35 2.35.6-.35 2.25-.55 2.25-.55zm3.7 1L33 21.3c-9.15-.3-8.7-3.75-8.7-3.75l.15 5.2c1.1 4.05 8.35 4.2 8.2 4.2l-.2 1.5 6.9-3.8-6.1-4.95zm-20.3 6.25c-.5-.5-1.3-.45-1.8.05-.45.5-.45 1.25.05 1.75s1.3.45 1.75-.05c.5-.5.5-1.25 0-1.75zm2.35-15.9L1.5 1.45V38.9l2.6 1.45 11.2 6.2v-36.5zM1.5 40.35C.4 39.85 0 39.7 0 38.9l1.5 1.45zM28.05 28.1h1.45v10.8c0 .8-.65 1.45-1.45 1.45H16.8v6.15c0 .849-.65 1.5-1.45 1.5L1.5 40.35 0 38.9V1.45C0 .65.65 0 1.5 0h26.55c.8 0 1.45.65 1.45 1.45v11.2h-1.45V1.45H4.1L15.6 8.6c.95.35 1.2.65 1.2 1.45V38.9h11.25V28.1z"/></svg>
              </div>
              <span className="nav-bar__button__text">
                    No commitments
                    <br/>
                    Cancel online at anytime
                </span>
            </label>
            <label  htmlFor="hiddenRad2" className="nav-bar__button" id="nav-bar__button2">
              <div className="nav-bar__button__icon">
                <svg viewBox="0 0 145 48" id="icon-cross-device-screens-desktop" width="100%" height="100%">    <path d="M138.211 44.009c-.398 0-.697.349-.697.748 0 .398.3.698.697.698.4 0 .749-.3.749-.698 0-.4-.35-.748-.749-.748zm-4.19 2.593h8.682V28.191h-8.682v18.411zm-.05-19.807h8.732c.798 0 1.396.598 1.396 1.396v18.362c0 .798-.598 1.447-1.396 1.447h-8.732c-.749 0-1.397-.649-1.397-1.447V28.191c0-.798.648-1.396 1.397-1.396zM74.095 44.009h48.7V13.173h-48.7v30.836zm0-32.233h48.75c.748 0 1.396.648 1.396 1.446v30.787c0 .798-.648 1.396-1.397 1.396H74.095c-.797 0-1.396-.598-1.396-1.396V13.222c0-.798.599-1.446 1.396-1.446zm56.583 34.677v.649c0 .499-.799.898-1.747.898H67.66c-.998 0-1.746-.4-1.746-.898v-.649h64.764zm-111.567.898v-2.445c0-.798.648-1.446 1.396-1.446h29.688c.799 0 1.397.648 1.397 1.446v2.445h-1.397v-2.494H20.557v2.494H19.11zM1.397 41.065h68.208V1.397H1.397v39.668zM1.397 0h68.208c.799 0 1.447.599 1.447 1.397v39.668c0 .748-.648 1.396-1.447 1.396H1.397A1.394 1.394 0 0 1 0 41.065V1.397C0 .599.599 0 1.397 0z"/></svg>
              </div>
              <span className="nav-bar__button__text">
                    Watch anywhere
                </span>
            </label>
            <label  htmlFor="hiddenRad3" className="nav-bar__button" id="nav-bar__button3">
              <div className="nav-bar__button__icon">
                <svg viewBox="0 0 63 48" id="icon-price-tag" width="100%" height="100%"><g><path d="M35.752 7.65c-1.1 0-2.1.45-2.85 1.2a3.97 3.97 0 0 0 .1 5.651c.75.7 1.7 1.1 2.75 1.1a4.01 4.01 0 0 0 2.851-1.2c.75-.8 1.149-1.8 1.1-2.85 0-1.05-.451-2.05-1.201-2.8a4.072 4.072 0 0 0-2.75-1.1m-.002 9.15c-1.35 0-2.65-.5-3.6-1.45-2.05-1.95-2.101-5.25-.15-7.3 1-1.05 2.3-1.6 3.75-1.6 1.35 0 2.6.5 3.6 1.45.95.95 1.55 2.25 1.55 3.65.05 1.35-.5 2.65-1.45 3.65-.95 1.05-2.3 1.6-3.7 1.6m-2.148 9.701a.727.727 0 0 1-1.05 0l-5.3-5.05c-.3-.3-.3-.75 0-1.05.25-.3.75-.3 1.05-.05l5.25 5.1c.3.3.3.75.05 1.05m-5.95-10.05l-4.55.098v-1.799c0-.4-.35-.7-.75-.7-.401 0-.701.3-.701.7l.05 2.55c0 .3.2.55.45.65.101.05.15.05.25.05l5.301-.1c.4 0 .7-.3.7-.7 0-.4-.35-.75-.75-.75m.1 16.15a.723.723 0 0 1-1.05 0l-5.301-5.099c-.3-.25-.3-.75 0-1.05.25-.25.75-.3 1 0l5.301 5.1c.3.25.3.75.05 1.05m-5.951-10.05l-4.55.1v-1.8c-.05-.4-.35-.75-.75-.75-.4.05-.75.35-.7.75v2.55c.05.3.2.55.5.65.05.05.15.05.25.05l5.25-.1c.4 0 .75-.35.75-.75s-.35-.7-.75-.7m.25 15.95c-.299.3-.75.3-1.049 0l-5.301-5.1c-.3-.25-.3-.75 0-1.05.3-.25.75-.3 1.05 0l5.251 5.1c.299.25.35.75.049 1.05m-5.95-10.05l-4.5.1-.05-1.8c0-.4-.35-.75-.75-.75-.401.05-.7.35-.7.75l.049 2.55c0 .3.201.55.451.65.1.05.2.05.3.05l5.25-.1c.4 0 .7-.35.7-.75s-.35-.7-.75-.7M43.903 4.9c0-.5-.122-.876-.35-1.1-.279-.274-.65-.3-.85-.3H42.402c-.799.05-1.85.05-3.049.05-5.551 0-13.151-.35-13.851-.35-.15 0-.3.05-.45.2L1.4 27.952c-.1.15-.2.3-.2.5s.1.35.25.5l18.301 17.65c.25.25.751.25 1.001-.05l23.651-24.55c.153-.197.198-.488.2-.7M20.252 48.002a1.937 1.937 0 0 1-1.351-.55L.6 29.801c-.35-.349-.6-.799-.6-1.299 0-.55.2-1 .55-1.4L24.202 2.548c.3-.299.699-.5 1.15-.549h.15c.1 0 8.1.35 13.851.35 1.149 0 2.149 0 3-.05h.35c.7 0 1.3.2 1.75.65.45.45.65 1.1.65 1.95.05.85.705 14.126.65 16.551-.011.502-.15 1-.5 1.4L21.602 47.403c-.35.35-.85.6-1.35.6"/><path d="M62.004 0c-2.95 6.4-12.651 6.4-12.651 6.4-7.05.1-10.951 2.25-12.751 3.601-.7-.351-1.55-.2-2.1.35-.7.7-.65 1.85.05 2.549.7.651 1.85.651 2.5-.049.55-.55.65-1.3.4-1.951 5.05-3.5 11.9-3.299 11.9-3.299C60.105 7.601 62.855.6 62.855.6l-.85-.6z"/></g></svg>
              </div>
              <span className="nav-bar__button__text">
                    Pick your price
                </span>
            </label>
          </div>
        </div>
        <div className="bottom-info bottom-info__1">
          <div className="bottom-info__block">
            <p className="bottom-info__p">
              If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.
            </p>
            <MainButton/>
          </div>
          <div className="bottom-info__block bottom-info__img">
            <img src="src/img/asset1.png"/>
          </div>
        </div>
        <div className="bottom-info bottom-info__2">
          <div className="child">
            <div className="bottom-info__block">
              <p className="bottom-info__p">
                Watch TV shows and movies anytime, anywhere — personalized for you.
              </p>
            </div>
            <div className="bottom-info__img">
              <MainButton marginTop={0}/>
            </div>
          </div>
          <div className="child">
            <div className="img_block">
              <img src="src/img/asset_2_1.png" />
              <h3>Watch on your TV</h3>
              <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="img_block">
              <img src="src/img/asset_2_2.png" />
              <h3>Watch instantly or<br/>download for later</h3>
              <p>Available on phone and tablet, wherever you go.</p>
            </div>
            <div className="img_block">
              <img src="src/img/asset_2_3.png" />
              <h3>Use any computer</h3>
              <p>Watch right on Netflix.com.</p>
            </div>
          </div>
        </div>
        <div className="bottom-info bottom-info__3">
          <div className="child">
            <p>
              Choose one plan and watch everything on Netflix.
            </p>
            <MainButton/>
          </div>
          <div className="child">
          </div>
        </div>
        <footer>
          <a>Questions? Contact us.</a>
          <section>
            <div>
              <a>FAQ</a>
              <a>Investor Relations</a>
              <a>Privacy</a>
              <a>Speed Test</a>
            </div>
            <div>
              <a>Help Center</a>
              <a>Jobs</a>
              <a>Cookie Preferences</a>
              <a>Legal Notices</a>
            </div>
            <div>
              <a>Account</a>
              <a>Ways to Watch</a>
              <a>Corporate Information</a>
              <a>Netflix Originals</a>
            </div>
            <div>
              <a>Media Center</a>
              <a>Terms of Use</a>
              <a>Contact Us</a>
            </div>
          </section>
          <a className="a_disabled">Netflix Russia</a>
        </footer>
      </div>
    );
  }
}