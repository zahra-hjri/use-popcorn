import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import StarRating from "./StarRating";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating /> */}
    {/* <StarRating maxRating={5} color="red" size={20} /> */}
  </React.StrictMode>
);
