import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Coursecard from "../../components/CourseCard/Coursecard";
import { Link } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";
import styles from "./AllCourses.module.css";


function AllCourses() {
  const { courses } = useContext(CourseContext);
  return (
    <div className="w-full h-screen px-6 sm:px-0">
      <Header />
      <div className="min-h-[50vh] sm:my-14 my-5">
        <h2
          className={`text-[36px] sm:text-[100px] uppercase font-bold ${styles.subHeading} orbitron-family text-center mb-5`}
        >
          All Courses
        </h2>
        <div className="w-full flex-wrap flex justify-center gap-8">
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
