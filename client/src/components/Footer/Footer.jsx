import React, { useState } from "react";
import styles from "./Footer.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  const scrollToSection = (ref) => {
    document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
  };
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isServicesCollapsed, setIsServicesCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleServicesCollapse = () => {
    setIsServicesCollapsed(!isServicesCollapsed);
  };
  return (
    <div className="w-full">
      <div className="w-full sm:py-20 py-10 bg-[#100A12] sm:px-24">
        <div className="sm:px-10 px-5 flex sm:pb-12 pb-6 border-b-[1px] border-[#8D8D8D] sm:justify-between flex-col sm:flex-row gap-5">
          <div className="logo sm:w-[15vw] w-[50vw]">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="flex text-white justify-between sm:gap-24 gap-3 sm:flex-row flex-wrap">
            <h4 className="sm:text-[16px] text-[12px] w-[47%] flex-shrink-0 sm:w-fit text-center">
              Terms & Condition
            </h4>
            <h4 className="sm:text-[16px] text-[12px] w-[47%] flex-shrink-0 sm:w-fit text-center">
              Refund Policy
            </h4>
            <h4 className="sm:text-[16px] text-[12px] w-[47%] sm:w-fit text-center">
              Privacy Policy
            </h4>
            <h4 className="sm:text-[16px] text-[12px] w-[47%] sm:w-fit text-center">
              Contact Us
            </h4>
          </div>
        </div>
        <div className="sm:pt-14 sm:px-10 pt-7 px-5 flex-wrap flex sm:gap-28 gap-8 justify-between border-b-[1px] border-[#8D8D8D] pb-12">
          <div className="sm:w-[30%] w-full flex flex-col sm:gap-20 gap-10">
            <div className="text-white flex flex-col gap-6 sm:gap-10">
              <div className="flex items-start gap-4">
                <IoLocationSharp size={20} />
                <h5 className="text-[18px] sm:text-[20px] font-semibold flex-shrink-0 leading-none">
                  Akshar Samrajya, Halol, Gujarat.
                </h5>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone size={20} />
                <h5 className="text-[18px] sm:text-[20px] font-semibold flex-shrink-0 leading-none">
                  +919429882924 | +919157322116
                </h5>
              </div>
              <div className="flex items-center gap-4">
                <MdEmail size={25} />
                <h5 className="text-[18px] sm:text-[20px] font-semibold flex-shrink-0 leading-none">
                  info@breachblockco.in
                </h5>
              </div>
            </div>
          </div>
          <div className="sm:w-[15%] w-full bg-gray-800 sm:bg-transparent rounded-md p-3 sm:p-0">
            {/* Header with Toggle */}
            <div
              className="flex items-center justify-between cursor-pointer sm:hidden"
              onClick={toggleCollapse}
            >
              <h6
                className={`orbitron-family text-white text-[22px] sm:text-md`}
              >
                Quick Links
              </h6>
              <div className="text-white">
                {isCollapsed ? (
                  <FaChevronDown size={20} />
                ) : (
                  <FaChevronUp size={20} />
                )}
              </div>
            </div>

            <h6
              className={`orbitron-family text-[24px] sm:text-md text-white hidden sm:block ${styles.subHeading}`}
            >
              Quick Links
            </h6>

            {/* Collapsible Content for Mobile, Always Visible for Web */}
            <div
              className={`transition-[max-height] duration-300 ease-in-out sm:max-h-none ${
                isCollapsed ? "max-h-0 overflow-hidden" : "max-h-screen"
              }`}
            >
              <div className="flex flex-col gap-3 mt-4 text-white items-start">
                <button onClick={() => scrollToSection("main")}>Home</button>
                <button>My Learnings</button>
                <button onClick={() => scrollToSection("courses")}>
                  All Courses
                </button>
                <button onClick={() => scrollToSection("about")}>
                  About Us
                </button>
              </div>
            </div>
          </div>
          <div className="sm:w-[20%] w-full bg-gray-800 sm:bg-transparent rounded-md p-3 sm:p-0">
            {/* Header with Toggle (visible only on mobile) */}
            <div
              className="flex items-center justify-between cursor-pointer sm:hidden" // Hide toggle on larger screens
              onClick={toggleServicesCollapse}
            >
              <h6
                className={`orbitron-family text-white text-[22px] sm:text-md`}
              >
                Our Services
              </h6>
              <div className="text-white">
                {isServicesCollapsed ? (
                  <FaChevronDown size={20} />
                ) : (
                  <FaChevronUp size={20} />
                )}
              </div>
            </div>

            <h6
              className={`orbitron-family text-[24px] sm:text-md text-white hidden sm:block ${styles.subHeading}`}
            >
              Our Services
            </h6>

            {/* Collapsible Content for Mobile, Always Visible for Web */}
            <div
              className={`transition-[max-height] duration-300 ease-in-out sm:max-h-none ${
                isServicesCollapsed ? "max-h-0 overflow-hidden" : "max-h-screen"
              }`}
            >
              <div className="flex flex-col gap-3 mt-4 text-white">
                <p>Front End Development</p>
                <p>Backend Development</p>
                <p>Mobile Application Pentesting</p>
                <p>API Pen Testing</p>
                <p>Web Application Pen Testing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-14 sm:px-10 pt-7 px-5">
          <div className="w-full flex sm:justify-between items-center flex-col-reverse sm:flex-row gap-6">
            <p className="text-white sm:text-[16px] text-[13px] text-center sm:text-left">
              Copyright © 2024 Breachblock. All rights reserved.
            </p>
            <div className="flex text-white sm:gap-12 gap-6">
              <FaLinkedin size={30} />
              <FaXTwitter size={30} />
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaYoutube size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
