import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./Coursecard.module.css";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

function Coursecard({ data }) {
  const colors = [
    {
      bgColor: "#FDF2FA",
      textColor: "#C11574",
    },
    {
      bgColor: "#F0F9FF",
      textColor: "#026AA2",
    },
    {
      bgColor: "#FFF9F3",
      textColor: "#FF9B26",
    },
    {
      bgColor: "#EEF4FF",
      textColor: "#3538CD",
    },
    {
      bgColor: "#F3F4FF",
      textColor: "#6366F1",
    },
    {
      bgColor: "#F2FAF4",
      textColor: "#047857",
    },
    {
      bgColor: "#FFF4F0",
      textColor: "#D97706",
    },
    {
      bgColor: "#F9F5FF",
      textColor: "#7C3AED",
    },
    {
      bgColor: "#F0F5F9",
      textColor: "#0E7490",
    },
    {
      bgColor: "#FFF7ED",
      textColor: "#DC2626",
    },
    {
      bgColor: "#F1FDF5",
      textColor: "#16A34A",
    },
    {
      bgColor: "#FEF9FF",
      textColor: "#A21CAF",
    },
    {
      bgColor: "#F9FAFB",
      textColor: "#111827",
    },
    {
      bgColor: "#ECFDF5",
      textColor: "#065F46",
    },
    {
      bgColor: "#FEF3C7",
      textColor: "#B45309",
    },
    {
      bgColor: "#FFF0F0",
      textColor: "#E11D48",
    },
  ];


  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="w-[340px] sm:w-[450px] sm:h-[670px] h-[550px] shadow-lg rounded-xl flex-shrink-0 overflow-hidden sm:ml-0">
      <div className="w-full sm:h-[45%] h-[40%]">
        <img src={data.image} alt="" className="w-full h-full rounded-[20px]" />
      </div>
      <div className="w-full h-[55%] sm:px-6 py-3 px-3">
        <div className="flex items-center justify-between">
          <h6
            className={`${styles.subHeading} sm:text-[18px] text-[14px] font-semibold`}
          >
            {data.category}
          </h6>
        </div>
        <div className="flex items-center justify-between mt-3">
          <h3 className="text-[20px] sm:text-[28px] font-medium w-2/3 leading-[26px] sm:leading-[32px]">
            {data.courseName}
          </h3>
          <HiOutlineArrowSmallUp size={30} className="rotate-45" />
        </div>
        <p className="sm:text-[16px] text-[14px] text-[#667085] sm:mt-3 mt-2">
          {data.courseInfo}
        </p>
        <div className="flex flex-col justify-between sm:h-[170px] h-[145px]">
          <div className="flex justify-start gap-3 mt-3 flex-wrap">
            {data.skills.map((skill, index) => {
              const { bgColor, textColor } = getRandomColor();
              return (
                <div
                  key={index}
                  className="sm:px-4 px-2 py-1 sm:text-[16px] text-[14px] font-medium rounded-[8px]"
                  style={{ backgroundColor: bgColor, color: textColor }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
          <div className="px-10 py-2 bg-[#0A0A0A] text-white w-fit rounded-full text-[18px] mx-auto">
            Let's Start
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursecard;
