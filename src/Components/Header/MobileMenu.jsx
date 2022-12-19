import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import menu from "./menu.json";
import SearchBox from "./SearchBox";
import LinkBtn from "../LinkBtn";

const MobileMenu = ({ display, setDisplay }) => {
  const closeMenu = () => setDisplay(false);
  return (
    <div
      className={`sm:w-[400px] ${
        display ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:hidden block w-screen z-50 p-5 absolute top-0 left-0 h-screen bg-white`}
    >
      <div className="head flex items-center justify-between border-b pb-5 mb-5">
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
        <ul>
          {menu.map((e) => {
            return (
              <li
                className={`${
                  e.submenu && "flex flex-wrap items-center justify-between"
                } text-body p-2 border-y border-collapse hover:bg-gray-50 text-h-primary`}
              >
                <Link
                  onClick={closeMenu}
                  to={e.link}
                  className="flex items-center gap-5"
                >
                  <Icon className="text-3xl" icon={e.icon} />
                  {e.label}
                </Link>
                {e.submenu && (
                  <div className="open-menu-icon text-h-primary">
                    <Icon
                      className="text-4xl"
                      icon="material-symbols:arrow-drop-down-circle-rounded"
                    />
                  </div>
                )}
                {e.submenu && (
                  <ul className="py-2 mobile-sub-menu w-full">
                    <li className="text-body p-2 border-y border-collapse hover:bg-gray-100 text-h-primary">
                      <Link
                        onClick={closeMenu}
                        to={e.link}
                        className="flex items-center gap-5"
                      >
                        <Icon
                          className="text-3xl"
                          icon={"material-symbols:arrow-right-alt-rounded"}
                        />
                        {e.label}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            );
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
