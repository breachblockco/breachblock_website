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
    <div className="pb-28">
      <SectionHeading
        heading={"Technologies"}
        subheading={"Our Technologies"}
        content={
          "Utilizing advanced technologies to create engaging, interactive, and adaptive learning experiences."
        }
        rowReverse={false}
      />
      <div className="flex justify-between h-fit">
        <div className="w-[35%] min-h-full relative">
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
        <div className="w-[60%] flex flex-col justify-between">
          <h4 className="text-[37px] orbitron-family font-semibold">
            Powering Learning with Innovative, Advanced Technologies
          </h4>
          <p className="text-[17px]">
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

      <div class="grid grid-cols-3 grid-rows-3 gap-8 p-4 mt-10 px-36">
        {technologies.map((tech, index) => (
          <div class="rounded-xl shadow-lg text-white h-[100px] w-[400px] text-center hover:shadow-[#064281] hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center items-center w-full h-full gap-5">
              <img
                src={`/icons/technologies_icons/icon${index + 1}.png`}
                alt=""
              />
              <h5
                className={`text-[24px] orbitron-family ${styles.subHeading} uppercase font-semibold`}
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
