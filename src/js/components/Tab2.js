import React from 'react';
import {MainButton} from "./MainButton";

export function Tab2 () {
  return(
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
  );
}