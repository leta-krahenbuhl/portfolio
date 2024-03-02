import React, { useEffect, useState } from "react";
import "./index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";

const FontLoader = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return fontsLoaded ? <App /> : null;
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FontLoader />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
