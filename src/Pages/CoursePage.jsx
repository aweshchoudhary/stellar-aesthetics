import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutCourse from "../Components/CoursePage/AboutCourse";
import ContactCard from "../Components/CoursePage/ContactCard";
import CourseDirector from "../Components/CoursePage/CourseDirector";
import CourseGlimpses from "../Components/CoursePage/CourseGlimpses";
import CourseHero from "../Components/CoursePage/CourseHero";
import CourseRoadMap from "../Components/CoursePage/CourseRoadMap";
import Testimonials from "../Components/Testimonials/Testimonials";
import api from "../Api/api";
import useData from "../Hooks/useContext";

const CoursePage = () => {
  // const [course, setCourse] = useState({});
  const { name } = useParams();
  const { setLoading, setCoursePage, coursePage } = useData();

  useEffect(() => {
    const getCoursePage = async () => {
      setLoading((prevState) => ({
        isAnimating: !prevState.isAnimating,
        key: prevState.isAnimating ? prevState.key : prevState.key ^ 1,
      }));
      try {
        // Get All Courses
        const { data } = await api.get("/courses?populate=*");
        // Filter One Course
        await data.data.map((course) => {
          if (course.attributes.slug === name) {
            setCoursePage(course);
          }
          return null;
        });
      } catch (error) {
        console.log(error);
      }
      // console.log("Finished");
      setLoading((prevState) => ({
        isAnimating: !prevState.isAnimating,
        key: 1000,
      }));
    };
    getCoursePage();
  }, [name]);

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
      {coursePage.attributes && (
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
      )}
    </>
  );
};

export default CoursePage;
