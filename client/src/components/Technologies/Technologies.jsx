import React from "react";
import styles from "./Technologies.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

function Technologies() {
  const technologies = [
    {
      text: "react js",
    },
    {
      text: "material ui",
    },
    {
      text: "typescript",
    },
    {
      text: "node js",
    },
    {
      text: "tailwind css",
    },
    {
      text: "firebase",
    },
    {
      text: "express js",
    },
    {
      text: "javascript",
    },
    {
      text: "mongo db",
    },
  ];

  return (
    <div className="sm:pb-28 pb-10" id="technology">
      <SectionHeading
        heading={"Technologies"}
        subheading={"Our Technologies"}
        content={
          "Utilizing advanced technologies to create engaging, interactive, and adaptive learning experiences."
        }
        rowReverse={false}
      />
      <div className="flex justify-between h-fit flex-wrap">
        <div className="sm:w-[35%] w-full sm:min-h-full relative">
          <img
            src="/images/technology-img.png"
            alt=""
            className="h-full w-full"
          />
          <img
            src="/images/gradient-bg.png"
            alt=""
            className="h-full w-full absolute top-0"
          />
        </div>
        <div className="sm:w-[60%] w-full flex flex-col justify-between mt-3">
          <h4 className="sm:text-[37px] text-[24px] w-full orbitron-family font-semibold">
            Powering Learning with Innovative, Advanced Technologies
          </h4>
          <p className="sm:text-[17px] text-[12px] text-justify mt-3">
            Our platform is built on a robust foundation of advanced
            technologies to ensure a seamless and innovative e-learning
            experience. We use React JS for creating dynamic and responsive user
            interfaces, enhancing interactivity and engagement. Node.js powers
            our backend, enabling fast, scalable, and efficient server-side
            operations. Firebase supports real-time data synchronization and
            secure authentication, providing a smooth and reliable user
            experience. MongoDB, with its flexible NoSQL database structure,
            manages and stores data effectively, catering to diverse learner
            needs. We also integrate AI-driven features to personalize learning
            paths and adaptive content delivery. Advanced analytics tools help
            track progress and provide valuable insights to improve outcomes.
            Together, these technologies enable us to offer a cutting-edge
            platform designed to empower learners and drive success.
          </p>
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:grid-rows-3 sm:gap-8 gap-2 p-4 sm:mt-10 mt-3 sm:px-0 px-0 flex-wrap flex justify-center ">
        {technologies.map((tech, index) => (
          <div class="rounded-xl shadow-lg text-white h-[80px] sm:h-[100px] sm:w-[400px] w-[48%] flex-shrink-0 text-center hover:shadow-[#064281] hover:shadow-lg transition-all duration-300 ">
            <div className="flex justify-center items-center w-full h-full sm:gap-5 gap-2">
              <img
                src={`/icons/technologies_icons/icon${index + 1}.png`}
                alt=""
                className="w-[22px] h-[22px] sm:w-[30px] sm:h-[30px]"
              />
              <h5
                className={`sm:text-[24px] text-[14px] orbitron-family ${styles.subHeading} uppercase font-semibold`}
              >
                {tech.text}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
