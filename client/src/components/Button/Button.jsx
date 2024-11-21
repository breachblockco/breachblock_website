import React from "react";
import { Link } from "react-router-dom";

function Button({ btntext, icon, color,fs }) {
  return (
    <>
      {color && fs && (
        <Link
          className={`py-1.5 px-6 rounded-full flex items-center text-white poppins-family gap-3 border-2 transition-all duration-300 hover:bg-white`}
          style={{
            backgroundColor: color,
            borderColor: color,
            color: "white",
          }}
        >
          {icon && <i className="fa-regular fa-user text-[15px]"></i>}
          <p
            className="text-[14px] font-medium"
            style={{ fontSize: `${fs}` }}
          >
            {btntext}
          </p>
        </Link>
      )}
    </>
  );
}

export default Button;
