import React, { useState } from "react";
import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <Topbar />
        <Middlebar setDisplayMenu={setIsMenuOpen} />
        <MobileMenu display={isMenuOpen} setDisplay={setIsMenuOpen} />
      </header>
      <Navbar />
    </>
  );
};

export default Header;
