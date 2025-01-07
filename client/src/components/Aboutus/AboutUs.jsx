import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./AboutUs.module.css";
import Button from "../Button/Button";

const AboutUs =React.forwardRef(({ref}) =>{
  return (
    <div className="sm:pb-28 sm:pt-40 py-10 px-4 sm:px-24 lg:px-16 mt-0" ref={ref} id="about">
      <SectionHeading
        heading={"About Us"}
        subheading={"who we are"}
        content={
          "We specialize in delivering impactful e-learning solutions to drive workforce growth and enhance organizational performance."
        }
        rowReverse={true}
      />
      <div className="flex justify-between sm:mt-8 mt-4 h-fit flex-wrap">
        <div className="about-left sm:w-[45%] w-full sm:min-h-[65vh] h-[30vh] rounded-xl overflow-hidden relative">
          <img
            src="/images/aboutus-img.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="about-right sm:w-[50%] w-full flex flex-col justify-between mt-4 text-justify">
          <p className="sm:text-[17px] text-[12px]">
            BreachBlock Co. is your trusted partner in securing and enhancing
            your digital presence. With a team of seasoned experts, we provide
            comprehensive web application development and robust penetration
            testing services tailored to your specific needs. Our expertise
            extends to safeguarding web applications, mobile applications, and
            networks, ensuring the highest level of security for your digital
            assets. Our Services: Web Application Development: Crafting
            innovative and secure web applications Leveraging cutting-edge
            technologies and industry best practices Ensuring optimal
            performance and user experience Penetration Testing: Rigorous
            testing of web, mobile, and network applications Identification and
            exploitation of vulnerabilities Providing actionable insights to
            mitigate risks Cybersecurity Training: Empowering individuals and
            organizations with essential cybersecurity knowledge Offering valued
            certified course preparation to advance your career Located in
            Vadodara, Gujarat, BreachBlock Co. is committed to delivering
            exceptional services and fostering a secure digital future.
          </p>
          <div className="flex items-center justify-between mt-3">
            <h6 className="capitalize sm:text-[24px] text-[14px] font-semibold orbitron-family">
              empowering{" "}
              <span className={`${styles.subHeading}`}>learning,</span>{" "}
              inspiring <span className={`${styles.subHeading}`}>growth</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
