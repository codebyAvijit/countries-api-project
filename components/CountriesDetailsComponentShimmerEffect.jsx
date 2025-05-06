import React from "react";
import "./CountriesDetailsComponentShimmerEffect.css";

const CountriesDetailsComponentShimmerEffect = () => {
  return (
    <div className="country-details">
      <div className="newDiv">
        <div className="shimmer country-image"></div>

        <div className="text-section">
          <div className="shimmer country-heading"></div>

          <div className="details-columns">
            <div className="details-column">
              {Array.from({ length: 4 }).map((_, i) => (
                <p key={i} className="shimmer para-details"></p>
              ))}
            </div>
            <div className="details-column">
              {Array.from({ length: 3 }).map((_, i) => (
                <p key={i} className="shimmer para-details"></p>
              ))}
            </div>
          </div>

          <div className="border-countries">
            <div className="shimmer border-title"></div>
            <div className="border-buttons">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="shimmer border-button"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesDetailsComponentShimmerEffect;
