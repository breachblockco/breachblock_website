import React from "react";
import styles from "./Herosection.module.css";
import Button from "../Button/Button";

function Herosection() {
  const scrollToSection = (ref) => {
    document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="w-full sm:mt-28 mt-2 grid sm:grid-cols-[55%_45%] lg:grid-cols-[55%_45%] grid-cols-1 h-fit items-center gap-0 px-4 sm:px-24 lg:px-16"
      id="main"
    >
      {/* Left Part */}
      <div className="flex-1 sm:min-h-52 pb-6 w-full flex-shrink-0 items-center">
        <div className="main-heading w-full">
          <h1 className="orbitron-family sm:text-[48px] text-[23px] font-bold leading-[130%]">
            Your security, our priority. <br /> Your success, our mission.
          </h1>
          <p className="sm:mt-6 mt-4 sm:text-2xl text-[14px] poppins-family text-justify font-medium">
            Ever thought about mastering the art of web development? Want to
            create and grow your own digital solutions?{" "}
            <span className="sm:text-2xl text-[14px] font-medium poppins-family">
              From comprehensive cybersecurity training to advanced penetration
              testing and custom web development, we've got you covered.
            </span>
          </p>
          <div className="btns-container flex sm:gap-6 sm:mt-6 mt-4 justify-between sm:justify-start">
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
        <div className="qualities-container w-full flex items-center sm:justify-start sm:gap-16 sm:mt-14 mt-6 justify-between">
          <div className="flex poppins-family items-center sm:gap-3 gap-2">
            <img
              src="/icons/innovate.gif"
              alt=""
              className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px]"
            />
            <p className="sm:text-[22px] text-[14px] font-medium">Innovate</p>
          </div>
          <div className="flex poppins-family items-center sm:gap-3 gap-2">
            <img
              src="/icons/build.gif"
              alt=""
              className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px]"
            />
            <p className="sm:text-[22px] text-[14px] font-medium">Build</p>
          </div>
          <div className="flex poppins-family items-center sm:gap-3 gap-2">
            <img
              src="/icons/protect.gif"
              alt=""
              className="sm:w-[50px] sm:h-[50px] w-[35px] h-[35px]"
            />
            <p className="sm:text-[22px] text-[14px] font-medium">Protect</p>
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex-1 flex justify-center sm:justify-end items-center w-full flex-shrink-0">
        <div className="relative w-[90%] sm:h-[60vh] h-[40vh]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-[#096cd5] sm:blur-xl blur-md opacity-75 aspect-w-16 aspect-h-9"></div>
          <img
            src="/images/hero-img.jpg"
            alt=""
            className="w-full h-full rounded-xl relative object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default Herosection;