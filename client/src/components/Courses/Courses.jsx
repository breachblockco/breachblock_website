import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import Coursecard from '../CourseCard/Coursecard';

function Courses() {
  const courseData = [
    {
      image: "/images/c1.png",
      category: "Design",
      rating: 3,
      courseName: "Figma UI/UX Design",
      courseInfo:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      skills: ["Research", "UI UX", "Programming", "DSA"],
    },
    {
      image: "/images/c2.png",
      category: "Web Development",
      rating: 4.5,
      courseName: "Build User Interface",
      courseInfo:
        "Learn how to apply User Experience (UX) principles to your website designs.",
      skills: ["Research", "UI UX"],
    },
    {
      image: "/images/c3.png",
      category: "Backend Development",
      rating: 5,
      courseName: "Backend Domination",
      courseInfo:
        "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      skills: ["Web Development", "Logic Building"],
    },
  ];
  return (
    <div className="pb-28">
      <SectionHeading
        heading={"Courses"}
        subheading={"Explore Programmes"}
        content={
          "Explore our diverse collection of expert courses across various fields and industries. Whether you're upskilling or starting fresh, we have the perfect course for you."
        }
        rowReverse={true}
      />
      <div className="flex justify-evenly">
        {courseData.map((data, index) => (
          <Coursecard data={data} />
        ))}
      </div>
      <div className="flex mt-10 justify-center">
        <div className="px-8 py-2.5 bg-[#0A0A0A] text-white text-[20px] rounded-full">Explore All Courses</div>
      </div>
    </div>
  );
}

export default Courses