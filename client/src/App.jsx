import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "./pages/AllCourses/AllCourses";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

function App() { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/services/:serviceid" element={<ServiceDetails />} />
    </Routes>
  );
}

export default App;
