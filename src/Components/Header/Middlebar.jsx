import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import LinkBtn from "../LinkBtn";

const Middlebar = () => {
  return (
    <div className="middlebar flex items-center justify-between px-10 py-3 border-b ">
      <div className="logo">
        <img
          src="https://stellaraesthetics.in/wp-content/uploads/2021/12/logo-177x100-1.png.webp"
          alt="stellar aesthetics brand logo dark"
          className="w-[120px]"
        />
      </div>
      <div className="right flex gap-3">
        <div className="search bg-gray-100 rounded-full px-5 shrink-0">
          <input
            type="search"
            placeholder="Search Courses, etc..."
            name=""
            id=""
            className="w-full h-full bg-transparent outline-none"
          />
        </div>
        <LinkBtn
          varaint={"filled"}
          label={"BOOK CALL"}
          icon="ic:baseline-local-phone"
        />
      </div>
    </div>
  );
};

export default Middlebar;
