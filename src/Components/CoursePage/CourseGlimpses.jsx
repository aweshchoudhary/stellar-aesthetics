import Card from "../Main/Card";
import Heading from "../Main/Heading";
import Section from "../Main/Section";
import Bar from "../Loader/Bar";

const CourseGlimpses = ({ items }) => {
  return items ? (
    <Section className="glimpses">
      <Heading
        text1={"Jam-Packed With"}
        text2={"Knowledge, Experience And Goodies"}
      />
      <h2 className="md:text-4xl sm:text-2xl text-xl mt-10 font-medium">
        Glimpses Of The Program
      </h2>
      <div className="flex flex-wrap my-10">
        {items.map((item, key) => {
          return (
            <Card
              key={key}
              img={"/assets/img/" + item.img.data.attributes.name}
              title={item.title}
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
