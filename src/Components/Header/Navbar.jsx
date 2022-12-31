import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import Bar from "../Loader/Bar";
import menu from "./menu.json";
import useData from "../../Hooks/useContext";

function CreateSubmenu({ arr }) {
  const navigate = useNavigate();
  const handleScroll = (url) => {
    document.body.scrollTop = 0;
    navigate(url, { replace: true });
  };
  return (
    <ul
      className={
        "sub-menu absolute top-full w-screen z-10 bg-white py-10 shadow-xl border flex gap-20 left-1/2 translate-x-[-50%] justify-center"
      }
    >
      {arr &&
        arr.map((menuItem, i) => {
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
                          <button
                            onClick={() => handleScroll(subMenuLink.link)}
                            className="text-h-primary"
                          >
                            {subMenuLink.label}
                          </button>
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
          {arr &&
            arr.map((links, i) => {
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
function CreateSubmenu2({ arr, w }) {
  const navigate = useNavigate();
  const handleScroll = (url) => {
    navigate(url, { replace: true });
    document.body.scrollTop = 0;
  };
  return (
    <ul
      className={
        "sub-menu absolute top-full min-w-[200px] z-10 bg-white py-5 shadow-xl border flex flex-col px-5 left-1/2 translate-x-[-50%] justify-center"
      }
    >
      {arr &&
        arr.map((menuItem, i) => {
          return (
            <li key={i} className="list-none py-2 text-h-primary">
              <Link to={menuItem.link}>
                <div onClick={handleScroll}>{menuItem.label}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

const Navbar = () => {
  const navigate = useNavigate();
  const handleScroll = (url) => {
    navigate(url, { replace: true });
    document.body.scrollTop = 0;
  };

  const { loading } = useData();

  return (
    <nav className="navbar hidden md:block z-40 bg-white border-b sticky top-0 left-0">
      <ul className="flex gap-10 justify-center text-md relative h-full  w-screen">
        {menu.map((menuItem, i) => {
          return (
            <li className="font-medium py-3 list-none" key={i}>
              <button
                onClick={() => handleScroll(menuItem.link)}
                className="flex items-center gap-1 text-h-primary"
              >
                {menuItem.label}
                {menuItem.submenu && (
                  <Icon
                    className="text-2xl"
                    icon="ic:baseline-keyboard-arrow-down"
                  />
                )}
              </button>
              {menuItem.submenu ? (
                !menuItem.type ? (
                  <CreateSubmenu arr={menuItem.submenu} />
                ) : (
                  <CreateSubmenu2 arr={menuItem.submenu} />
                )
              ) : null}
            </li>
          );
        })}
      </ul>
      {loading && <Bar />}
    </nav>
  );
};

export default Navbar;
