import { Icon } from "@iconify/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LinkBtn = ({ icon, label, varaint, white, others, redirect }) => {
  const navigate = useNavigate();
  const handleScroll = () => {
    document.body.scrollTop = 0;
    if (redirect) {
      window.open(others?.to, "_blank");
    } else {
      navigate(others?.to, { replace: true });
    }
  };

  const btnStyle =
    "btn w-fit sm:px-8 py-3 rounded-full shrink-0 font-medium capitalize md:text-lg text-sm flex items-center gap-3 transition";

  return (
    <>
      {varaint === "filled" && (
        <Link
          onClick={handleScroll}
          className={
            btnStyle +
            ` px-5 hover:bg-black hover:text-white ${
              white ? "bg-white text-primary" : "bg-primary text-white"
            }  `
          }
          to={!redirect ? others?.to : "#"}
        >
          {icon && <Icon className="sm:text-2xl text-xl" icon={icon} />}
          {label}
        </Link>
      )}
      {varaint === "outlined" && (
        <Link
          className={
            btnStyle +
            ` px-4 border-2 ${
              white ? "border-white text-white" : "border-primary text-primary"
            }  hover:border-white hover:bg-white text-h-primary`
          }
          to={!redirect ? others?.to : "#"}
        >
          {icon && <Icon className="text-2xl" icon={icon} />}
          {label}
        </Link>
      )}
      {!varaint && (
        <Link
          className={btnStyle + " text-primary hover:text-black"}
          to={!redirect ? others?.to : "#"}
        >
          {icon && <Icon className="text-2xl" icon={icon} />}
          {label}
        </Link>
      )}
    </>
  );
};

export default LinkBtn;
