import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Coursecard from "../../components/CourseCard/Coursecard";
import { Link } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";

function AllCourses() {
  const {courses}=useContext(CourseContext)
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="min-h-[50vh] px-16 my-20">
        <div className="w-full flex-wrap flex justify-center gap-14">
          {courses.map((data, index) => (
            <Link to={`/courses/${data.id}`} key={index}>
              <Coursecard data={data} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllCourses;
