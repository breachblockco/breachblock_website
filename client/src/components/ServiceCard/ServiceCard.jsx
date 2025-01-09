import React from "react";

function ServiceCard({ data }) {
  return (
    <div className="w-full sm:w-[30vw] h-[350px] sm:h-[65vh] shadow-lg hover:shadow-xl rounded-lg mt-5 overflow-hidden">
      {/* Image Section */}
      <div className="h-[80%] w-full rounded-lg">
        <img
          src={data.image}
          alt={data.title || "Service Image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="h-[20%] w-full px-8 sm:p-3 flex items-center justify-center">
        <div className="flex justify-center items-center gap-3">
          <img
            src={data.gif}
            alt={data.title || "Service Icon"}
            className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
          />
          <h3 className="text-lg sm:text-2xl poppins-family font-semibold text-center leading-normal">
            {data.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
