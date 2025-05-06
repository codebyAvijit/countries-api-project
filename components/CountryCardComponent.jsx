import React from "react";
import { Link } from "react-router-dom";

const CountryCardComponent = ({
  name,
  flag,
  population,
  region,
  capital,
  countriesFullData,
}) => {
  return (
    // <Link to={`/country?name=${name}`} className="country-card">
    <Link to={`/${name}`} className="country-card" state={countriesFullData}>
      <img src={flag} alt={`${name} Flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: {population.toLocaleString("en-IN")}</b>
        </p>
        <p>
          <b>Region: {region}</b>
        </p>
        <p>
          <b>Capital: {capital}</b>
        </p>
      </div>
    </Link>
  );
};

export default CountryCardComponent;
