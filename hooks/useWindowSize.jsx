import React, { useState, useEffect } from "react";
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  //   return (
  //     <div style={{ textAlign: "center" }}>
  //       Window Size
  //       {windowSize.width} X {windowSize.height}
  //     </div>
  //   );

  return windowSize;
};

export default useWindowSize;
