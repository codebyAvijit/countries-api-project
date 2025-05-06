// import React, { useState } from "react";
import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import { Outlet, useOutletContext } from "react-router-dom";
// import { ThemeContext } from "./contexts/ThemeContext";
import ThemeProviderComponent from "./contexts/ThemeContext";
// import useWindowSize from "./hooks/useWindowSize.jsx";
import "./App.css";

const App = () => {
  // const localStorageValue = JSON.parse(localStorage.getItem("isDarkMode"));
  // //to prevent vanishing of the value we set, we stored it in the local storage
  // //and we get a string value and to convert that string value into boolean
  // //we used JSON.parse()
  // // console.log(localStorageValue);

  // const [toggleClass, setToggleClass] = useState(localStorageValue);
  // const windowSize = useWindowSize();
  return (
    // <ThemeContext.Provider value={[toggleClass, setToggleClass]}>
    //   <HeaderComponent
    //   // toggleClass={toggleClass}
    //   // setToggleClass={setToggleClass}
    //   />
    //   <Outlet
    // {window.width} X {window.height}
    //   // context={[toggleClass, setToggleClass]}
    //   />
    // </ThemeContext.Provider>

    <ThemeProviderComponent>
      <HeaderComponent />
      <Outlet />
    </ThemeProviderComponent>
    //this children prop is actually the components written inside the

    /* <ThemeProviderComponent></ThemeProviderComponent> */

    //coz we can acces anything as 'children written' inside this simple html tags
  );
};

export default App;
