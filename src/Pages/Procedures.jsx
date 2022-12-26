import React from "react";
import { Link } from "react-router-dom";
import Section from "../Components/BodyComponent/Section";
import PageHeader from "../Components/PageHeader";
import { BASE_URL } from "../config";

const Card = ({ img, title }) => {
  return (
    <div className=" sm:w-1/2 w-full">
      <div className="card sm:m-4 mb-4 sm:h-[500px] h-[300px] shrink-0">
        <Link to={"/procedures/name"}>
          <div className="img sm:h-[400px] h-[200px] w-full bg-gray-200">
            {img && (
              <img
                src={BASE_URL + img}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="caption mt-3">
            <h5 className="text-xl capitalize font-medium">
              {title} Procedures
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Procedures = () => {
  return (
    <>
      <PageHeader>Procedures</PageHeader>
      <Section className={"Cards"}>
        <div className="flex flex-wrap">
          <Card title={"face"} />
          <Card title={"Hair"} />
          <Card title={"Skin"} />
          <Card title={"Body"} />
        </div>
      </Section>
    </>
  );
};

export default Procedures;
