import React from "react";
import "./CountriesContainerCardShimmerEffect.css";
const CountriesContainerCardShimmerEffect = () => {
  //method to create an empty array
  // new Array(length).fill(any Value)
  //ex: new Array(10).fill(1)
  const mappedArray = Array.from({ length: 10 }).map((element, index) => {
    return (
      <div key={index} className="country-card shimmer-card">
        <div className="flag-container"></div>
        <div className="card-text">
          <h3 className="card-title"></h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  });
  return (
    <div className="countries-container">
      {/* {[...Array(10)].map((_, idx) => (
        <div key={idx} className="country-card shimmer-card"></div>
      ))} */}
      {mappedArray}
    </div>
  );
};

export default CountriesContainerCardShimmerEffect;
