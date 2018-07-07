import React from 'react';
import {MainButton} from "./MainButton";

export function Tab1 () {
  return(
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
  );
}