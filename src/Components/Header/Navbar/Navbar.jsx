import { useState } from "react";
import Bar from "../../Loader/Bar";
import menu from "../../../data/menu.json";
import useData from "../../../Hooks/useContext";
import NavItem from "./NavItem";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const { loading } = useData();
  const handleClick = () => {
    const searchInput = document.getElementById("search-input");
    searchInput.focus();
    document.body.scrollTop = 0;
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar hidden md:block z-40 bg-white border-b sticky top-0 left-0"
    >
      <div className="flex items-center justify-between px-10">
        <ul className="flex items-center justify-center font-medium font-lg">
          {menu.map((item, i) => {
            const depthLevel = 0;
            return (
              <NavItem
                isSubmenuOpen={openSubmenu}
                setIsSubmenuOpen={setOpenSubmenu}
                item={item}
                key={i}
                depthLevel={depthLevel}
              />
            );
          })}
        </ul>
        <button onClick={handleClick}>
          <Icon className="text-2xl" icon="tabler:search" />
        </button>
      </div>
      {loading && <Bar />}
    </motion.nav>
  );
};

export default Navbar;
