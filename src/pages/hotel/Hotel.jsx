import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../header/Header';
import './hotel.css';

const Hotel = () => {
  const photos = [
    {
      src: 'https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?cs=srgb&dl=pexels-taryn-elliott-4112236.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6480209.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?cs=srgb&dl=pexels-victoria-borodinova-3315291.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?cs=srgb&dl=pexels-quark-studio-3201921.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?cs=srgb&dl=pexels-quark-studio-3201920.jpg&fm=jpg',
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelTitle">Grand Hotel</div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St. 1552 Newyork</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this propert and get a free airport taxi
          </span>
          <div className="hotelImages"></div>
          {photos.map((photos, index) => (
            <div key={index} className="hotelImgWrapper">
              <img src={photos.src} alt="" className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsText">
            <div className="hotelTitle">Stay in the heart of Krakow</div>
            <p className="hotelDesc">
              Navona Luxury and Historical Apartment in Rome provides
              accommodations with free WiFi, a 3-minute walk from Piazza Navona,
              1.1 km from Castel Sant'Angelo and a 16-minute walk from Campo de'
              Fiori. The property is 2.1 km from Piazza Venezia and 2.1 km from
              Trevi Fountain. The apartment features 2 bedrooms, 2 bathrooms,
              bed linen, towels, a flat-screen TV, a dining area, a fully
              equipped kitchen, and a terrace with city views. Popular points of
              interest near the apartment include Torre Argentina, Pantheon and
              Palazzo Venezia. The nearest airport is Rome Ciampino Airport,
              17.7 km from Navona Luxury and Historical. This is our guests'
              favorite part of Rome, according to independent reviews.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>perfect for a 9-night stay!</h1>
            <span>Located in the real heart of krakow</span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>reserve or book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
