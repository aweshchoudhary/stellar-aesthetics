import React from "react";
import Card from "../Card";
import Heading from "../BodyComponent/Heading";
import LinkBtn from "../LinkBtn";
import ReadMore from "../ReadMore";
import Section from "../BodyComponent/Section";

const CourseDirector = () => {
  return (
    <Section className="course-director py-20">
      <Heading
        text1={"meet your"}
        text2="Course director."
        className={"sm:mb-20 mb-10"}
      />
      <div className="md:flex">
        <div className="md:w-[30%] w-[90%] mx-auto shrink-0 grow-0">
          <div className="course-director-image">
            <img
              src="https://stellaraesthetics.in/wp-content/uploads/2022/11/IMG_20210807_113230.jpg.webp"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-[70%]  md:ml-20 md:mt-0 mt-14">
          <div className="header">
            <h2 className="sm:text-3xl text-2xl font-medium">
              Dr. Sapnna Vaderra
            </h2>
            <h3 className="sm:text-2xl text-xl text-primary">
              Surgeon. Researcher. Mentor.
            </h3>
          </div>
          <br />
          <ReadMore className="text-justify text-body text-effect">
            A Surgeon- Researcher-Mentor par excellence. Dr Sapnna Vaderra is
            one of the top Facial Plastic, Facial Cosmetic & Hair Transplant
            Surgeon and Co Founder of Stellar Aesthetics, India. <br />
            <br /> Throughout her meritorious career, she has been humbled with
            numerous awards She is an International Speaker for Cosmetology &
            has been training & mentoring aestheticians who travel nationally &
            internationally to learn the art of Cosmetology from her <br />
            <br />
            She has contributed to more than 32 International Pubmed Indexed
            Journals and Book Chapters. She maintains an exclusive Cosmetology
            Practice & consults at leading Cosmetic Centers across Mumbai. Her
            passion and expertise in the subject of Cosmetology is well known.
            <br />
            <br />
            Co-Director: Stellar Aesthetics (15+ Centers across India)
            Consultant Facial Cosmetic Surgeon at: Stellar Aesthetics The Bombay
            Aesthetics Adore Skin & Aesthetics Be YOU Aesthetics Porwal
            Aesthetic World
          </ReadMore>
          {/* <LinkBtn label={"Read More"} /> */}
          <br />
          <h3 className="text-2xl font-medium">Awards & Recognition</h3>
          <ul className="my-3 ml-5 text-body text-md">
            <li className="list-disc">
              Awarded for Excellence in Cosmetology, 2022 - Molarip
            </li>
            <li className="list-disc">
              Awarded Best South Asian Paper for her pioneering research paper
              on Aging of IndianFace 202+
            </li>
            <li className="list-disc">
              Awarded Excellence in Facial Cosmetics, 2019 - Indian Health
              Professional Awardp
            </li>
            <li className="list-disc">
              Winner of Young Achiever in Facial Cosmetics, 2019 - IADI
            </li>
            <li className="list-disc">
              Winner of Youth Icon of the year, 2019 - IADS
            </li>
          </ul>
          <br />
          <LinkBtn varaint={"filled"} label={"Know More"} />
        </div>
      </div>
      <div>
        <br />
        <h2 className="md:text-4xl  text-3xl text-center text-primary font-medium my-10">
          Awards & Achievement
        </h2>
        <div className="flex flex-wrap justify-center items-start">
          <Card />
          <Card />
          <Card />
          <Card horizontal={true} />
          <Card horizontal={true} />
          <Card horizontal={true} />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Section>
  );
};

export default CourseDirector;
