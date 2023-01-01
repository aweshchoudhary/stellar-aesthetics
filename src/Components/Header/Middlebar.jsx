import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useData from "../../Hooks/useContext";
import SearchBox from "./SearchBox";

const Middlebar = () => {
  const { setToggleMobileMenu } = useData();
  return (
    <>
      <div className="middlebar flex items-center justify-between px-10 py-3 border-b ">
        <Link to="/">
          <div className="logo">
            <img
              src="https://stellaraesthetics.in/wp-content/uploads/2021/12/logo-177x100-1.png.webp"
              alt="stellar aesthetics brand logo dark"
              className="w-[120px]"
            />
          </div>
        </Link>
        <div
          className="menu-btn md:hidden"
          onClick={() => {
            setToggleMobileMenu(true);
          }}
        >
          <Icon
            className="text-3xl text-body"
            icon="fa6-solid:bars-staggered"
          />
        </div>
        <div className="right md:flex hidden gap-3">
          <SearchBox />
          <a
            className="btn filled bg-primary px-6"
            href="tel:+91-799-950-6817"
            target={"_blank"}
            rel="noreferrer"
          >
            <Icon
              className="sm:text-2xl text-xl"
              icon={"ic:baseline-local-phone"}
            />
            Book Call
          </a>
        </div>
      </div>
    </>
  );
};

export default Middlebar;
