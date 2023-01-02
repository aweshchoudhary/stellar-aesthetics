import React from "react";
import { Link } from "react-router-dom";
import Section from "../Components/Main/Section";
import menu from "../Components/Header/menu.json";
import PageTitle from "../Components/Main/PageTitle";

const NoPage = () => {
  return (
    <>
      <PageTitle>404 Page Not Found</PageTitle>
      <Section className={"h-[600px]"}>
        <div className="text-center flex items-center flex-col justify-center">
          <h1 className="md:text-6xl text-3xl font-semibold text-primary">
            404 Not Found
          </h1>
          <p className="md:text-3xl text-2xl font-medium">
            Oopps Page Not Found
          </p>
          <p className="md:text-xl text-lg mt-5 mb-3">
            Looking For These Pages
          </p>
          <ul className="flex flex-wrap items-center md:gap-5 gap-2 justify-center">
            {menu.map((item) => {
              return (
                <li className="list-none font-medium text-lg underline text-h-primary">
                  <Link style={{ textDecoration: "underline" }} to={item.link}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default NoPage;
