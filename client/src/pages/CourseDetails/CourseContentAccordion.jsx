import React, { useState } from "react";
import  {motion, AnimatePresence } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io";

function CourseContentAccordion({courseContent,key}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`w-full bg-transparent border-t-2 border-[#232323] overflow-hidden mx-auto `}
    >
      <button
        className={`flex items-center justify-between text-neutral-200 w-full text-left my-4 sm:my-8 ${
          isOpen ? "bg-neutral-800/40</div>" : ""
        }`}
        onClick={toggleAccordion}
      >
        <span className="text-lg sm:text-4xl font-medium leading-50 w-[90%]">
          {courseContent.title}
        </span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, linear: [0.87, 0, 0.13, 1] }}
        >
          <IoIosArrowDown
            className={`w-6 h-6 sm:w-10 sm:h-10 ${
              isOpen ? "text-[#096CD5]" : "text-neutral-100"
            }`}
          />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, linear: [0.87, 0, 0.13, 1] }}
            className="overflow-hidden"
          >
            {courseContent.subtopics.map((subtopic, index) => (
              <div
                key={index}
                className="p-1 sm:p-4 text-slate-300 text-md sm:text-3xl hover:text-[#096CD5] transition-all duration-300"
              >
                {subtopic}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CourseContentAccordion;
