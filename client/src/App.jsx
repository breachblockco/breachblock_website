import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AllCourses from "./pages/AllCourses/AllCourses";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import AllServices from "./pages/AllServices/AllServices";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/services/:serviceid" element={<ServiceDetails />} />

        {/* Catch-All Route for 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
