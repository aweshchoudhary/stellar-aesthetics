import React, { useState } from "react";
import { Link } from "react-router-dom";
import BigSubmenu from "./BigSubmenu";
import { Icon } from "@iconify/react";

const NavItem = ({ item, depthLevel }) => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  return (
    item && (
      <li className="list-none relative">
        {item.submenu || item.items ? (
          <>
            {item.label ? (
              <button className="flex items-center text-h-primary py-2 px-3 hover:bg-gray-50 transition">
                {item.label}
                {depthLevel > 0 ? (
                  <span>&raquo;</span>
                ) : (
                  <Icon
                    className="text-3xl"
                    icon="ic:baseline-keyboard-arrow-down"
                  />
                )}
              </button>
            ) : (
              <button className="flex items-center justify-between text-h-primary bg-gray-50 py-2 px-3 hover:bg-gray-50 transition w-full mt-1">
                {item.heading}
                {depthLevel > 0 ? (
                  <Icon
                    className="text-3xl"
                    icon="ic:baseline-arrow-right-alt"
                  />
                ) : (
                  <Icon
                    className="text-3xl"
                    icon="ic:baseline-keyboard-arrow-down"
                  />
                )}
              </button>
            )}

            <BigSubmenu
              // isDisplay={toggleMenu}
              submenu={item.items || item.submenu}
              depthLevel={depthLevel}
            />
          </>
        ) : (
          <Link to={item.link}>{item.label}</Link>
        )}
      </li>
    )
  );
};

export default NavItem;
