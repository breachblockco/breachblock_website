import React from "react";
import styles from "./Contactus.module.css";

function Contactus() {
  return (
    <div className="">
      <h2 className="text-[#100A12] text-[180px] font-semibold orbitron-family text-center leading-none">
        Let’s Connect.
      </h2>
      <div className="bg-[#100A12] w-full px-24 py-20 -mt-6 flex gap-14 rounded-tl-3xl rounded-tr-3xl">
        <div className="w-1/2">
          <h3 className="text-[24px] text-white">Our Service's</h3>
          <div className="flex w-full gap-8">
            <div className="flex w-1/2 text-white gap-6 mt-5 flex-col">
              <div className="w-full text-[20px] px-4 py-3 rounded-full border-2 border-white text-center">
                Frontend Development
              </div>
              <div className="w-full text-[20px] px-4 py-3 rounded-full border-2 border-white text-center">
                Frontend Development
              </div>
            </div>
            <div className="flex w-1/2 text-white gap-6 mt-5 flex-col">
              <div className="w-full text-[20px] px-4 py-3 rounded-full border-2 border-white text-center">
                Mobile Pen Testing
              </div>
              <div className="w-full text-[20px] px-4 py-3 rounded-full border-2 border-white text-center">
                Web Pen Testing
              </div>
              <div className="w-full text-[20px] px-4 py-3 rounded-full border-2 border-white text-center">
                API Pen Testing
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <h4 className="text-[66px] orbitron-family text-white leading-none">
            Have a Question on Mind?
          </h4>
          <form action="" className="w-full flex flex-col gap-5 mt-10">
            <div className="flex gap-5">
              <div className="w-1/2 px-4 py-5 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2 px-4 py-5 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2 px-4 py-5 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="Phone No"
                />
              </div>
              <div className="w-1/2 px-4 py-5 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="Email ID"
                />
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
              <input
                type="text"
                name=""
                id=""
                className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                placeholder="Courses ( Optional ) "
              />
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0A6ED9] to-[#064281] w-full h-[40px]"></div>
    </div>
  );
}

export default Contactus;
