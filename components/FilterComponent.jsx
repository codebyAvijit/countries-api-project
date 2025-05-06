import React, { useEffect, useState } from "react";
import CountryCardComponent from "./CountryCardComponent";

const FilterComponent = ({ setFilteredValue }) => {
  // const [selectOption, setSelectOption] = useState("");
  // const [regionData, setRegionData] = useState([]);
  const selectedOption = (event) => {
    // console.log("hieee");
    // console.log(event.target.value.toLowerCase());
    setFilteredValue(event.target.value.toLowerCase());
  };
  // useEffect(() => {
  //   if (!selectOption) {
  //     return;
  //   }
  //   fetch(`https://restcountries.com/v3.1/region/${selectOption}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((regionData) => {
  //       setRegionData(regionData);
  //       // console.log(regionData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [selectOption]);
  return (
    <>
      <select onChange={selectedOption} className="filter-by-region">
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {/* {regionData.map((countries) => {
        {
          console.log(countries); 
        }
        return (
          <CountryCardComponent
            key={countries.name.common}
            name={countries.name.common}
            flag={countries.flags.svg}
            population={countries.population}
            region={countries.region}
            capital={countries.capital}
          />
        );
      })} */}
    </>
  );
};

export default FilterComponent;
