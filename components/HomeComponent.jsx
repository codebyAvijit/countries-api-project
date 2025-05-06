import React, { useContext, useState } from "react";
import SearchBarComponent from "./SearchBarComponent";
import FilterComponent from "./FilterComponent";
import CountriesContainerCard from "./CountriesContainerCard";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";

const HomeComponent = () => {
  const [filteredValue, setFilteredValue] = useState("");
  // const [toggleClass, setToggleClass] = useOutletContext();
  // const [toggleClass, setToggleClass] = useContext(ThemeContext);
  // console.log(a);
  const [toggleClass, setToggleClass] = useTheme();
  return (
    <main className={`${toggleClass ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBarComponent setFilteredValue={setFilteredValue} />
        <FilterComponent setFilteredValue={setFilteredValue} />
      </div>
      <main>
        <CountriesContainerCard filteredValue={filteredValue} />
      </main>
    </main>
  );
};

export default HomeComponent;
