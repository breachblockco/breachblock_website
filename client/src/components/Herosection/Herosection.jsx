import React from "react";
import styles from "./Herosection.module.css";
import Button from "../Button/Button";

function Herosection() {
  return (
    <div className="w-full mt-10">
      <div className="herosection-left-part w-[60%] min-h-52">
        <div className="main-heading w-full">
          <h1 className="orbitron-family text-[52px] font-bold">
            Turning Challenges into Digital Solutions
          </h1>
          <p className="mt-6 text-2xl poppins-family">
            Facing challenges with your digital presence? Need a solution that
            drives real results?{" "}
            <span className="text-2xl font-medium text-[#096CD5] poppins-family">
              We craft tailored web services to solve your toughest problems and
              drive your business forward. But that’s not all – we also empower
              you with top-tier online training in web development to help you
              build and grow your own digital solutions.
            </span>
          </p>
          <div className="btns-container flex gap-10 mt-6">
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
        <div className="qualities-container w-full flex items-center justify-start gap-32 mt-14">
          <div className="flex poppins-family items-center gap-3">
            <img
              src="/icons/public-speaking-icon.png"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <p className="text-[22px] font-medium">Innovate</p>
          </div>
          <div className="flex poppins-family items-center gap-3">
            <img
              src="/icons/career-icon.png"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <p className="text-[22px] font-medium">Build</p>
          </div>
          <div className="flex poppins-family items-center gap-3">
            <img
              src="/icons/idea-icon.png"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <p className="text-[22px] font-medium">Solve</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
