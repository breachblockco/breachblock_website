import React, { useEffect, useState } from "react";
import styles from "./SectionHeading.module.css";

function SectionHeading({ heading, subheading, content, rowReverse }) {
  const [isTrue,setIsTrue]=useState(false)

  useEffect(() => {
    if (heading === "Courses") {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }, [heading]);
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between w-full ${
        rowReverse ? "sm:flex-row-reverse" : ""
      } ${heading === "Courses" ? "px-4 sm:px-24 lg:px-16" : ""}`}
    >
      {/* Left Section */}
      <div className="section-left w-full sm:w-1/3 mb-2 sm:mb-0">
        <div className="flex gap-4 items-center">
          <h6
            className={`uppercase font-bold ${styles.subHeading} text-[14px]`}
          >
            {subheading}
          </h6>
          <div className="flex items-center">
            <div className="h-1.5 w-1.5 bg-zinc-900 rounded-full"></div>
            <div className="h-[1.5px] w-[70px] bg-zinc-900"></div>
            <div className="h-1.5 w-1.5 bg-zinc-900 rounded-full"></div>
          </div>
        </div>
        <div className="mt-2">
          <p className="poppins-family text-[12px] sm:text-[16px] font-medium">
            {content}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="section-right w-full sm:w-2/3">
        <h2
          className={`text-[36px] sm:text-[100px] uppercase font-bold ${
            styles.subHeading
          } ${
            rowReverse ? "sm:text-left" : "sm:text-right"
          } orbitron-family text-center`}
        >
          {heading}
        </h2>
      </div>
    </div>
  );
}

export default SectionHeading;
