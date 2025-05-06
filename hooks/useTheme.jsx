import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = () => {
  // return useContext(ThemeContext); // ✅ Pulls from Provider
  const [toggleClass, setToggleClass] = useContext(ThemeContext);
  return [toggleClass, setToggleClass];
};

export default useTheme;
