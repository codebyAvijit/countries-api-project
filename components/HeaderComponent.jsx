import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";
const HeaderComponent = () => {
  // const localStorageValue = JSON.parse(localStorage.getItem("isDarkMode"));
  //to prevent vanishing of the value we set, we stored it in the local storage
  //and we get a string value and to convert that string value into boolean
  //we used JSON.parse()
  // console.log(localStorageValue);

  // const [toggleClass, setToggleClass] = useState(localStorageValue);

  // if (toggleClass) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }

  // const [toggleClass, setToggleClass] = useContext(ThemeContext);
  const [toggleClass, setToggleClass] = useTheme();

  const toggleClassHandler = () => {
    // document.body.classList.toggle("dark");
    setToggleClass(!toggleClass);
    // console.log(toggleClass);
    localStorage.setItem("isDarkMode", !toggleClass);
  };
  return (
    <header className={`header ${toggleClass ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">Where in the world?</h2>
        <p onClick={toggleClassHandler} id="para">
          <i className={`fa-solid fa-${toggleClass ? "sun" : "moon"}`}></i>{" "}
          &nbsp;&nbsp; {toggleClass ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default HeaderComponent;
