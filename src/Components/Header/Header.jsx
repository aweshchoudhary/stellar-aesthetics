import React from "react";
import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <>
      <header>
        <Topbar />
        <Middlebar />
      </header>
      <Navbar />
    </>
  );
};

export default Header;
