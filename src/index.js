import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./Context/DataContext";
import reportWebVitals from "./reportWebVitals";
import "./Styles/output.css"; // tailwind css style
import "./Styles/Sass/guides.css"; // Custom css style

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
