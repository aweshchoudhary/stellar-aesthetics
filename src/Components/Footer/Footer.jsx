import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const handleTop = () => {
    document.body.scrollTop = 0;
  };
  return (
    <footer className="border-t">
      <div className="border-b gap-2 flex items-center justify-between p-5">
        <h2 className="text-2xl font-semibold text-primary">
          Stellar Aesthetics
        </h2>
        <button
          className="border-2 border-primary rounded-full py-2 md:px-5 px-3 text-primary hover:text-black hover:border-black transition"
          onClick={handleTop}
        >
          Back Top
        </button>
      </div>
      <ul className="sm:p-10 p-4 sm:flex justify-between">
        <li className="list-none lg:w-[20%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h4 className="text-lg font-semibold text-primary">Useful Links</h4>
          <ul className="my-5">
            <li className="list-none my-1">
              <Link className="text-h-primary" to={"/"}>
                Home
              </Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary" to={"/about"}>
                About Us
              </Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary" to={"/courses"}>
                Courses
              </Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary" to={"/procedures"}>
                Procedures
              </Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary" to={"/doctors"}>
                Doctors
              </Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </li>
        <li className="list-none lg:w-[20%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h4 className="text-lg font-semibold text-primary">Company</h4>
          <ul className="my-5">
            <li className="list-none my-1">
              <Link className="text-h-primary" to={"/about"}>
                About
              </Link>
            </li>
            <li className="list-none my-1">
              <HashLink smooth className="text-h-primary" to={"/about#vision"}>
                Vision
              </HashLink>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary" to={"/dr-sapnna-vaderra"}>
                Course Director
              </Link>
            </li>
            <li className="list-none my-1">
              <HashLink
                smooth
                className="text-h-primary"
                to={"/about#director"}
              >
                Director
              </HashLink>
            </li>
          </ul>
        </li>
        <li className="list-none lg:w-[40%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h4 className="text-lg font-semibold text-primary">Courses</h4>
          <ul className="my-5">
            <li className="list-none my-1">
              <Link
                className="text-h-primary"
                to={"/courses/fellowship-in-clinical-cosmetology"}
              >
                Fellowship In Clinical Cosmetology
              </Link>
            </li>
            <li className="list-none my-1">
              <Link
                className="text-h-primary"
                to={"/courses/fellowship-in-tricology"}
              >
                Fellowship In Trichology
              </Link>
            </li>
            <li className="list-none my-1">
              <Link
                className="text-h-primary"
                to={"/courses/certification-in-facial-cosmetics"}
              >
                Certification In Facial Cosmetics
              </Link>
            </li>
            <li className="list-none my-1">
              <Link
                className="text-h-primary"
                to={"/courses/certification-in-hair-restoration"}
              >
                Certification In Hair Restoration
              </Link>
            </li>
            <li className="list-none my-1">
              <Link
                className="text-h-primary"
                to={
                  "/courses/certification-in-micro-pigmentation-micro-blading"
                }
              >
                Certification In Micro Pigmentation & Micro Blading
              </Link>
            </li>
          </ul>
        </li>
        <li className="list-none lg:w-[20%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h4 className="text-lg font-semibold text-primary">Procedures</h4>
          <ul className="my-5">
            <li className="list-none my-1">
              <Link className="text-h-primary">Face</Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary">Hair</Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary">Skin</Link>
            </li>
            <li className="list-none my-1">
              <Link className="text-h-primary">Body</Link>
            </li>
          </ul>
        </li>
      </ul>
      <p className="sm:text-lg text-sm text-center border-t py-4">
        @Stellar Aesthetics All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
