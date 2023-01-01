import Card from "../Main/Card";
import Heading from "../Main/Heading";
import Section from "../Main/Section";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Bar from "../Loader/Bar";

const CourseGlimpses = () => {
  const { name } = useParams();
  const { data, loading } = useFetch(
    `/cards?filters[parentComponent][$eq]=${name}&populate=*`
  );

  return data && !loading ? (
    <Section className="glimpses">
      <Heading
        text1={"Jam-Packed With"}
        text2={"Knowledge, Experience And Goodies"}
      />
      <h2 className="md:text-4xl sm:text-2xl text-xl mt-10 font-medium">
        Glimpses Of The Program
      </h2>
      <div className="flex flex-wrap my-10">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              img={item.attributes.img.data.attributes.url}
              title={item.attributes.title}
            />
          );
        })}
      </div>
    </Section>
  ) : (
    <Bar />
  );
};

export default CourseGlimpses;
