// import React from "react";
// import { useRouteError } from "react-router-dom";

// const ErrorComponent = () => {
//   const errorData = useRouteError();
//   // console.log(errorData);
//   return (
//     <>
//       <h1>{errorData.status} Something Went Wrong</h1>
//       <h2>{errorData.data}</h2>
//     </>
//   );
// };

// export default ErrorComponent;

import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();

  console.error("Route Error:", error);

  return (
    <>
      <h1>{error?.status || 500} - Something Went Wrong</h1>
      <h2>{error?.data || error?.message || "Unexpected error occurred."}</h2>
    </>
  );
};

export default ErrorComponent;
