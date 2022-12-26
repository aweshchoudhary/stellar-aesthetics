import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Pages Import
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Courses = lazy(() => import("./Pages/Courses"));
const Procedure = lazy(() => import("./Pages/Procedure"));
const Procedures = lazy(() => import("./Pages/Procedures"));
const Doctors = lazy(() => import("./Pages/Doctors"));
const Contact = lazy(() => import("./Pages/Contact"));
const Search = lazy(() => import("./Pages/Search"));
const Layout = lazy(() => import("./Pages/Layout"));
const CoursePage = lazy(() => import("./Pages/CoursePage"));
const WhyChooseUs = lazy(() => import("./Pages/WhyChooseUs"));
const CourseDirector = lazy(() => import("./Pages/CourseDirector"));

function App() {
  return (
    // Routes Config
    <Router>
      <Routes>
        {/* Public Main Page Url */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="dr-sapnna-vaderra" element={<CourseDirector />} />
          <Route path="courses/:name" element={<CoursePage />} />
          <Route path="procedures/:name" element={<Procedure />} />
          <Route path="procedures" element={<Procedures />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
