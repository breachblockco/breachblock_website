import React, { useContext } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import Coursecard from '../CourseCard/Coursecard';
import styles from './Courses.module.css'
import { Link } from 'react-router-dom';
import { CourseContext } from '../../context/CourseContext';

function Courses() {
  const {courses}=useContext(CourseContext);
  console.log(courses)

  return (
    <div className="sm:pb-28 pb-10" id="courses">
      <SectionHeading
        heading={"Courses"}
        subheading={"Explore Programmes"}
        content={
          "Explore our diverse collection of expert courses across various fields and industries. Whether you're upskilling or starting fresh, we have the perfect course for you."
        }
        rowReverse={true}
      />
      <div
        className={`flex justify-start w-full sm:justify-center sm:gap-8 overflow-x-auto sm:overflow-none py-4 ${styles.coursesContainer} px-4 gap-4`}
      >
        {courses.slice(0, 3).map((data, index) => (
          <Link to={`/courses/${data.id}`} key={index}>
            <Coursecard data={data} />
          </Link> 
        ))}
      </div>
      <div className="flex mt-10 justify-center">
        <Link
          to={"/courses"}
          className="px-8 py-2.5 bg-[#0A0A0A] text-white text-[20px] rounded-full"
        >
          Explore All Courses
        </Link>
      </div>
    </div>
  );
}

export default Courses