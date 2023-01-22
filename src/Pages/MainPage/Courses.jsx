import { Content } from "./WhyChooseUs";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components Import
import { Img, Section } from "../../Components/Main";
import { Link } from "react-router-dom";

const Courses = () => {
  useEffect(() => {
    var el =
      window.location.hash && document.querySelector(window.location.hash);
    el && el.scrollIntoView(true);
  });

  return (
    <>
      <Helmet>
        <title>International Courses</title>
      </Helmet>
      <CourseHero />
      <div id="getcertified"></div>
      <Section>
        <h2 className="md:text-5xl text-2xl text-center uppercase">
          <strong>
            Get <span className="text-primary">Internationally Certified</span>
          </strong>
        </h2>
        <p className="text-center md:text-2xl text-xl md:mt-5 mt-3">
          Click To Know More
        </p>
        <div className="md:flex md:mt-10">
          <div className="md:w-[40%] md:pr-6 mt-5">
            <h3 className="md:text-4xl text-3xl font-semibold pb-5 mb-5 border-b-2 text-center">
              Fellowships
            </h3>
            <div className="flex md:gap-3 gap-5 md:flex-row flex-col">
              <Link
                className={"shrink-0 md:w-1/2 hover:scale-105 transition"}
                to={"/courses/certification-in-clinical-cosmetology"}
              >
                <Img
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-113-1.jpg"
                  alt=""
                />
              </Link>
              <Link
                className={"shrink-0 md:w-1/2 hover:scale-105 transition"}
                to={"/courses/certification-in-tricology"}
              >
                <Img
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/35.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="md:w-[60%] md:pl-8 mt-5">
            <h3 className="md:text-4xl text-3xl font-semibold pb-5 mb-5 border-b-2 text-center">
              Certifications
            </h3>
            <div className="flex md:gap-3 gap-5 md:flex-row flex-col">
              <Link
                className={"shrink-0 md:w-1/3 hover:scale-105 transition"}
                to={"/courses/certification-in-facial-cosmetics"}
              >
                <Img
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-110.jpg.webp"
                  alt=""
                />
              </Link>
              <Link
                className={"shrink-0 md:w-1/3 hover:scale-105 transition"}
                to={"/courses/certification-in-hair-restoration"}
              >
                <Img
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-116.png.webp"
                  alt=""
                />
              </Link>
              <Link
                className={"shrink-0 md:w-1/3 hover:scale-105 transition"}
                to={
                  "/courses/certification-in-micro-pigmentation-micro-blading"
                }
              >
                <Img
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-114-1.png.webp"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <section id="whyus">
        <Content />
      </section>
    </>
  );
};

const CourseHero = () => {
  return (
    <section
      className={
        "md:h-[500px] relative h-[400px] w-full flex items-center justify-center"
      }
    >
      <div className="w-full h-full absolute inset-0 -z-10 bg-black">
        <figure className="w-full h-full">
          <video
            src="https://stellaraesthetics.in/wp-content/uploads/2021/12/stellar-courses-1mbps.webm"
            className="w-full h-full object-cover opacity-60"
            autoPlay
            loop
            muted
          ></video>
          <figcaption></figcaption>
        </figure>
      </div>
      <div className="text-white text-center md:md:w-1/2">
        <h2 className="lg:text-5xl text-3xl font-bold text-white">
          Join Our Internationally Certified Courses
        </h2>
        <p className="md:text-lg">
          The career of your dreams is one click away.
        </p>
        <div className="btns flex items-center gap-5 justify-center my-5">
          <a href="#getcertified" className="btn filled white text-primary">
            Get Certified
          </a>
          <a href="#whyus" className="btn outlined white text-h-primary">
            why Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
