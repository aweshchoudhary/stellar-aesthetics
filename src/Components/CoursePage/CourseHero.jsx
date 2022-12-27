import React from "react";
import Section from "../BodyComponent/Section";
import ImgGallery from "../ImgGallery";
import LinkBtn from "../LinkBtn";
import useData from "../../Hooks/useContext";
import { BASE_URL } from "../../config";
import Img from "../BodyComponent/Img";

const CourseHero = () => {
  const { coursePage } = useData();
  return (
    <>
      {coursePage.attributes && (
        <Section className="hero-slider relative md:min-h-[500px] w-full">
          <div className="bg h-full w-full absolute inset-0 z-0 bg-primary">
            <img
              src={
                BASE_URL +
                coursePage.attributes.courseHeaderImg.data.attributes.url
              }
              className="opacity-20 blur w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="sticky inset-0 gap-5 md:flex-row flex-col-reverse h-full w-full flex justify-between ">
            <div className="content shrink-0 md:w-1/2 text-white">
              <h2 className="sm:text-4xl mb-2 text-xl font-medium">
                {coursePage?.attributes?.type === "fellowships"
                  ? "International Fellowship In"
                  : "Get Internationally Certified In"}
              </h2>
              <h1 className="sm:text-4xl sm:py-3 sm:px-5 py-2 px-4 w-fit bg-white capitalize text-2xl font-bold sm:font-semibold text-primary">
                {coursePage?.attributes?.title}
              </h1>
              <br />
              <h3 className="sm:text-2xl text-xl font-medium">
                Extremely Insightful. Exceptionally Personal.
              </h3>
              <br />
              <div
                className="list-disc pl-5 text-white"
                dangerouslySetInnerHTML={{
                  __html: coursePage.attributes.shortDescription,
                }}
              ></div>
              <br />
              <LinkBtn
                varaint={"filled"}
                white={true}
                icon={"ic:baseline-local-phone"}
                label={"Call Us"}
              />
            </div>
            <div className="shrink-0 md:w-1/2 w-full">
              <Img
                className={"w-full"}
                src={
                  BASE_URL +
                  coursePage.attributes.courseHeaderImg.data.attributes.url
                }
              />
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export default CourseHero;
