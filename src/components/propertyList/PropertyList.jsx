import './propertyList.css';
import React from "react"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/32870/pexels-photo.jpg?cs=srgb&dl=pexels-chris-goodwin-32870.jpg&fm=jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apertments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/11238628/pexels-photo-11238628.jpeg?cs=srgb&dl=pexels-boys-in-bristol-photography-11238628.jpg&fm=jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/112291/pexels-photo-112291.jpeg?cs=srgb&dl=pexels-mike-b-112291.jpg&fm=jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList
