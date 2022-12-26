import Card from "../Card";
import Heading from "../BodyComponent/Heading";
import LinkBtn from "../LinkBtn";
import ReadMore from "../ReadMore";
import Section from "../BodyComponent/Section";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../config";
import parser from "html-react-parser";

const CourseDirector = () => {
  const { data } = useFetch("/course-director?populate=*");
  return (
    <>
      {data?.attributes && (
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
              <div className="header">{parser(data.attributes.heading)}</div>
              <br />
              <ReadMore className="text-justify text-body text-effect">
                {parser(data.attributes.description)}
              </ReadMore>
              <div>{parser(data.attributes.awards)}</div>
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
              {data.attributes.imgs.map((card, i) => {
                return (
                  <Card key={i} title={card.title} subtitle={card.subtitle} />
                );
              })}
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export default CourseDirector;
