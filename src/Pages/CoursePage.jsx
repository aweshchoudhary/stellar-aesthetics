import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useData from "../Hooks/useContext";
import useFetch from "../Hooks/useFetch";

import AboutCourse from "../Components/CoursePage/AboutCourse";
import ContactCard from "../Components/CoursePage/ContactCard";
import CourseDirector from "../Components/CoursePage/CourseDirector";
import CourseGlimpses from "../Components/CoursePage/CourseGlimpses";
import CourseHero from "../Components/CoursePage/CourseHero";
import CourseRoadMap from "../Components/CoursePage/CourseRoadMap";
import Testimonials from "../Components/Testimonials/Testimonials";
import Bar from "../Components/Loader/Bar";

const CoursePage = () => {
  const { name } = useParams();
  const { setCoursePage, coursePage, setLoading } = useData();
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
    changePrimaryColor();
  }, [coursePage]);
  useEffect(() => {
    const setData = () => {
      data && setCoursePage(...data);
    };
    setData();
  }, [data, setCoursePage]);

  return (
    <>
      {coursePage?.attributes && !loading ? (
        <>
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
