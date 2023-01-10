import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import ScrollToTop from "./Components/Main/ScrollToTop";

// Pages Import
// const Home = lazy(() => import("./Pages/MainPage/Home"));
const About = lazy(() => import("./Pages/MainPage/About"));
// const Courses = lazy(() => import("./Pages/MainPage/Courses"));
// const Procedure = lazy(() => import("./Pages/MainPage/Procedure"));
// const Procedures = lazy(() => import("./Pages/MainPage/Procedures"));
// const Doctors = lazy(() => import("./Pages/MainPage/Doctors"));
// const Contact = lazy(() => import("./Pages/MainPage/Contact"));
// const CoursePage = lazy(() => import("./Pages/MainPage/CoursePage"));
// const WhyChooseUs = lazy(() => import("./Pages/MainPage/WhyChooseUs"));
// const CourseDirector = lazy(() => import("./Pages/MainPage/CourseDirector"));

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
          {/* <Route index element={<Home />} /> */}
          <Route path="about" element={<About />} />
          {/* <Route path="courses" element={<Courses />} /> */}
          {/* <Route path="why-choose-us" element={<WhyChooseUs />} /> */}
          {/* <Route path="dr-sapnna-vaderra" element={<CourseDirector />} /> */}
          {/* <Route path="courses/:name" element={<CoursePage />} /> */}
          {/* <Route path="procedures/:name" element={<Procedure />} /> */}
          {/* <Route path="procedures" element={<Procedures />} /> */}
          {/* <Route path="doctors" element={<Doctors />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}

          {/* No Page */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
