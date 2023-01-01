import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../Components/Main/Heading";
import Section from "../Components/Main/Section";
import LinkBtn from "../Components/Main/LinkBtn";
import useFetch from "../Hooks/useFetch";
import parser from "html-react-parser";
import Bar from "../Components/Loader/Bar";
import Slider from "react-slick";
import Img from "../Components/Main/Img";
import { BASE_URL } from "../config";

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
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    // autoplay: true,
  };

  useEffect(() => {
    data && setProcedure(...data);
  }, [data, loading]);

  return procedure?.attributes && !procedure.loading ? (
    <>
      <section className="hero-slider">
        <Slider {...settings} className="w-full">
          {sliders.data &&
            sliders.data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="relative w-full md:min-h-[500px] flex items-center justify-center"
                >
                  <div className="bg h-full w-full absolute inset-0 -z-10 bg-primary">
                    <Img
                      className={"w-full h-full"}
                      imgClass={"opacity-50 w-full h-full object-cover"}
                      src={BASE_URL + item.attributes.img.data.attributes.url}
                    />
                  </div>
                  <div className="lg:px-10 px-4 py-14 md:min-h-[500px]">
                    <div className="content text-center  text-white">
                      <h2 className="md:text-7xl sm:text-5xl text-3xl font-semibold mb-3">
                        Be YOUR BEST Version
                      </h2>
                      <p className="text-lg">
                        With Stellar Aesthetics’ Facial Cosmetic Procedures you
                        can bring out your true beauty, for the world to see.
                      </p>
                      <div>
                        <div className="flex gap-5 justify-center mt-4">
                          <LinkBtn
                            varaint={"filled"}
                            white={true}
                            label={"Book Call"}
                          />
                          <LinkBtn
                            varaint={"outlined"}
                            white={true}
                            label={"Whatsapp Us"}
                          />
                        </div>
                      </div>
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
