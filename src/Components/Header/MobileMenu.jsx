import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import menu from "./menu.json";
import SearchBox from "./SearchBox";
import LinkBtn from "../LinkBtn";

const MobileMenu = ({ display, setDisplay }) => {
  const closeMenu = () => setDisplay(false);
  const navItem =
    "p-2 hover:bg-gray-50 my-1 rounded font-medium flex flex-wrap justify-between items-center";

  return (
    <div
      className={`sm:w-[400px] ${
        display ? "translate-x-0" : "-translate-x-full"
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
        <ul>
          {menu.map((e) => {
            return (
              <li className={navItem}>
                <Link
                  onClick={closeMenu}
                  className={`${e.submenu ? "w-1/2" : "w-full"} text-h-primary`}
                  to={e.link}
                >
                  {e.label}
                </Link>

                {e.submenu && (
                  <>
                    <div className="icon text-h-primary w-1/2 flex items-center justify-end">
                      <Icon
                        className=" text-2xl shrink-0"
                        icon="material-symbols:keyboard-arrow-down"
                      />
                    </div>
                    <ul className="w-full">
                      {e.submenu &&
                        e.submenu.map((item) => {
                          return (
                            <li className={navItem}>
                              <Link
                                to="#"
                                onClick={closeMenu}
                                className="text-h-primary"
                              >
                                {item.heading}
                              </Link>
                              {
                                <>
                                  <div className="icon text-h-primary w-1/2 flex items-center justify-end">
                                    <Icon
                                      className=" text-2xl shrink-0"
                                      icon="material-symbols:keyboard-arrow-down"
                                    />
                                  </div>
                                  <ul className="w-full ml-2">
                                    {item.items &&
                                      item.items.map((link) => {
                                        return (
                                          <li className={navItem}>
                                            <Link
                                              onClick={closeMenu}
                                              to={link.link}
                                              className="text-h-primary w-full"
                                            >
                                              {link.label}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                  </ul>
                                </>
                              }
                            </li>
                          );
                        })}
                    </ul>
                  </>
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
