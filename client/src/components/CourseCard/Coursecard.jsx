// import React from "react";
// import Rating from "@mui/material/Rating";
// import styles from "./Coursecard.module.css";
// import { HiOutlineArrowSmallUp } from "react-icons/hi2";

// function Coursecard({ data }) {
//   const colors = [
//     {
//       pink: {
//         bgColor: "#FDF2FA",
//         textColor: "#C11574",
//       },
//     },
//     {
//       blue: {
//         bgColor: "#F0F9FF",
//         textColor: "#026AA2",
//       },
//     },
//     {
//       yellow: {
//         bgColor: "#FFF9F3",
//         textColor: "#FF9B26",
//       },
//     },
//     {
//       purple: {
//         bgColor: "#EEF4FF",
//         textColor: "#3538CD",
//       },
//     },
//   ];

//   console.log(colors);

//   return (
//     <div className="w-[400px] h-[630px] shadow-xl rounded-xl">
//       <div className="w-full h-[45%]">
//         <img src={data.image} alt="" className="w-full h-full" />
//       </div>
//       <div className="w-full h-[55%] px-6 py-3">
//         <div className="flex items-center justify-between">
//           <h6 className={`${styles.subHeading} text-[18px] font-semibold`}>
//             {data.category}
//           </h6>
//           <div className="flex gap-1 items-center">
//             <p className="text-[#0A6ED9] text-[14px] font-medium">
//               {data.rating}.
//             </p>
//             <Rating
//               name="half-rating"
//               defaultValue={`${data.rating}`}
//               precision={0.5}
//               size="small"
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-between mt-3">
//           <h3 className="text-[24px] font-medium">{data.courseName}</h3>
//           <HiOutlineArrowSmallUp size={30} className="rotate-45" />
//         </div>
//         <p className="text-[16px] text-[#667085] mt-3">{data.courseInfo}</p>
//         <div className="flex flex-col justify-between h-[170px]">
//           <div className="flex justify-start gap-3 mt-3 flex-wrap">
//             {data.skills.map((skill, index) => (
//               <div className="bg-[#FDF2FA] px-4 py-1 text-[#C11574] text-[16px] font-medium rounded-[8px]">
//                 {skill}
//               </div>
//             ))}
//           </div>
//           <div className="px-10 py-2 bg-[#0A0A0A] text-white w-fit rounded-full text-[18px] mx-auto">
//             Let's Start
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Coursecard;


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
    <div className="sm:w-[400px] sm:h-[630px] h-[550px] max-w-[90%] shadow-xl rounded-xl flex-shrink-0 overflow-hidden ml-5 sm:ml-0">
      <div className="w-full sm:h-[45%] h-[40%]">
        <img src={data.image} alt="" className="w-full h-full" />
      </div>
      <div className="w-full h-[55%] sm:px-6 py-3 px-3">
        <div className="flex items-center justify-between">
          <h6 className={`${styles.subHeading} sm:text-[18px] text-[12px] font-semibold`}>
            {data.category}
          </h6>
          <div className="flex gap-1 items-center">
            <p className="text-[#0A6ED9] text-[14px] font-medium">
              {data.rating}.
            </p>
            <Rating
              name="half-rating"
              defaultValue={data.rating}
              precision={0.5}
              size="small"
            />
          </div>
        </div>
        <div className="flex items-center justify-between sm:mt-3 mt-2">
          <h3 className="text-[24px] font-medium">{data.courseName}</h3>
          <HiOutlineArrowSmallUp size={30} className="rotate-45" />
        </div>
        <p className="sm:text-[16px] text-[13px] text-[#667085] sm:mt-3 mt-1">{data.courseInfo}</p>
        <div className="flex flex-col justify-between sm:h-[170px] h-[185px]">
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
