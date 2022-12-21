import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ children }) => {
  return (
    <header className="bg-primary py-14 px-10">
      <h1 className="text-6xl font-medium text-white">{children}</h1>
      <div className="mt-5 text-white flex gap-2">
        <Link to={"/"}>Home</Link>/<Link to={"/about"}>About Us</Link>
      </div>
    </header>
  );
};

export default PageHeader;
