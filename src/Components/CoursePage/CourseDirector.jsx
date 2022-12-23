import React, { useEffect, useState } from "react";
import Card from "../Card";
import Heading from "../BodyComponent/Heading";
import LinkBtn from "../LinkBtn";
import ReadMore from "../ReadMore";
import Section from "../BodyComponent/Section";
import api from "../../Api/api";
import { BASE_URL } from "../../config";

const CourseDirector = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCourseDirectorData = async () => {
      try {
        const res = await api.get("/course-director?populate=*");
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourseDirectorData();
  }, []);

  return (
    <>
      {data.attributes && (
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
                  src={BASE_URL + data.attributes.img.data.attributes.url}
                  alt={data.attributes.img.data.attributes.alternativeText}
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
                {data.attributes.description}
              </ReadMore>
              {/* <LinkBtn label={"Read More"} /> */}
              <br />
              <h3 className="text-2xl font-medium">Awards & Recognition</h3>
              <ul className="my-3 ml-5 text-body text-md">
                <li className="list-disc">
                  Awarded for Excellence in Cosmetology, 2022 - Molarip
                </li>
                <li className="list-disc">
                  Awarded Best South Asian Paper for her pioneering research
                  paper on Aging of IndianFace 202+
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
              {/* {data.attributes.images.map((card) => {
                return <Card title={card.attributes.title} />;
              })} */}
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
              <Card title={"This is a title"} subtitle={"this is a subtitle"} />
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export default CourseDirector;
