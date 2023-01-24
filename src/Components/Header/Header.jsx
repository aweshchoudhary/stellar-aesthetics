import { useEffect, useState } from "react";
import Middlebar from "./Middlebar";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "./Navbar/Navbar";
import Topbar from "./Topbar";
import { motion } from "framer-motion";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const screenWidth = window.screen.width;
    if (screenWidth < 768) return setToggle(true);
  }, []);
  return (
    <>
      <motion.header
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Topbar />
        <Middlebar />
        {toggle && <MobileMenu />}
      </motion.header>
      {!toggle && <Navbar />}
    </>
  );
};

export default Header;
