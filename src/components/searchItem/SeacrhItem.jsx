import React from 'react';
import './searchItem';

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/11482791/pexels-photo-11482791.jpeg?cs=srgb&dl=pexels-sebastian-angarita-11482791.jpg&fm=jpg"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">Tower street Apertments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">free airport taxi</span>
        <span className="siSubtitle">
          Studio Apertment with Air Condiioning
        </span>
        <span className="siFeatures">
          Entire Studio * 1 bathroom * 21m full bed
        </span>
        <span className="siCancelOp">free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so luck in his great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes tax and fees</span>
          <button className="siCheckButton">See avalibiliy</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
