import React from "react";
import ContactCard from "../Components/CoursePage/ContactCard";
import CourseDirector from "../Components/CoursePage/CourseDirector";
import CourseHero from "../Components/CoursePage/CourseHero";

const CoursePage = () => {
  return (
    <>
      <CourseHero />
      <CourseDirector />
      <ContactCard />
    </>
  );
};

export default CoursePage;
