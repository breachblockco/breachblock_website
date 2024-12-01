import React from "react";
import { Link } from "react-router-dom";

function Button({ btntext, icon, color,fs }) {
  const scrollToSection = (ref) => {
    document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {color && fs && (
        <button
          onClick={() => scrollToSection("contact")}
          className={`sm:py-1.5 sm:px-6 lg:px-4 lg:py-1 px-4 py-1 rounded-full flex items-center text-white poppins-family gap-3 border-2 transition-all duration-300 hover:bg-white`}
          style={{
            backgroundColor: color,
            borderColor: color,
            color: "white",
          }}
        >
          {icon && <i className="fa-regular fa-user text-[15px]"></i>}
          <p className="sm:text-[16px] text-[14px] font-medium">{btntext}</p>
        </button>
      )}
    </>
  );
}

export default Button;
