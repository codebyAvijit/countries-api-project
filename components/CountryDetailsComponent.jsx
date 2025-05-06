// import React from "react";
// import { useState, useEffect, useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
// import {
//   Link,
//   useLocation,
//   useParams,
//   useOutletContext,
// } from "react-router-dom";
// import CountriesDetailsComponentShimmerEffect from "./CountriesDetailsComponentShimmerEffect";
// import "./CountryDetailsComponent.css";
// import useTheme from "../hooks/useTheme";

// const CountryDetailsComponent = () => {
//   // const countryName = new URLSearchParams(window.location.search).get("name");
//   //to get params from Link url
//   //we will use useParams() provided by react router to make dynamic routes
//   const params = useParams();
//   // console.log(params);
//   //we will use the passed satte here to get the already fetched data
//   const { state } = useLocation();
//   //object destructuring
//   //state passed down from Link tag with full country object

//   // console.log(state);

//   // const [toggleClass, setToggleClass] = useOutletContext();
//   // const [toggleClass, setToggleClass] = useContext(ThemeContext);
//   const [toggleClass, setToggleClass] = useTheme();

//   const countryName = params.country;
//   const [countryDetail, setCountryDetail] = useState(null);
//   const [noCountryFound, setNoCountryFound] = useState(false);

//   function updateCountrysData(countryData) {
//     const processedData = {
//       name: countryData.name.common,
//       flag: countryData.flags.svg,
//       nativeName:
//         Object.values(countryData.name.nativeName || {})[0]?.common ||
//         countryData.name.common,
//       population: countryData.population,
//       region: countryData.region,
//       subregion: countryData.subregion,
//       capital: countryData.capital,
//       topLevelDomain: countryData.tld?.join(", ") || "N/A",
//       currencies: countryData.currencies
//         ? Object.values(countryData.currencies)
//             .map((currency) => currency.name)
//             .join(", ")
//         : "N/A",
//       languages: countryData.languages
//         ? Object.values(countryData.languages).join(", ")
//         : "N/A",
//       borders: [],
//     };

//     if (!countryData.borders || countryData.borders.length === 0) {
//       // Delay shimmer removal and set state directly
//       setTimeout(() => setCountryDetail(processedData), 1000);
//       return;
//     }

//     Promise.all(
//       countryData.borders.map((border) =>
//         fetch(`https://restcountries.com/v3.1/alpha/${border}`)
//           .then((response) => response.json())
//           .then(([borderCountryData]) => borderCountryData.name.common)
//       )
//     )
//       .then((allBorders) => {
//         processedData.borders = allBorders;
//         setTimeout(() => setCountryDetail(processedData), 1000);
//       })
//       .catch(() => {
//         setNoCountryFound(true);
//       });
//   }

//   useEffect(() => {
//     if (state) {
//       updateCountrysData(state);
//       return;
//     }

//     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
//       .then((response) => response.json())
//       .then(([countryData]) => {
//         updateCountrysData(countryData);
//       })
//       .catch(() => {
//         setNoCountryFound(true);
//       });
//   }, [countryName]);

//   if (noCountryFound) {
//     return (
//       <h1
//         style={{
//           textAlign: "center",
//           backgroundColor: "black",
//           color: "wheat",
//         }}
//       >
//         Country Not Found...
//       </h1>
//     );
//   }

//   return countryDetail === null ? (
//     <CountriesDetailsComponentShimmerEffect />
//   ) : (
//     <>
//       <main className={`${toggleClass ? "dark" : ""}`}>
//         <Link to="/" className="back-btn">
//           <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
//         </Link>
//         <div className="country-details">
//           <img src={countryDetail.flag} alt={countryDetail.name} />
//           <div className="details-text-container">
//             <h1>{countryDetail.name}</h1>
//             <div className="details-text">
//               <p>
//                 <b>Native Name: {countryDetail.nativeName}</b>
//               </p>
//               <p>
//                 <b>
//                   Population:{" "}
//                   {countryDetail.population?.toLocaleString("en-IN")}
//                 </b>
//               </p>
//               <p>
//                 <b>Region: {countryDetail.region}</b>
//               </p>
//               <p>
//                 <b>Sub-Region: {countryDetail.subregion || "N/A"}</b>
//               </p>
//               <p>
//                 <b>Capital: {countryDetail.capital || "N/A"}</b>
//               </p>
//               <p>
//                 <b>Top Level Domain: {countryDetail.topLevelDomain}</b>
//               </p>
//               <p>
//                 <b>Currencies: {countryDetail.currencies}</b>
//               </p>
//               <p>
//                 <b>Languages: {countryDetail.languages}</b>
//               </p>
//             </div>
//             {countryDetail.borders.length > 0 && (
//               <div className="border-countries">
//                 <b>Border Countries:&nbsp;</b>
//                 {countryDetail.borders.map((border) => (
//                   <Link key={border} to={`/${border}`}>
//                     {border}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default CountryDetailsComponent;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountriesDetailsComponentShimmerEffect from "./CountriesDetailsComponentShimmerEffect";
import "./CountryDetailsComponent.css";
import useTheme from "../hooks/useTheme";

