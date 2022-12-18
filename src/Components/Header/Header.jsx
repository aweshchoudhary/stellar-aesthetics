import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="topbar flex items-center justify-between h-[30px] bg-primary text-white px-10">
        <div className="social-icons">icons</div>
        <div className="contact-no">0000 0000 000</div>
      </div>
      <div className="middlebar flex items-center justify-between px-10 py-5 border-b ">
        <div className="logo">
          <img src="#" alt="stellar aesthetics brand logo dark" />
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
          <Link
            to="#"
            className="py-3 px-8 uppercase rounded-full text-white bg-primary flex items-center w-fit gap-2 justify-center"
          >
            <Icon className="text-2xl" icon="ic:baseline-local-phone" />
            call us
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
