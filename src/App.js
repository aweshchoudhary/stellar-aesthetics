import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import ScrollToTop from "./Components/Main/ScrollToTop";

// Pages Import
const Home = lazy(() => import("./Pages/MainPage/Home"));
const About = lazy(() => import("./Pages/MainPage/About"));
const Courses = lazy(() => import("./Pages/MainPage/Courses"));
const Procedure = lazy(() => import("./Pages/MainPage/Procedure"));
const Procedures = lazy(() => import("./Pages/MainPage/Procedures"));
const Doctors = lazy(() => import("./Pages/MainPage/Doctors"));
const Contact = lazy(() => import("./Pages/MainPage/Contact"));
const CoursePage = lazy(() => import("./Pages/MainPage/CoursePage"));
const WhyChooseUs = lazy(() => import("./Pages/MainPage/WhyChooseUs"));
const CourseDirector = lazy(() => import("./Pages/MainPage/CourseDirector"));
const Testimonials = lazy(() => import("./Pages/MainPage/Testimonials"));

// Layout Import
const Layout = lazy(() => import("./Pages/Layout"));
const NoPage = lazy(() => import("./Pages/NoPage"));

function App() {
  return (
    // Routes Config
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Main Page Url */}
        <Route path="/" element={<Layout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* Public Pages */}
          <Route path="about-us" element={<About />} />
          <Route path="about-us/:scrollelement" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:name" element={<CoursePage />} />
          <Route path="procedures" element={<Procedures />} />
          <Route path="procedures/:name" element={<Procedure />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="dr-sapnna-vaderra" element={<CourseDirector />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="contact" element={<Contact />} />

          {/* No Page */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
