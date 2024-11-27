import React from "react";
import styles from "./Footer.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full py-20 bg-[#100A12] px-24">
      <div className="px-10 flex pb-12 border-b-[1px] border-[#8D8D8D] justify-between">
        <div className="logo w-[15vw]">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="flex text-white justify-center gap-24">
          <h4 className="text-[16px]">Terms & Condition</h4>
          <h4 className="text-[16px]">Refund Policy</h4>
          <h4 className="text-[16px]">Privacy Policy</h4>
          <h4 className="text-[16px]">Contact Us</h4>
        </div>
      </div>
      <div className="pt-14 px-10 flex gap-28 justify-between border-b-[1px] border-[#8D8D8D] pb-12">
        <div className="w-[30%] flex flex-col gap-20">
          <div className="text-white">
            <h5 className="text-[20px] font-semibold">
              Unlock your potential with expert-led, flexible online courses
              designed for career growth.
            </h5>
            <p className="text-[#BCBCBD] text-[16px] mt-6">
              Join us today and start your journey toward lifelong learning and
              career advancement.
            </p>
          </div>
          <div className="text-white">
            <div className="px-5 w-full py-3 rounded-full bg-[#FFFFFF] flex items-center gap-3 relative">
              <IoSearchOutline className="text-[#BCBCBD]" size={24} />
              <input
                type="text"
                placeholder="Type in you Email"
                className=" placeholder:text-[#a1a1a4] w-[65%]"
              />
              <div className="py-3 px-8 bg-gradient-to-r from-[#0A6ED9] to-[#064281] rounded-full absolute right-0 font-semibold">
                Send
              </div>
            </div>
          </div>
        </div>
        <div className="w-[15%] ">
          <h6 className={`orbitron-family ${styles.subHeading} `}>
            Quick links
          </h6>
          <div className="flex flex-col gap-3 mt-6 text-white">
            <p>Home</p>
            <p>My Learnings</p>
            <p>All Courses</p>
            <p>About Us</p>
            <p>My Account</p>
            <p>Testimonials</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className="w-[15%] ">
          <h6 className={`orbitron-family ${styles.subHeading} `}>
            Our Services
          </h6>
          <div className="flex flex-col gap-3 mt-6 text-white">
            <p>Front End Development </p>
            <p>Backend Development </p>
            <p>Mobile Pen Testing</p>
            <p>Api Pen Testing</p>
            <p>Website Pen Testing</p>
          </div>
        </div>
      </div>
      <div className="px-10 pt-14">
        <div className="w-full flex justify-between items-center">
          <p className="text-white text-[16px]">
            Copyright © 2024 Breachblock. All rights reserved.
          </p>
          <div className="flex text-white gap-12">
            <FaLinkedin size={30} />
            <FaXTwitter size={30} />
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaYoutube size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
