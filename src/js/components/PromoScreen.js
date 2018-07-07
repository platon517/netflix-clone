import React from 'react';
import {MainButton} from "./MainButton";

export function PromoScreen () {
  return(
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
  );
}