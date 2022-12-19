import React from "react";
import ImgGallery from "../ImgGallery";
import LinkBtn from "../LinkBtn";

const CourseHero = () => {
  return (
    <section className="hero-slider h-[500px] w-full bg-gray-100 flex justify-between p-10">
      <div className="content shrink-0 w-1/2">
        <h2 className="text-3xl font-medium">
          Get International Fellowship In
        </h2>
        <h1 className="text-4xl font-semibold text-primary">
          Clinical Cosmeotolgy
        </h1>
        <br />
        <h3 className="text-2xl font-medium">
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
        <br />
        <LinkBtn
          varaint={"filled"}
          icon={"ic:baseline-local-phone"}
          label={"Call Us"}
        />
      </div>
      <div className="shrink-0 w-1/2 flex gap-y-5">
        <ImgGallery />
      </div>
    </section>
  );
};

export default CourseHero;
