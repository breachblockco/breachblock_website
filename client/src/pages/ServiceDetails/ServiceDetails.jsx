import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ServiceDetails.module.css";

function ServiceDetails() {
  const { serviceDetails } = useContext(CourseContext);
  const { serviceid } = useParams();

  const [storedService, setStoredService] = useState(null);

  useEffect(() => {
    if (serviceDetails && serviceDetails.length > 0) {
      const service = serviceDetails.find((c) => String(c.id) === serviceid);
      if (service) {
        localStorage.setItem(`service_${serviceid}`, JSON.stringify(service));
        setStoredService(service); // Update state to reflect the service
      } else {
        const localService = localStorage.getItem(`service_${serviceid}`);
        if (localService) {
          setStoredService(JSON.parse(localService));
        }
      }
    }
  }, [serviceDetails, serviceid]);

  const [showFullText, setShowFullText] = useState(false);

  // Function to toggle the text state
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  // Split the description into parts
  const descriptionParts = storedService?.description?.split(". ");

  // Define how many parts to show in the "Show Less" state
  const visibleParts = 3;

  return (
    <div>
      {storedService && (
        <div className="w-full min-h-screen">
          <Header />
          <div className="px-4 sm:px-24 lg:px-16 mt-5 sm:my-24">
            <div className="w-full h-[40vh] sm:w-[50vw] sm:h-[60vh] rounded-lg shadow-xl flex justify-center mx-auto hover:shadow-2xl transition-all duration-300 relative">
              <img
                src={storedService.image}
                alt=""
                className="h-full relative"
              />
            </div>
            <h1
              className={`text-4xl mt-6 sm:text-6xl sm:mt-10 sm:mb-2 text-center font-bold ${styles.subHeading} py-4 orbitron-family`}
            >
              {storedService.title}
            </h1>
            <div className="w-full text-lg text-justify">
              {showFullText
                ? descriptionParts.map((part, index) => (
                    <React.Fragment key={index}>
                      {part}.
                      <br /> <br />
                    </React.Fragment>
                  ))
                : descriptionParts.slice(0, visibleParts).map((part, index) => (
                    <React.Fragment key={index}>
                      {part}.
                      <br /> <br />
                    </React.Fragment>
                  ))}
              {/* Toggle Button */}
              <button
                onClick={toggleText}
                className="text-blue-500 focus:outline-none"
              >
                {showFullText ? "Show Less" : "Show More"}
              </button>
            </div>
            <div className="w-full flex-wrap flex gap-4 sm:gap-10 justify-center my-5 sm:mt-10">
              {storedService.technologies.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-[#100A12] text-white rounded-2xl shadow-lg w-40 h-16 sm:w-60 sm:h-20 hover:shadow-2xl hover:scale-110 sm:hover:scale-100 transition-all duration-300"
                >
                  <h2 className="text-xl sm:text-3xl font-semibold">{t}</h2>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ServiceDetails;
