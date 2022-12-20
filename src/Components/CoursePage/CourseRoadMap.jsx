import React from "react";
import Heading from "../BodyComponent/Heading";
import Section from "../BodyComponent/Section";

const CourseRoadMap = () => {
  const wrapperStyle =
    "sec-1 sm:px-10 pl-5 py-10 sm:pl-20 sm:border-l-[10px] border-l-[5px] border-primary relative";
  return (
    <Section className="road-map">
      <Heading text1={"clinical cosmetology fellowship"} text2={"roadmap."} />
      <div className="maps sm:p-20 p-5 py-20">
        <div className={wrapperStyle}>
          <div className="absolute flex items-center gap-5 md:-top-[30px] -top-[15px] -left-[18px] md:-left-[30px]">
            <div className="circle circle sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] rounded-full bg-primary"></div>
            <h2 className="md:text-4xl text-3xl font-medium mb-2 ml-5">
              Module 1
            </h2>
          </div>
          <div className="pb-10">
            <h3 className="sm:text-2xl text-xl text-primary mb-5">
              Online Activities
            </h3>
            <p className="text-body">
              <ul className="ml-5">
                <li className="list-disc">
                  6 days- 6 online activities before the Hands-On Module Startp
                </li>
                <li className="list-disc">
                  {" "}
                  1 Online Live Interactive Lecture Session (webinar
                </li>
                <li className="list-disc">
                  Lectures Series Part 1 (8 Prerecorded Lectures), covers
                  various aspects of Clinical Cosmetology, to help you
                  understand the intricacies before coming for Hands-On modules.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="sec-last sm:px-10  sm:pl-20 border-l-[10px] border-primary relative">
          <div className="absolute flex items-center gap-5 -top-[30px] -left-[30px]">
            <div className="circle circle h-[50px] w-[50px] rounded-full bg-primary"></div>
            <h2 className="text-4xl font-medium mb-2 ml-5">Get Certificates</h2>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CourseRoadMap;
