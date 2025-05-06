import { useEffect } from "react";
import React, { useState } from "react";
// import countriesData from "../countriesData.js";
import CountryCardComponent from "./CountryCardComponent.jsx";
import LoadingComponent from "./LoadingComponent.jsx";
import CountriesContainerCardShimmerEffect from "./CountriesContainerCardShimmerEffect.jsx";
const CountriesContainerCard = ({ filteredValue }) => {
  //   const filteredCountriesArray = countriesData.filter((countries) => {
  //     // console.log(
  //     //   countries.name.common.toLowerCase().includes(filteredValue.toLowerCase())
  //     // );
  //     return countries.name.common
  //       .toLowerCase()
  //       .includes(filteredValue.toLowerCase());
  //   });
  //   {
  //     filteredCountriesArray.map((countries) => {
  //       return (
  //         <CountryCardComponent
  //           key={countries.name.common}
  //           name={countries.name.common}
  //           flag={countries.flags.svg}
  //           population={countries.population}
  //           region={countries.region}
  //           capital={countries.capital}
  //         />
  //       );
  //     });
  //   }

  //fetching data using useEffect hook from API

  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  const countriesDataArray = countriesData
    .filter((countries) => {
      // console.log(
      //   countries.name.common.toLowerCase().includes(filteredValue.toLowerCase())
      // );
      return (
        countries.name.common
          .toLowerCase()
          .includes(filteredValue.toLowerCase()) ||
        countries.region.toLowerCase().includes(filteredValue.toLowerCase())
      );
    })
    .map((countries) => {
      // console.log(countries);
      return (
        <CountryCardComponent
          key={countries.name.common}
          name={countries.name.common}
          flag={countries.flags.svg}
          population={countries.population}
          region={countries.region}
          capital={countries.capital}
          countriesFullData={countries}
        />
      );
    });
  //   console.log(countriesDataArray);
  return countriesDataArray.length === 0 ? (
    // <LoadingComponent />
    <CountriesContainerCardShimmerEffect />
  ) : (
    <>
      <div className="countries-container">{countriesDataArray}</div>
    </>
  );
};

export default CountriesContainerCard;
