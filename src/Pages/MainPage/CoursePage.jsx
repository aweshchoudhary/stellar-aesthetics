import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useData from "../../Hooks/useContext";
import useFetch from "../../Hooks/useFetch";
import Bar from "../../Components/Loader/Bar";
import { Helmet } from "react-helmet";

// Course Page Components Import
import AboutCourse from "../../Components/CoursePage/AboutCourse";
import ContactCard from "../../Components/CoursePage/ContactCard";
import CourseDirector from "../../Components/CoursePage/CourseDirector";
import CourseGlimpses from "../../Components/CoursePage/CourseGlimpses";
import CourseHero from "../../Components/CoursePage/CourseHero";
import CourseRoadMap from "../../Components/CoursePage/CourseRoadMap";
import Testimonials from "../../Components/Testimonials/Testimonials";
import FAQ from "../../Components/CoursePage/FAQ";

const CoursePage = () => {
  const { name } = useParams();
  const { setCoursePage, coursePage } = useData();
  const { data, loading } = useFetch(
    `/courses?filters[slug][$eq]=${name}&populate=*`
  );

  // UseEffect Clean Up
  const isMounted = useRef(false);

  // Function To Change The Primary Colors
  useEffect(() => {
    const changePrimaryColor = () => {
      coursePage?.attributes?.primaryColor &&
        document.documentElement.style.setProperty(
          "--primary",
          coursePage.attributes.primaryColor
        );
    };
    isMounted && changePrimaryColor();
    return () => {
      isMounted.current = true;
    };
  }, [coursePage]);

  // Function To Set Filtered Data In State
  useEffect(() => {
    const setData = () => {
      data && setCoursePage(...data);
    };
    isMounted && setData();
    isMounted && console.log("hello from coursePage components");
    return () => {
      isMounted.current = true;
    };
  }, [data, setCoursePage]);

  return (
    <>
      {coursePage?.attributes && !loading ? (
        <>
          <Helmet>
            <title>{` ${
              coursePage.attributes.type === "fellowships"
                ? "FELLOWSHIP IN "
                : "CERTIFICATION IN "
            } ${coursePage.attributes.title.toUpperCase()} `}</title>
          </Helmet>
          <CourseHero />
          <CourseDirector />
          <ContactCard />
          <AboutCourse />
          <ContactCard />
          <CourseRoadMap />
          <ContactCard />
          <CourseGlimpses />
          <ContactCard />
          <Testimonials />
          <ContactCard />
          <FAQ />
        </>
      ) : (
        <Bar />
      )}
    </>
  );
};

export default CoursePage;
