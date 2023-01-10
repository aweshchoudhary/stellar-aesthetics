import { Helmet } from "react-helmet";
import Bar from "../../Components/Loader/Bar";
import { Heading, Section } from "../../Components/Main";
import TestimonailCard from "../../Components/Testimonials/TestimonailCard";
import useFetch from "../../Hooks/useFetch";

const Testimonials = () => {
  const { data, loading } = useFetch("/testimonials?populate=*");
  return (
    <>
      <Helmet>
        <title>Testimonials</title>
      </Helmet>
      <Section>
        <Heading
          text1={"They Loved It."}
          brNone={true}
          text2={"So Will You."}
        />
        <h3 className="md:text-4xl font-medium text-3xl md:mt-5 mt-3">
          Testimonials
        </h3>

        <div className="my-10 flex flex-col gap-5">
          {!loading && data ? (
            data.map((item, index) => {
              return <TestimonailCard data={item} />;
            })
          ) : (
            <Bar />
          )}
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
