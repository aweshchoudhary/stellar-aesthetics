import React, { useEffect, useState } from "react";
import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const screenWidth = window.screen.width;
    if (screenWidth < 768) return setToggle(true);
  }, []);
  return (
    <>
      <header>
        <Topbar />
        <Middlebar />
        {toggle && <MobileMenu />}
      </header>
      <Navbar />
    </>
  );
};

export default Header;
