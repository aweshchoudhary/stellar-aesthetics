import React from "react";
import { Icon } from "@iconify/react";
import menuItems from "../menu.json";
import SearchBox from "../SearchBox";
import LinkBtn from "../../LinkBtn";
import MenuItem from "./MenuItem";
import useData from "../../../Hooks/useContext";

const MobileMenu = () => {
  const { toggleMobileMenu, setToggleMobileMenu } = useData();
  const closeMenu = () => setToggleMobileMenu(false);
  return (
    <div
      className={`sm:w-[400px] ${
        toggleMobileMenu ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:hidden block w-screen z-50 p-5 absolute top-0 left-0 h-screen bg-white`}
    >
      <div className="head flex items-center justify-between border-b pb-5 mb-3">
        <div className="logo">
          <img
            src="https://stellaraesthetics.in/wp-content/uploads/2021/12/logo-177x100-1.png.webp"
            alt=""
            className="w-[130px]"
          />
        </div>
        <div className="close-btn" onClick={closeMenu}>
          <Icon className="text-4xl" icon="ion:close" />
        </div>
      </div>
      <SearchBox />
      <nav className="mt-5 mobile-navbar">
        <ul className="menus">
          {menuItems.map((menu, index) => {
            return <MenuItem items={menu} key={index} />;
          })}
        </ul>
      </nav>
      <div className="buttons py-5 flex items-center gap-5">
        <LinkBtn
          varaint={"filled"}
          label="Book Call"
          icon={"material-symbols:call"}
        />
        <LinkBtn
          variant={"outlined"}
          label="Whatsapp Us"
          icon={"ic:baseline-whatsapp"}
        />
      </div>
    </div>
  );
};

export default MobileMenu;

// import React from "react";
// import menuItems from "./menu.json";
// import MenuItem from "./MenuItem";

// const MobileMenu = () => {
//   return (

//   );
// };

// export default MobileMenu;
