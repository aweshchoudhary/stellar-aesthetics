import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ children }) => {
  const location = window.location.pathname.split("/");
  return (
    <header className="bg-primary py-14 px-10">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-white">
        {children}
      </h1>
      <div className="mt-5 text-white flex gap-2">
        {location.map((item, i) => {
          return i !== location.length - 1 ? (
            <span key={i}>
              <Link key={i} to={"/"}>
                home
              </Link>{" "}
              <Link to={"/" + item}>{item}</Link> /
            </span>
          ) : (
            <Link key={i} to={"/" + item}>
              {item}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default PageHeader;
