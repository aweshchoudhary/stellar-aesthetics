import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useData from "../Hooks/useContext";
import useFetch from "../Hooks/useFetch";
import Bar from "../Components/Loader/Bar";
import { Helmet } from "react-helmet";

// Course Page Components Import
import AboutCourse from "../Components/CoursePage/AboutCourse";
import ContactCard from "../Components/CoursePage/ContactCard";
import CourseDirector from "../Components/CoursePage/CourseDirector";
import CourseGlimpses from "../Components/CoursePage/CourseGlimpses";
import CourseHero from "../Components/CoursePage/CourseHero";
import CourseRoadMap from "../Components/CoursePage/CourseRoadMap";
import Testimonials from "../Components/Testimonials/Testimonials";

const CoursePage = () => {
  const { name } = useParams();
  const { setCoursePage, coursePage } = useData();
  const { data, loading } = useFetch(
    `/courses?filters[slug][$eq]=${name}&populate=*`
  );
  useEffect(() => {
    const changePrimaryColor = () => {
      coursePage?.attributes?.primaryColor &&
        document.documentElement.style.setProperty(
          "--primary",
          coursePage.attributes.primaryColor
        );
    };
    return () => {
      changePrimaryColor();
    };
  }, [coursePage]);

  useEffect(() => {
    const setData = () => {
      data && setCoursePage(...data);
    };
    return () => {
      setData();
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
        </>
      ) : (
        <Bar />
      )}
    </>
  );
};

export default CoursePage;
