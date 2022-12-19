import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages Import
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Procedures from "./Pages/Procedures";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Layout from "./Pages/Layout";
import CoursePage from "./Pages/CoursePage";

function App() {
  return (
    // Routes Config
    <Router>
      <Routes>
        {/* Public Main Page Url */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:name" element={<CoursePage />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
