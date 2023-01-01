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
        <section className="hero-slider relative md:min-h-[500px] w-full lg:py-10 md:px-10 p-5">
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
              <h2 className="sm:text-4xl uppercase mb-1 text-xl font-semibold">
                {coursePage?.attributes?.type === "fellowships"
                  ? "International Fellowship In"
                  : "Get Internationally Certified In"}
              </h2>
              <h1 className="sm:text-4xl uppercase sm:px-5 py-2 px-4 w-fit bg-white text-2xl font-bold sm:font-semibold text-primary">
                {coursePage?.attributes?.title}
              </h1>
              <br />
              <h3 className="sm:text-2xl text-xl font-medium">
                Extremely Insightful. Exceptionally Personal.
              </h3>
              <br />
              <div
                className="list-disc md:pl-5 text-white"
                dangerouslySetInnerHTML={{
                  __html: coursePage.attributes.shortDescription,
                }}
              ></div>
              <br />
              <LinkBtn
                varaint={"filled"}
                white={true}
                icon={"ic:baseline-whatsapp"}
                label={"GET BROCHURE"}
                redirect={true}
                others={{
                  to: `https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*${
                    coursePage?.attributes?.type === "fellowships"
                      ? "Fellowship"
                      : "Certification"
                  }%20in%20${coursePage.attributes.title
                    .split(" ")
                    .join("%20")}*`,
                }}
              />
            </div>
            <div className="shrink-0 md:w-1/2 w-full">
              <Img
                className={"w-full"}
                imgClass={"border-[5px] border-white"}
                src={
                  BASE_URL +
                  coursePage.attributes.courseHeaderImg.data.attributes.url
                }
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CourseHero;
