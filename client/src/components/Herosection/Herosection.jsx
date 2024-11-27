import React from "react";
import styles from "./Herosection.module.css";
import Button from "../Button/Button";

// function Herosection() {
//   return (
//     <div className="w-full mt-10 flex justify-between h-fit bg-red-400">
//       <div className="herosection-left-part w-[55%] min-h-52 bg-red-100">
//         <div className="main-heading w-full">
//           <h1 className="orbitron-family text-[52px] font-bold leading-[130%]">
//             Accelerate Your Growth with Flexible, Quality Education
//           </h1>
//           <p className="mt-6 text-2xl poppins-family">
//             Ever thought about mastering the art of web development? Want to
//             create and grow your own digital solutions?{" "}
//             <span className="text-2xl font-medium text-[#096CD5] poppins-family">
//               We empower you with top-tier online training to turn your
//               aspirations into reality.
//             </span>
//           </p>
//           <div className="btns-container flex gap-14 mt-6">
//             <Button
//               btntext={"Let's Make It Happen"}
//               icon={false}
//               color={"#000"}
//               fs={"16px"}
//             />
//             <Button
//               btntext={"Enroll Now"}
//               icon={false}
//               color={"#000"}
//               fs={"16px"}
//             />
//           </div>
//         </div>
//         <div className="qualities-container w-full flex items-center justify-start gap-32 mt-14">
//           <div className="flex poppins-family items-center gap-3">
//             <img
//               src="/icons/innovate.gif"
//               alt=""
//               className="w-[40px] h-[40px]"
//             />
//             <p className="text-[22px] font-medium">Innovate</p>
//           </div>
//           <div className="flex poppins-family items-center gap-3">
//             <img
//               src="/icons/build.gif"
//               alt=""
//               className="w-[40px] h-[40px]"
//             />
//             <p className="text-[22px] font-medium">Build</p>
//           </div>
//           <div className="flex poppins-family items-center gap-3">
//             <img
//               src="/icons/solve.gif"
//               alt=""
//               className="w-[40px] h-[40px]"
//             />
//             <p className="text-[22px] font-medium">Solve</p>
//           </div>
//         </div>
//       </div>
//       <div className="herosection-right-part w-[35%] h-[50vh] flex justify-center items-center bg-zinc-600">
//         <div className="relative w-full h-full">
//           <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-[#096cd5] blur-xl opacity-75"></div>
//           <img
//             src="/images/hero-img.jpg"
//             alt=""
//             className="w-full h-full rounded-xl relative"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Herosection;

function Herosection() {
  return (
    <div className="w-full mt-10 grid grid-cols-[60%_40%] h-fit items-center">
      {/* Left Part */}
      <div className="flex-1 min-h-52 p-6">
        <div className="main-heading w-full">
          <h1 className="orbitron-family text-[52px] font-bold leading-[130%]">
            Accelerate Your Growth with Flexible, Quality Education
          </h1>
          <p className="mt-6 text-2xl poppins-family">
            Ever thought about mastering the art of web development? Want to
            create and grow your own digital solutions?{" "}
            <span className="text-2xl font-medium text-[#096CD5] poppins-family">
              We empower you with top-tier online training to turn your
              aspirations into reality.
            </span>
          </p>
          <div className="btns-container flex gap-6 mt-6">
            <Button
              btntext={"Let's Make It Happen"}
              icon={false}
              color={"#000"}
              fs={"16px"}
            />
            <Button
              btntext={"Enroll Now"}
              icon={false}
              color={"#000"}
              fs={"16px"}
            />
          </div>
        </div>
        <div className="qualities-container w-full flex items-center justify-start gap-8 mt-14">
          <div className="flex poppins-family items-center gap-3">
            <img
              src="/icons/innovate.gif"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <p className="text-[22px] font-medium">Innovate</p>
          </div>
          <div className="flex poppins-family items-center gap-3">
            <img src="/icons/build.gif" alt="" className="w-[40px] h-[40px]" />
            <p className="text-[22px] font-medium">Build</p>
          </div>
          <div className="flex poppins-family items-center gap-3">
            <img src="/icons/solve.gif" alt="" className="w-[40px] h-[40px]" />
            <p className="text-[22px] font-medium">Solve</p>
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[90%] h-[50vh]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-[#096cd5] blur-xl opacity-75 aspect-w-16 aspect-h-9"></div>
          <img
            src="/images/hero-img.jpg"
            alt=""
            className="w-full h-full rounded-xl relative"
          />
        </div>
      </div>
    </div>
  );
}
export default Herosection;