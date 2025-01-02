import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CourseContext } from "../../context/CourseContext";
import CourseContentAccordion from "./CourseContentAccordion";

function CourseDetail() {
  const { id } = useParams();
  const { courses } = useContext(CourseContext);

  // Local state for the fetched course
  const [fetchedCourse, setFetchedCourse] = useState(null);

  // Store and retrieve the specific course in localStorage
  useEffect(() => {
    if (courses && courses.length > 0) {
      const course = courses.find((c) => String(c.id) === id);
      if (course) {
        localStorage.setItem(`course_${id}`, JSON.stringify(course));
        setFetchedCourse(course);
      }
    }
  }, [courses, id]);

  let storedCourse = localStorage.getItem(`course_${id}`);
  storedCourse = JSON.parse(storedCourse);
  if (storedCourse) {
    console.log(storedCourse);
  }

  const courseContent = [
    {
      title: "Introduction to UI Design",
      subtopics: [
        "What is UI Design?",
        "UI Design Principles",
        "Tools for UI Design",
        "Creating Wireframes",
      ],
    },
    {
      title: "UX Research and Strategy",
      subtopics: [
        "User Research Techniques",
        "Personas and Empathy Maps",
        "Journey Mapping",
        "User Testing",
      ],
    },
    {
      title: "Web Development Basics",
      subtopics: [
        "HTML and CSS Fundamentals",
        "Responsive Web Design",
        "Flexbox and Grid",
        "Intro to JavaScript",
      ],
    },
    {
      title: "Backend Development with Node.js",
      subtopics: [
        "Setting up a Node.js Server",
        "Express.js Framework",
        "Working with Databases",
        "RESTful APIs",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Header />

      {storedCourse && (
        <div className="my-24 w-full h-[60vh] flex justify-between px-16">
          <div className="w-[45%] h-full">
            <h1 className="text-6xl font-medium">{storedCourse.courseName}</h1>
            <div className="flex gap-5 mt-7 flex-wrap">
              {storedCourse &&
                storedCourse.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-zinc-200 px-5 py-1 rounded-md flex items-center gap-3 flex-shrink-0"
                  >
                    <h6 className="text-lg font-medium">{skill}</h6>
                    <img
                      src="/images/coding-img.png"
                      alt=""
                      className="w-5 h-5"
                    />
                  </div>
                ))}
            </div>
            <div className="mt-10">
              <h4 className="font-bold text-4xl">
                Only <span className="text-[#096CD5]">₹4999</span>
              </h4>
            </div>
            <button
              className="px-8 py-4 bg-[#096CD5] mt-10 w-fit text-xl rounded-lg font-semibold text-white"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1BQVUuBA_XubASDjM-L0M4-7m_VSjEJHGAsjC3XhhwMk/edit",
                  "_blank"
                )
              }
            >
              Buy Now - Start Learning
            </button>

            <p className="mt-8 text-lg">{storedCourse.courseInfo}</p>
          </div>
          <div className="w-[45%] h-full">
            <img src={storedCourse.image} alt="" className="w-full h-full" />
          </div>
        </div>
      )}

      <div className="w-full px-16 py-8">
        <h2 className="text-[13vw] font-bold tracking-tight leading-none orbitron-family">
          Dominate.
        </h2>
        <h5 className="text-8xl text-center ml-32 font-medium text-[#4F4F4F] leading-none poppins-family">
          From Start to Victory
        </h5>
      </div>

      <div className="my-8 w-full bg-[#100A12] py-10 px-40">
        {storedCourse?.courseContent?.map((courseContent, index) => (
          <>
            <CourseContentAccordion key={index} courseContent={courseContent} />
          </>
        ))}
      </div>
      <div className="px-40 my-8 poppins-family">
        <h3 className="text-black text-6xl font-bold">Assessment</h3>
        <h5 className="text-2xl font-semibold mt-5 text-[#096CD5]">
          Lab Assignments:
        </h5>
        <p className="mt-1 pl-3">Regular hands-on exercises and challenges.</p>
        <h5 className="text-2xl font-semibold mt-5 text-[#096CD5]">
          Vulnerability Assessments:
        </h5>
        <p className="mt-1 pl-3">
          Practical assessments on real-world or simulated web applications.
        </p>
        <h5 className="text-2xl font-semibold mt-5 text-[#096CD5]">
          Final Project:
        </h5>
        <p className="mt-1 pl-3">
          A comprehensive penetration testing engagement on a chosen target.
        </p>
        <h5 className="text-2xl font-semibold mt-5 text-[#096CD5]">
          Report Reviews:
        </h5>
        <p className="mt-1 pl-3">
          Evaluation of written reports based on clarity, completeness, and
          accuracy.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default CourseDetail;
