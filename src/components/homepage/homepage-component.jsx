import React from 'react';
import './homepage.styles.scss';


const Homepage = () => (
  <div className="">
    <div className="row">
      <div className="col-lg-6 home">
        <img
          className="title-image"
          src="/image/scooter.jpg"
          alt="iphone-mockup"
        />
        <h1 className="big-heading">A type of motorcycle</h1>
        <h1 className="big-heading2">with a step-through.</h1>
        <button type="button" className="button-pg button-title">
          Download
        </button>
      </div>
    </div>
  </div>
);

export default Homepage;