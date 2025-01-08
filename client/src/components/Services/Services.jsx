import React, { useState } from "react";
import styles from "./Services.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function Services() {
  const [hoveredService, setHoveredService] = useState(null); // To track which service is hovered

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute sm:right-4 -right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <MdOutlineNavigateNext size={30}/>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="prev-btn absolute sm:left-4 -left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <MdOutlineNavigateNext size={30} className="rotate-180"/>
      </div>
    );
  };

 const settings = {
   infinite: true,
   centerMode: true, // Enables centering
   centerPadding: "0", // No padding around the centered slide
   speed: 500,
   slidesToShow: 3, // Number of slides visible
   slidesToScroll: 1,
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
   responsive: [
     {
       breakpoint: 768, // Mobile screens
       settings: {
         slidesToShow: 1,
         centerMode: true,
       },
     },
     {
       breakpoint: 1024, // Tablet screens
       settings: {
         slidesToShow: 2,
         centerMode: true,
       },
     },
   ],
 };



  // Services data
  const services = [
    {
      id: 1,
      title: "Front End Development",
      content:
        "We craft visually stunning, responsive websites with seamless user experiences, leveraging cutting-edge technologies like React, Vue, and Tailwind CSS to bring your brand to life.",
      image: "/icons/services_icons/s1.gif",
    },
    {
      id: 2,
      title: "Back End Development",
      content:
        "We provide robust backend solutions, building scalable databases, secure APIs, and efficient server-side architecture to power your web applications and ensure seamless data flow and functionality.",
      image: "/icons/services_icons/s2.gif",
    },
    {
      id: 3,
      title: "Api Pen Testing",
      content:
        "Protect your digital assets with our expert API penetration testing services, identifying vulnerabilities and providing actionable insights to strengthen your API security and prevent cyberattacks.",
      image: "/icons/services_icons/s3.gif",
    },
    {
      id: 4,
      title: "Mobile Application Pentesting",
      content:
        "Secure your mobile apps against cyber threats with our thorough penetration testing, identifying vulnerabilities and mitigating risks to protect sensitive data and your brand's reputation.",
      image: "/icons/services_icons/s4.gif",
    },
    {
      id: 5,
      title: "Web Application Pen Testing",
      content:
        "Protect your web applications from cyberattacks with our expert penetration testing, identifying and addressing vulnerabilities like SQL injection and XSS to prevent unauthorized access and data breaches.",
      image: "/icons/services_icons/s5.gif",
    },
  ];

  return (
    // <div className="sm:pt-20 pt-10 px-4 sm:px-24 lg:px-16" id="services">
    //   <SectionHeading
    //     heading={"services"}
    //     subheading={"what we do"}
    //     content={
    //       "Providing scalable, expert-driven e-learning solutions to enhance skills and boost business performance"
    //     }
    //     rowReverse={false}
    //   />

    //   <div className="relative flex flex-col sm:gap-10 gap-5 sm:mt-10 mt-5">
    //     {services.map((service) => (
    //       <div
    //         key={service.id}
    //         className="flex group items-center sm:gap-10 gap-3 relative w-fit"
    //         onMouseEnter={() => setHoveredService(service.id)} // Set hovered service
    //         onMouseLeave={() => setHoveredService(null)} // Reset on hover out
    //       >
    //         {/* Left Icon */}
    //         <div className="service-left flex items-start sm:gap-5 gap-3">
    //           <div
    //             className="text-[#CCCCCC] transition-all duration-300 group-hover:text-[#064281] hidden sm:flex"
    //             dangerouslySetInnerHTML={{ __html: service.svg }}
    //           ></div>

    //           <h5 className="sm:text-[40px] text-[25px] text-[#CCCCCC] leading-none font-regular group-hover:text-[#064281] transition-all duration-300">
    //             0{service.id}
    //           </h5>
    //         </div>

    //         {/* Right Title */}
    //         <div className="service-right flex items-end justify-between sm:w-[55vw] sm:border-b-2 sm:border-b-[#CCCCCC] group-hover:border-b-2 group-hover:border-b-[#064281] sm:pb-8 pb-0 w-100vw] border-none">
    //           <h2 className="sm:text-[50px] text-[25px] font-semibold text-[#CCCCCC] group-hover:text-[#064281] transition-all duration-300">
    //             {service.title}
    //           </h2>
    //           <div className="text-[#CCCCCC] group-hover:text-[#064281] transition-all duration-300 group-hover:rotate-45 sm:flex hidden">
    //             <svg
    //               width="29"
    //               height="30"
    //               viewBox="0 0 29 30"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="leading-none"
    //             >
    //               <path
    //                 d="M13.5746 2.4444C13.5884 2.86098 13.7664 3.25517 14.0699 3.5409C14.3733 3.82663 14.7775 3.98066 15.1942 3.96937L23.2437 3.6826L1.15869 27.1374C0.87185 27.4421 0.717771 27.8482 0.730352 28.2664C0.742932 28.6846 0.921141 29.0807 1.22577 29.3676C1.53041 29.6544 1.93651 29.8085 2.35475 29.7959C2.77298 29.7833 3.16909 29.6051 3.45593 29.3005L25.5301 5.85716L25.773 13.9303C25.7784 14.1385 25.825 14.3436 25.91 14.5337C25.9951 14.7238 26.1169 14.8952 26.2686 15.038C26.4202 15.1808 26.5986 15.2921 26.7935 15.3656C26.9884 15.4391 27.1959 15.4732 27.404 15.4661C27.8206 15.4524 28.2148 15.2743 28.5005 14.9709C28.7862 14.6674 28.9403 14.2632 28.929 13.8466L28.6775 5.11516C28.639 3.8615 28.1045 2.67437 27.1913 1.81455C26.2782 0.954722 25.0611 0.49251 23.8073 0.529441L15.0996 0.824849C14.683 0.83862 14.2888 1.01667 14.0031 1.32012C13.7174 1.62357 13.5633 2.02776 13.5746 2.4444Z"
    //                 fill="currentColor"
    //               />
    //             </svg>
    //           </div>
    //         </div>

    //         {/* Hover Card */}
    //         {hoveredService === service.id && (
    //           <div
    //             className={`absolute -right-[420px] -top-[80px] w-[400px] p-5 ${styles.gradientBackground} rounded-xl border-[3px] border-[#0a6ed9] ${styles.animateBorderMotion} sm:flex hidden`}
    //           >
    //             {/* Glowing effect div */}
    //             <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#064281] to-[#0a6ed9] blur-2xl opacity-50 rounded-xl"></div>

    //             {/* Card content */}
    //             <p className="text-md mt-2 font-medium text-white">
    //               {service.content}
    //             </p>
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div
      className="slider-container pt-20 h-[60vh] w-full px-4 sm:px-24 lg:px-16 sm:mb-28"
      id="services"
    >
      <SectionHeading
        heading={"services"}
        subheading={"what we do"}
        content={
          "Providing scalable, expert-driven e-learning solutions to enhance skills and boost business performance"
        }
        rowReverse={false}
      />
      <Slider {...settings} className="service-container ">
        {/* Service Cards */}
        {services.map((service, index) => (
          <div className="flex justify-center service-card-container">
            <div
              key={index}
              className="service-card bg-zinc-200 rounded-lg sm:shadow-xl shadow-none p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center mt-12"
            >
              {/* Card Icon */}
              <div className="icon-container bg-blue-400 w-14 h-14 mb-4 font-semibold">
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-full bg-transparent"
                />
              </div>
              {/* Card Title */}
              <h3 className="sm:text-lg text-md font-semibold text-gray-800 mb-2 text-center">
                {service.title}
              </h3>
              {/* Card Description */}
              <p className="sm:text-sm text-xs text-gray-600 text-center">
                Explore our {service.content} to help boost your business growth
                and enhance user engagement.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