const CountryDetailsComponent = () => {
  //to get params from Link url
  //we will use useParams() provided by react router to make dynamic routes
  const params = useParams();

  //we will use the passed state here to get the already fetched data
  const { state } = useLocation();

  //custom theme hook usage
  const [toggleClass, setToggleClass] = useTheme();

  const countryName = params.country;
  const [countryDetail, setCountryDetail] = useState(null);
  const [noCountryFound, setNoCountryFound] = useState(false);

  function updateCountrysData(countryData) {
    const processedData = {
      name: countryData.name.common,
      flag: countryData.flags.svg,
      nativeName:
        Object.values(countryData.name.nativeName || {})[0]?.common ||
        countryData.name.common,
      population: countryData.population,
      region: countryData.region,
      subregion: countryData.subregion,
      capital: countryData.capital,
      topLevelDomain: countryData.tld?.join(", ") || "N/A",
      currencies: countryData.currencies
        ? Object.values(countryData.currencies)
            .map((currency) => currency.name)
            .join(", ")
        : "N/A",
      languages: countryData.languages
        ? Object.values(countryData.languages).join(", ")
        : "N/A",
      borders: [],
    };

    if (!countryData.borders || countryData.borders.length === 0) {
      // Delay shimmer removal and set state directly
      setTimeout(() => setCountryDetail(processedData), 1000);
      return;
    }

    Promise.all(
      countryData.borders.map((border) =>
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((response) => response.json())
          .then(([borderCountryData]) => borderCountryData.name.common)
      )
    )
      .then((allBorders) => {
        processedData.borders = allBorders;
        setTimeout(() => setCountryDetail(processedData), 1000);
      })
      .catch(() => {
        setNoCountryFound(true);
      });
  }

  useEffect(() => {
    if (state) {
      updateCountrysData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then(([countryData]) => {
        updateCountrysData(countryData);
      })
      .catch(() => {
        setNoCountryFound(true);
      });
  }, [countryName]);

  if (noCountryFound) {
    return (
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "wheat",
        }}
      >
        Country Not Found...
      </h1>
    );
  }

  return (
    <main className={`${toggleClass ? "dark" : ""}`}>
      {countryDetail === null ? (
        <CountriesDetailsComponentShimmerEffect />
      ) : (
        <>
          <Link to="/" className="back-btn">
            <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
          </Link>
          <div className="country-details">
            <img src={countryDetail.flag} alt={countryDetail.name} />
            <div className="details-text-container">
              <h1>{countryDetail.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: {countryDetail.nativeName}</b>
                </p>
                <p>
                  <b>
                    Population:{" "}
                    {countryDetail.population?.toLocaleString("en-IN")}
                  </b>
                </p>
                <p>
                  <b>Region: {countryDetail.region}</b>
                </p>
                <p>
                  <b>Sub-Region: {countryDetail.subregion || "N/A"}</b>
                </p>
                <p>
                  <b>Capital: {countryDetail.capital || "N/A"}</b>
                </p>
                <p>
                  <b>Top Level Domain: {countryDetail.topLevelDomain}</b>
                </p>
                <p>
                  <b>Currencies: {countryDetail.currencies}</b>
                </p>
                <p>
                  <b>Languages: {countryDetail.languages}</b>
                </p>
              </div>
              {countryDetail.borders.length > 0 && (
                <div className="border-countries">
                  <b>Border Countries:&nbsp;</b>
                  {countryDetail.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default CountryDetailsComponent;
