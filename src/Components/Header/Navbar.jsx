import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar border-b ">
      <ul className="flex gap-10 justify-center text-md relative h-full">
        <li className="text-h-primary font-medium py-3">
          <Link to="/">Home</Link>
        </li>
        <li className="py-3">
          <Link
            to="/about"
            className="flex items-center text-h-primary font-medium"
          >
            About
            <Icon className="text-2xl" icon="ic:baseline-keyboard-arrow-down" />
          </Link>
          <ul className="sub-menu absolute top-full z-10 bg-white py-10 shadow-xl border w-full flex gap-20 left-1/2 translate-x-[-50%] justify-center">
            <li className="shrink-0 grow-0">
              <ul>
                <h1 className="font-medium text-lg border-b-4 border-gray-200 pb-2 mb-5">
                  Fellowships
                </h1>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
              </ul>
            </li>
            <li className="shrink-0 grow-0">
              <ul>
                <h1 className="font-medium text-lg border-b-4 border-gray-200 pb-2 mb-5">
                  Fellowships
                </h1>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
              </ul>
            </li>
            <li className="shrink-0 grow-0">
              <ul>
                <h1 className="font-medium text-lg border-b-4 border-gray-200 pb-2 mb-5">
                  Fellowships
                </h1>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="#" className="text-h-primary  hover:font-medium">
                    Facial Clinical Cosmetology
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="text-h-primary font-medium py-3">
          <Link to="/courses" className="flex items-center">
            Courses
            <Icon className="text-2xl" icon="ic:baseline-keyboard-arrow-down" />
          </Link>
        </li>
        <li className="text-h-primary font-medium py-3">
          <Link to="/procedures" className="flex items-center">
            Procedures
            <Icon className="text-2xl" icon="ic:baseline-keyboard-arrow-down" />
          </Link>
        </li>
        <li className="text-h-primary font-medium py-3">
          <Link to="/doctors">Doctors</Link>
        </li>
        <li className="text-h-primary font-medium py-3">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
