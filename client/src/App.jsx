import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "./pages/AllCourses/AllCourses";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails/CourseDetails";

function App() { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Routes>
  );
}

export default App;
