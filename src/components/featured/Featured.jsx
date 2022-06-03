import React from 'react';
import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/173157/pexels-photo-173157.jpeg?cs=srgb&dl=pexels-ciboulette-173157.jpg&fm=jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 >Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?cs=srgb&dl=pexels-pixabay-461956.jpg&fm=jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 >Reonu</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/9717980/pexels-photo-9717980.jpeg?cs=srgb&dl=pexels-eva-rafajov%C3%A1-9717980.jpg&fm=jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Switzeland</h1>
          <h2>534 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/3855633/pexels-photo-3855633.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3855633.jpg&fm=jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 >Dublin</h1>
          <h2>535 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
