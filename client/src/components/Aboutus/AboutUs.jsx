import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./AboutUs.module.css";
import Button from "../Button/Button";

function AboutUs() {
  return (
    <div className="py-28">
      <SectionHeading
        heading={"About Us"}
        subheading={"who we are"}
        content={
          "We specialize in delivering impactful e-learning solutions to drive workforce growth and enhance organizational performance."
        }
        rowReverse={true}
      />
      <div className="flex justify-between mt-8 h-fit ">
        <div className="about-left w-[45%] min-h-[65vh] rounded-xl overflow-hidden relative">
          <img
            src="/images/aboutus-img.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="about-right w-[50%] flex flex-col justify-between">
          <p className="text-[17px]">
            EU Care Upskill was founded with a clear vision: to make
            high-quality, affordable education accessible to learners worldwide,
            empowering them to achieve their personal and professional goals. In
            a rapidly changing world, continuous learning is essential, and
            we’re here to bridge the gap between ambition and opportunity. Our
            platform offers a diverse range of courses, from foundational skills
            to advanced specializations, all crafted by industry experts and
            experienced educators. With a focus on engaging, interactive content
            and flexible learning paths, we ensure that every learner, whether a
            student, working professional, or lifelong learner, can find what
            they need to thrive. We believe education should be both impactful
            and inclusive, which is why we are committed to fostering a
            supportive, global community where learners can connect, share, and
            grow together. At EU Care Upskill we don’t just teach — we partner
            with you on a journey of discovery, growth, and success. Join us and
            unlock your potential in an environment designed for learning,
            growth, and achievement.
          </p>
          <div className="flex items-center justify-between">
            <h6 className="capitalize text-[18px] font-semibold orbitron-family">
              empowering{" "}
              <span className={`${styles.subHeading}`}>learning,</span>{" "}
              inspiring <span className={`${styles.subHeading}`}>growth</span>
            </h6>
            <div className="flex gap-3">
              <Button btntext={"Read More"} color={"#000"} fs={"16px"} />
              <div className="w-[40px] h-[40px] rounded-full border-[1px] border-black flex justify-center items-center text-black">
                <img
                  src="/icons/services_icons/arrow.svg"
                  alt=""
                  className="w-4 text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
