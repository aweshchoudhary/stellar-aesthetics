import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar flex md:py-2 py-5 items-center justify-between sm:text-base text-sm h-[30px] bg-primary text-white md:px-10 px-4">
      <div className="social-icons flex items-center text-xl md:text-2xl gap-1">
        <Link
          to={"https://www.facebook.com/Stellar-Aesthetics-100540252464505/"}
        >
          <Icon icon="ic:baseline-facebook" />
        </Link>
        <Link
          to={"https://www.facebook.com/Stellar-Aesthetics-100540252464505/"}
        >
          <Icon icon="mdi:instagram" />
        </Link>
        <Link to={"https://www.linkedin.com/in/stellar-aesthetics-7a5111226"}>
          <Icon icon="mdi:linkedin" />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCjIbujA9PgEDGqrhAsEnryw"}>
          <Icon icon="mdi:youtube" />
        </Link>
      </div>
      <div className="contact-no">
        <Link className="flex items-center" to={"tel:+91-799-950-6817"}>
          <Icon icon="ic:baseline-call" className="md:text-2xl text-xl" /> +91
          79995-06817
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
