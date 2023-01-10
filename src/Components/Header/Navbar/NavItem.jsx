import { Link } from "react-router-dom";
import BigSubmenu from "./BigSubmenu";
import { Icon } from "@iconify/react";

const NavItem = ({ item, depthLevel, isSubmenuOpen, setIsSubmenuOpen }) => {
  const handleHover = (boolean) => {
    setIsSubmenuOpen(boolean);
  };
  return (
    item && (
      <li onMouseEnter={() => handleHover(true)} className="list-none relative">
        {item.submenu || item.items ? (
          <>
            {item.label ? (
              <Link
                to={item.link}
                className="flex items-center text-h-primary py-2 px-3 hover:bg-gray-50 transition"
              >
                {item.label}
                {depthLevel > 0 ? (
                  <span>&raquo;</span>
                ) : (
                  <Icon
                    className="text-3xl"
                    icon="ic:baseline-keyboard-arrow-down"
                  />
                )}
              </Link>
            ) : (
              <Link
                to={item.link}
                className="flex items-center justify-between text-h-primary  py-2 px-3 hover:bg-gray-50 transition w-full mt-1"
              >
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
              </Link>
            )}
            {isSubmenuOpen ? (
              <BigSubmenu
                submenu={item.items || item.submenu}
                depthLevel={depthLevel}
                isSubmenuOpen={isSubmenuOpen}
                setIsSubmenuOpen={setIsSubmenuOpen}
              />
            ) : null}
          </>
        ) : (
          <Link
            to={item.link}
            className="text-h-primary h-full py-3 px-3 hover:bg-gray-50 transition"
          >
            {item.label}
          </Link>
        )}
      </li>
    )
  );
};

export default NavItem;
