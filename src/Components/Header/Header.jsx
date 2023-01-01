import React, { useEffect, useState } from "react";
import Middlebar from "./Middlebar";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "./Navbar/Navbar";
import Topbar from "./Topbar";

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
