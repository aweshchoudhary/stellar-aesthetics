import Card from "../Main/Card";
import Heading from "../Main/Heading";
import ReadMore from "../Main/ReadMore";
import Section from "../Main/Section";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../config";
import parser from "html-react-parser";
import Bar from "../Loader/Bar";
import Img from "../Main/Img";
import { Link } from "react-router-dom";

const CourseDirector = () => {
  // const cards = useFetch(
  //   "/cards?filters[parentComponent][$eq]=course-director&populate=*"
  // );
  // const { data, loading } = useFetch("/course-director?populate=*");
  const data = ["1"];
  return (
    <>
      {/* {cards.data && !cards.loading && !loading ? ( */}
      {data ? (
        <Section className="course-director py-20">
          <Heading
            text1={"meet your"}
            text2="Course director."
            className={"sm:mb-20 mb-10"}
          />
          {data?.attributes && (
            <div className="md:flex">
              <div className="md:w-[30%] w-[90%] mx-auto shrink-0 grow-0">
                <div className="course-director-image">
                  <Img
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
              {/* {cards.data.map((card, i) => {
                return (
                  !card.attributes.horizontal && (
                    <Card
                      key={i}
                      img={card.attributes.img.data.attributes.url}
                      title={card.attributes.title}
                      horizontal={card.attributes.horizontal}
                      subtitle={card.attributes.subtitle}
                    />
                  )
                );
              })}
              {cards.data.map((card, i) => {
                return (
                  card.attributes.horizontal && (
                    <Card
                      key={i}
                      img={card.attributes.img.data.attributes.url}
                      title={card.attributes.title}
                      horizontal={card.attributes.horizontal}
                      subtitle={card.attributes.subtitle}
                    />
                  )
                );
              })} */}
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
