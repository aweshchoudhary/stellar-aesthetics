import React from "react";
import Section from "../BodyComponent/Section";
import ImgGallery from "../ImgGallery";
import LinkBtn from "../LinkBtn";

const CourseHero = () => {
  return (
    <Section className="hero-slider md:h-[500px] gap-5 md:flex-row flex-col-reverse w-full bg-gray-100 flex justify-between">
      <div className="content shrink-0 md:w-1/2">
        <h2 className="sm:text-3xl text-xl font-medium">
          Get International Fellowship In
        </h2>
        <h1 className="sm:text-4xl text-2xl font-bold sm:font-semibold text-primary">
          Clinical Cosmeotolgy
        </h1>
        <br />
        <h3 className="sm:text-2xl text-xl font-medium">
          Extremely Insightful. Exceptionally Personal.
        </h3>
        <br />
        <ul className="list-disc pl-5">
          <li className="list-disc">Example key points here</li>
          <li className="list-disc">Example key points here</li>
          <li className="list-disc">Example key points here</li>
          <li className="list-disc">Example key points here</li>
          <li className="list-disc">Example key points here</li>
          <li className="list-disc">Example key points here</li>
        </ul>
        <br />
        <LinkBtn
          varaint={"filled"}
          icon={"ic:baseline-local-phone"}
          label={"Call Us"}
        />
      </div>
      <div className="shrink-0 md:w-1/2 flex gap-5">
        <ImgGallery />
      </div>
    </Section>
  );
};

export default CourseHero;
