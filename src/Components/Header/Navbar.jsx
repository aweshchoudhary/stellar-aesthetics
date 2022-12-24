import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import menu from "./menu.json";

function createSubmenu(arr) {
  const handleScroll = () => {
    document.body.scrollTop(0);
  };
  return (
    <ul className="sub-menu absolute top-full z-10 bg-white py-10 shadow-xl border w-full flex gap-20 left-1/2 translate-x-[-50%] justify-center">
      {arr.map((menuItem, i) => {
        return (
          menuItem.heading && (
            <li className="shrink-0 grow-0 list-none" key={i}>
              <ul>
                <h1 className="font-medium text-lg border-b-4 border-gray-200 pb-2 mb-5">
                  {menuItem.heading}
                </h1>
                {menuItem?.items &&
                  menuItem?.items?.map((subMenuLink, i) => {
                    return (
                      <li className="my-2 list-none" key={i}>
                        <Link
                          to={subMenuLink.link}
                          onClick={handleScroll}
                          className="hover:font-medium text-h-primary"
                        >
                          {subMenuLink.label}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
          )
        );
      })}

      <li className="shrink-0 grow-0 list-none" key={Date.now()}>
        <h1 className="font-medium text-lg border-b-4 border-gray-200 pb-2 mb-5">
          Useful Links
        </h1>
        <ul>
          {arr.map((links, i) => {
            return (
              <>
                {!links.heading && (
                  <li className="my-2 list-none" key={i}>
                    <Link className="text-h-primary" to={links.link}>
                      {links.label}
                    </Link>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const handleScroll = () => {
    document.body.scrollTop(0);
  };
  return (
    <nav className="navbar hidden md:block z-50 bg-white border-b sticky top-0 left-0">
      <ul className="flex gap-10 justify-center text-md relative h-full  w-screen">
        {menu.map((menuItem, i) => {
          return (
            <li className="font-medium py-3 list-none" key={i}>
              <Link
                to={menuItem.link}
                onClick={handleScroll}
                className="flex items-center gap-1 text-h-primary"
              >
                {menuItem.label}
                {menuItem.submenu && (
                  <Icon
                    className="text-2xl"
                    icon="ic:baseline-keyboard-arrow-down"
                  />
                )}
              </Link>
              {menuItem.submenu && createSubmenu(menuItem.submenu)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
