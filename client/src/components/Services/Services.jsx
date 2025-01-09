import React, { useContext, useState } from "react";
import styles from "./Services.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";

function Services() {
  const { serviceDetails } = useContext(CourseContext);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute sm:right-4 -right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <MdOutlineNavigateNext size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="prev-btn absolute sm:left-4 -left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <MdOutlineNavigateNext size={30} className="rotate-180" />
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

  return (
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
        {serviceDetails.map((service, index) => (
          <Link
            to={`/services/${service.id}`}
            className="flex justify-center service-card-container"
          >
            <div
              key={index}
              className="service-card bg-zinc-200 rounded-lg sm:shadow-xl shadow-none p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center mt-12"
            >
              {/* Card Icon */}
              <div className="icon-container bg-blue-400 w-14 h-14 mb-4 font-semibold">
                <img
                  src={service.gif}
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
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
