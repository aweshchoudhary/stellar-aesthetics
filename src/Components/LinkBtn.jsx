import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const LinkBtn = ({ icon, label, varaint, white }) => {
  return (
    <>
      {varaint === "filled" && (
        <Link
          to="#"
          className={`btn w-fit sm:py-3 sm:px-8 py-2 px-5 shrink-0 rounded-full font-medium capitalize md:text-lg text-sm flex items-center gap-3 hover:bg-black hover:text-white ${
            white ? "bg-white text-primary" : "bg-primary text-white"
          }  `}
        >
          {icon && <Icon className="sm:text-2xl text-xl" icon={icon} />}
          {label}
        </Link>
      )}
      {varaint === "outlined" && (
        <Link
          to="#"
          className={`btn w-fit sm:py-3 sm:px-8 py-2 px-5 rounded-full border-2 shrink-0 ${
            white ? "border-white text-white" : "border-primary"
          } font-medium capitalize md:text-lg text-sm flex items-center gap-3 hover:bg-white text-h-primary`}
        >
          {icon && <Icon className="text-2xl" icon={icon} />}
          {label}
        </Link>
      )}
      {!varaint && (
        <Link
          to="#"
          className="btn2  w-fit  rounded-full text-primary font-medium capitalize hover:text-black flex items-center gap-3"
        >
          {icon && <Icon className="text-2xl" icon={icon} />}
          {label}
        </Link>
      )}
    </>
  );
};

export default LinkBtn;
