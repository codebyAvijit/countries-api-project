import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProviderComponent = ({ children }) => {
  //   console.log(children);
  const localStorageValue = JSON.parse(localStorage.getItem("isDarkMode"));
  //to prevent vanishing of the value we set, we stored it in the local storage
  //and we get a string value and to convert that string value into boolean
  //we used JSON.parse()
  // console.log(localStorageValue);

  const [toggleClass, setToggleClass] = useState(localStorageValue);

  return (
    <ThemeContext.Provider value={[toggleClass, setToggleClass]}>
      {children}
    </ThemeContext.Provider>
  );
};

//this children prop is actually the components written inside the
{
  /* <ThemeProviderComponent></ThemeProviderComponent> */
}
//coz we can acces anything as 'children written' inside this simple html tags
export default ThemeProviderComponent;

// console.log(ThemeContext);
