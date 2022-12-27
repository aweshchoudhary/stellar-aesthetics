import { Icon } from "@iconify/react";
import useData from "../../Hooks/useContext";
import LinkBtn from "../LinkBtn";
import SearchBox from "./SearchBox";

const Middlebar = () => {
  const { setToggleMobileMenu } = useData();
  return (
    <>
      <div className="middlebar flex items-center justify-between px-10 py-3 border-b ">
        <div className="logo">
          <img
            src="https://stellaraesthetics.in/wp-content/uploads/2021/12/logo-177x100-1.png.webp"
            alt="stellar aesthetics brand logo dark"
            className="w-[120px]"
          />
        </div>
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
            className={`btn w-fit sm:px-8 py-3 px-5 shrink-0 rounded-full font-medium capitalize md:text-lg text-sm flex items-center gap-3 hover:bg-black hover:text-white bg-primary text-white`}
            href="tel:+91-799-950-6817"
          >
            <Icon
              className="sm:text-2xl text-xl"
              icon={"ic:baseline-local-phone"}
            />
            BOOK CALL
          </a>
        </div>
      </div>
    </>
  );
};

export default Middlebar;
