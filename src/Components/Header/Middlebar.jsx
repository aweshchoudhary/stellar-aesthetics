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
          <LinkBtn
            varaint={"filled"}
            label={"BOOK CALL"}
            icon="ic:baseline-local-phone"
          />
        </div>
      </div>
    </>
  );
};

export default Middlebar;
