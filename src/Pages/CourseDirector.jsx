import Heading from "../Components/Main/Heading";
import Section from "../Components/Main/Section";
import PageHeader from "../Components/Main/PageHeader";
import useFetch from "../Hooks/useFetch";
import Bar from "../Components/Loader/Bar";
import { BASE_URL } from "../config";
import parser from "html-react-parser";

const CourseDirector = () => {
  const { data, loading } = useFetch("/dr-sapnna-vaderra?populate=*");

  return data && !loading ? (
    <>
      <PageHeader>Dr. Sapnna Vaderra</PageHeader>
      <Section>
        <div>
          <img
            src={BASE_URL + data.attributes.featuredImg.data.attributes.url}
            alt=""
          />
          <Heading className={"mt-10"} text1={"Dr. Sapnna Vaderra."} />
          <h3 className="sm:text-2xl text-xl text-primary">
            Surgeon. Researcher. Mentor.
          </h3>
        </div>
        <div>
          {data.attributes.section.map((item, i) => {
            return (
              <div key={i} className="my-10">
                <h2 className="text-3xl font-bold mb-5">{item.heading}</h2>
                <p className="text-body">{parser(item.description)}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  ) : (
    <Bar />
  );
};

export default CourseDirector;
