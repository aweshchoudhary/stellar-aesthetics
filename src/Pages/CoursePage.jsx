import React from "react";
import AboutCourse from "../Components/CoursePage/AboutCourse";
import ContactCard from "../Components/CoursePage/ContactCard";
import CourseDirector from "../Components/CoursePage/CourseDirector";
import CourseGlimpses from "../Components/CoursePage/CourseGlimpses";
import CourseHero from "../Components/CoursePage/CourseHero";
import CourseRoadMap from "../Components/CoursePage/CourseRoadMap";
import Testimonials from "../Components/Testimonials/Testimonials";

const CoursePage = () => {
  return (
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
  );
};

export default CoursePage;
