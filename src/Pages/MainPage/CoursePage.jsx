import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useData from "../../Hooks/useContext";
import Bar from "../../Components/Loader/Bar";
import { Helmet } from "react-helmet";
import courses from "../../data/courses.json";

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
  const loading = useRef(false);

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

  useEffect(() => {
    loading.current = true;
    const course = courses.filter((item) => {
      return item.attributes.slug === name;
    });
    if (course) {
      setCoursePage(...course);
    }
    loading.current = false;
  }, [name, setCoursePage]);

  return (
    <>
      {coursePage?.attributes && !loading.current ? (
        <>
          <Helmet>
            <title>{` ${
              coursePage.attributes.type === "fellowships"
                ? "FELLOWSHIP IN "
                : "CERTIFICATION IN "
            } ${coursePage.attributes.title.toUpperCase()} `}</title>
            {coursePage.meta &&
              coursePage.meta.map((item) => {
                console.log(item);
                return <meta {...item} />;
              })}
          </Helmet>
          <CourseHero />
          <CourseDirector />
          <ContactCard />
          <AboutCourse />
          <ContactCard />
          <CourseRoadMap />
          <ContactCard />
          <CourseGlimpses items={coursePage.attributes.glimpse} />
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
