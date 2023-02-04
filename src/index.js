import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./Context/DataContext";
import "./Styles/output.css"; // tailwind css style
import "./Styles/global.css"; // Custom css style

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
