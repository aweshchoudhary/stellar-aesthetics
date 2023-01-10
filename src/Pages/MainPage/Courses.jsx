import { Content } from "./WhyChooseUs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components Import
import { Section } from "../../Components/Main";

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
        <h2 className="text-5xl">
          <strong>
            Get <span className="text-primary">Internationally Certified</span>
          </strong>
        </h2>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div></div>
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
      <div className="text-white text-center md:w-1/2">
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

const CourseCard = ({ w, img, link }) => {
  return (
    <div className={"relative p-2 " + w}>
      <Link className="w-full h-full" to={link}>
        <img src={img} alt="" className=" object-contain w-full" />
      </Link>
    </div>
  );
};

export default Courses;
