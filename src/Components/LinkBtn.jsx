import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const LinkBtn = ({ icon, label, varaint, white }) => {
  return (
    <>
      {varaint === "filled" && (
        <Link
          to="#"
          className={`btn w-fit py-3 px-10 rounded-full ${
            white ? "bg-white text-primary" : "bg-primary text-white"
          }  font-medium uppercase flex items-center gap-3 hover:bg-black hover:text-white`}
        >
          {icon && <Icon className="text-2xl" icon={icon} />}
          {label}
        </Link>
      )}
      {varaint === "outlined" && (
        <Link
          to="#"
          className={`btn w-fit py-3 px-10 rounded-full border-2 ${
            white ? "border-white text-white" : "border-primary"
          } font-medium uppercase flex items-center gap-3 hover:bg-white text-h-primary`}
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
