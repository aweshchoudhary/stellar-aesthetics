import React, { useEffect } from "react";
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
  const { data, loading } = useFetch("/courses?populate=*");

  useEffect(() => {
    setLoading(loading);
    let isCancel = false;
    const filterCourse = async () => {
      const course = await data?.filter((item) => {
        return item.attributes.slug === name;
      });
      course && setCoursePage(...course);
    };

    !isCancel && filterCourse();
    return () => {
      isCancel = true;
    };
  }, [data, name, setCoursePage, setLoading, loading]);

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
