import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const LinkBtn = ({ icon, label, varaint, white, others }) => {
  const handleScroll = () => (document.body.scrollTop = 0);
  return (
    <>
      {varaint === "filled" && (
        <Link
          onClick={handleScroll}
          className={`btn w-fit sm:px-8 py-3 px-5 shrink-0 rounded-full font-medium capitalize md:text-lg text-sm flex items-center gap-3 hover:bg-black hover:text-white ${
            white ? "bg-white text-primary" : "bg-primary text-white"
          }  `}
          {...others}
        >
          {icon && <Icon className="sm:text-2xl text-xl" icon={icon} />}
          {label}
        </Link>
      )}
      {varaint === "outlined" && (
        <Link
          className={`btn w-fit sm:py-3 sm:px-8 py-2 px-4 rounded-full border-2 shrink-0 ${
            white ? "border-white text-white" : "border-primary text-primary"
          } font-medium capitalize md:text-lg text-sm flex items-center gap-3 transition hover:border-black hover:bg-white hover:text-black`}
          {...others}
        >
          {icon && <Icon className="text-2xl" icon={icon} />}
          {label}
        </Link>
      )}
      {!varaint && (
        <Link
          className="btn2  w-fit  rounded-full text-primary font-medium capitalize hover:text-black flex items-center gap-3"
          {...others}
        >
          {icon && <Icon className="text-2xl" icon={icon} />}
          {label}
        </Link>
      )}
    </>
  );
};

export default LinkBtn;
