import { Icon } from "@iconify/react";

const Topbar = () => {
  return (
    <div className="topbar flex md:py-2 py-5 items-center justify-between sm:text-base text-sm h-[30px] bg-primary text-white md:px-10 px-4">
      <div className="social-icons flex items-center text-2xl gap-1">
        <a
          aria-label="facebook link"
          href={"https://www.facebook.com/Stellar-Aesthetics-100540252464505/"}
          className="no-underline text-white"
        >
          <Icon icon="ic:baseline-facebook" />
        </a>
        <a
          aria-label="instagram link"
          href={"https://instagram.com/stellaraesthetics.india"}
          className="no-underline text-white"
        >
          <Icon icon="mdi:instagram" />
        </a>
        <a
          aria-label="linkedin link"
          href={"https://www.linkedin.com/in/stellar-aesthetics-7a5111226"}
          className="no-underline text-white"
        >
          <Icon icon="mdi:linkedin" />
        </a>
        <a
          aria-label="youtube channel link"
          href={"https://www.youtube.com/channel/UCjIbujA9PgEDGqrhAsEnryw"}
          className="no-underline text-white"
        >
          <Icon icon="mdi:youtube" />
        </a>
      </div>
      <div className="contact-no">
        <a
          aria-label="contact number"
          className="flex items-center no-underline text-white"
          href={"tel:+91-799-950-6817"}
        >
          <Icon icon="ic:baseline-call" className="md:text-2xl text-xl" /> +91
          79995-06817
        </a>
      </div>
    </div>
  );
};

export default Topbar;
