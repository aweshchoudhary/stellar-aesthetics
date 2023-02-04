import parser from "html-react-parser";
import Bar from "../Loader/Bar";
import { Link } from "react-router-dom";
import courseDirector from "../../data/course-director.json";
import { lazy } from "react";

const Section = lazy(() => import("../Main/Section"));
const Heading = lazy(() => import("../Main/Heading"));
const Img = lazy(() => import("../Main/Img"));
const Card = lazy(() => import("../Main/Card"));
const ReadMore = lazy(() => import("../Main/ReadMore"));

const CourseDirector = () => {
  return (
    <>
      {courseDirector.attributes ? (
        <Section className="course-director py-20">
          <Heading
            text1={"meet your"}
            text2="Course director."
            className={"sm:mb-20 mb-10"}
          />
          {courseDirector?.attributes && (
            <div className="md:flex">
              <div className="md:w-[30%] w-[90%] mx-auto shrink-0 grow-0">
                <div className="course-director-image">
                  <Img
                    src={
                      "/assets/img/" +
                      courseDirector.attributes.img.data.attributes.name
                    }
                    alt={
                      courseDirector.attributes.img.data.attributes
                        .alternativeText
                    }
                  />
                </div>
              </div>
              <div className="md:w-[70%]  md:ml-20 md:mt-0 mt-14">
                <div className="header">
                  {parser(courseDirector.attributes.heading)}
                </div>
                <br />
                <ReadMore className="text-justify text-body text-effect">
                  {parser(courseDirector.attributes.description)}
                </ReadMore>
                <div>{parser(courseDirector.attributes.awards)}</div>
                <br />
                <Link
                  className="btn filled bg-primary"
                  to={"/dr-sapnna-vaderra"}
                >
                  Know More
                </Link>
              </div>
            </div>
          )}
          <div>
            <br />
            <h2 className="md:text-4xl  text-3xl text-center text-primary font-medium my-10">
              Awards & Achievement
            </h2>
            <div className="flex flex-wrap justify-center items-start">
              {courseDirector.attributes.imgs.map((card, i) => {
                return (
                  !card?.attributes?.horizontal && (
                    <Card
                      key={i}
                      img={"/assets/img/" + card.img.data.attributes.name}
                      title={card.title}
                      horizontal={card.horizontal}
                      subtitle={card.subtitle}
                    />
                  )
                );
              })}
              {courseDirector.attributes.imgs.map((card, i) => {
                return (
                  card?.attributes?.horizontal && (
                    <Card
                      key={i}
                      img={"/assets/img/" + card.img.data.attributes.name}
                      title={card.title}
                      horizontal={card.horizontal}
                      subtitle={card.subtitle}
                    />
                  )
                );
              })}
            </div>
          </div>
        </Section>
      ) : (
        <Bar />
      )}
    </>
  );
};

export default CourseDirector;
