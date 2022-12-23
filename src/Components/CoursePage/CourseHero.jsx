import React from "react";
import Section from "../BodyComponent/Section";
import ImgGallery from "../ImgGallery";
import LinkBtn from "../LinkBtn";
import useData from "../../Hooks/useContext";
import { BASE_URL } from "../../config";

const CourseHero = () => {
  const { coursePage } = useData();
  console.log(coursePage);
  return (
    <>
      {coursePage.attributes && (
        <Section className="hero-slider md:min-h-[500px] gap-5 md:flex-row flex-col-reverse w-full bg-gray-100 flex justify-between">
          <div className="content shrink-0 md:w-1/2">
            <h2 className="sm:text-3xl text-xl font-medium">
              {coursePage?.attributes?.type === "fellowships"
                ? "International Fellowship In"
                : "Get Internationally Certified In"}
            </h2>
            <h1 className="sm:text-4xl capitalize text-2xl font-bold sm:font-semibold text-primary">
              {coursePage?.attributes?.title}
            </h1>
            <br />
            <h3 className="sm:text-2xl text-xl font-medium">
              Extremely Insightful. Exceptionally Personal.
            </h3>
            <br />
            <div
              className="list-disc pl-5 text-body"
              dangerouslySetInnerHTML={{
                __html: coursePage.attributes.shortDescription,
              }}
            ></div>
            <br />
            <LinkBtn
              varaint={"filled"}
              icon={"ic:baseline-local-phone"}
              label={"Call Us"}
            />
          </div>
          <div className="shrink-0 md:w-1/2 flex gap-5">
            <ImgGallery
              img={
                BASE_URL +
                coursePage.attributes.courseHeaderImg.data.attributes.url
              }
            />
          </div>
        </Section>
      )}
    </>
  );
};

export default CourseHero;
