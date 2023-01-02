import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Heading from "../Components/Main/Heading";
import Section from "../Components/Main/Section";
import LinkBtn from "../Components/Main/LinkBtn";
import useFetch from "../Hooks/useFetch";
import parser from "html-react-parser";
import Bar from "../Components/Loader/Bar";
import Slider from "react-slick";
import Img from "../Components/Main/Img";
import { BASE_URL } from "../config";
import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet";
import PageTitle from "../Components/Main/PageTitle";

const Procedure = () => {
  const [procedure, setProcedure] = useState({});
  const { name } = useParams();
  const { data, loading } = useFetch(
    `/procedures?filters[type][$eq]=${name}&populate=*`
  );
  const sliders = useFetch(
    `/procedure-sliders?filters[type][$eq]=${procedure?.attributes?.type}&populate=*`
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function slide(dir) {
    if (dir === "prev") {
      document.querySelector(".slick-prev").click();
    } else {
      document.querySelector(".slick-next").click();
    }
  }

  useEffect(() => {
    data && setProcedure(...data);
  }, [data, loading]);

  return procedure?.attributes && !procedure.loading ? (
    <>
      <PageTitle>
        {procedure.attributes.title.toUpperCase() + " Procedure"}
      </PageTitle>
      <section className="hero-slider relative">
        {sliders?.data?.length > 1 && (
          <>
            <button
              onClick={() => slide("prev")}
              className="absolute z-20 text-5xl left-3 text-white top-1/2 -translate-y-1/2"
            >
              <Icon icon="material-symbols:arrow-back-ios" />
            </button>
            <button
              onClick={slide}
              className="absolute z-20 text-5xl right-3 text-white top-1/2 -translate-y-1/2"
            >
              <Icon icon="material-symbols:arrow-forward-ios" />
            </button>
          </>
        )}
        <Slider {...settings}>
          {sliders.data &&
            sliders.data.map((item) => {
              return (
                <div>
                  <div className="w-full h-[500px] relative flex items-center justify-center">
                    <div className="content text-white text-center md:px-10">
                      <h2 className="md:text-6xl sm:text-5xl text-3xl font-semibold mb-3">
                        {item.attributes.title}
                      </h2>
                      <p className="text-lg">
                        {parser(item.attributes.description)}
                      </p>
                      <div>
                        <div className="flex gap-5 justify-center mt-4">
                          <a
                            href={`https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*${document.title}*`}
                            className="btn filled white text-primary"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon
                              className="text-2xl"
                              icon="ic:baseline-whatsapp"
                            />
                            Get Brochure
                          </a>
                          <a
                            href={"tel:+91-799-950-6817"}
                            className="btn outlined white text-h-primary"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon
                              className="text-2xl"
                              icon="ic:baseline-phone"
                            />
                            Book Call
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="background absolute bg-primary inset-0 w-full h-full -z-10">
                      <Img
                        src={BASE_URL + item.attributes.img.data.attributes.url}
                        className="w-full h-full opacity-50"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </section>
      <Section>
        <Heading
          text1={procedure?.attributes?.title}
          text2="Procedures"
          brNone={true}
        />
        <div className="mt-5">{parser(procedure?.attributes?.description)}</div>
      </Section>
    </>
  ) : (
    <Bar />
  );
};

export default Procedure;
