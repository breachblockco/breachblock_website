import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

function Contactus() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zscf9u2", // Replace with your EmailJS Service ID
        "breachblockco_template",
        form.current,
        "ROF_f_l8nYxFGbL4w" // Replace with your EmailJS User ID (or public key)
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Error in sending message. Try Again");
        }
      );

    e.target.reset(); // Reset the form after submission
  };
  return (
    <div className="sm:px-0" id="contact">
      <ToastContainer />
      <h2 className="text-[#100A12] sm:text-[130px] text-[35px] font-semibold orbitron-family text-center leading-none">
        Let’s Connect.
      </h2>
      <div className="bg-[#100A12] w-full sm:px-24 px-3 sm:py-20 py-10 sm:-mt-6 mt-2 flex gap-14 sm:rounded-tl-3xl sm:rounded-tr-3xl rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-none sm:rounded-br-none">
        <div className="sm:w-1/2 hidden sm:block">
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
        <div className="sm:w-1/2 w-full flex flex-col">
          <h4 className="sm:text-[60px] text-[30px] orbitron-family text-white leading-none sm:text-left text-center">
            Have a Question on Mind?
          </h4>
          <form
ref={form}
onSubmit={sendEmail}
className="w-full flex flex-col sm:gap-5 gap-3 sm:mt-10 mt-5 flex-wrap"
>
            <div className="flex sm:gap-5 gap-3 flex-wrap sm:flex-nowrap">
              <div className="sm:w-1/2 w-full sm:px-4 px-3 sm:py-5 py-3 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="First Name"
                />
              </div>
              <div className="sm:w-1/2 w-full sm:px-4 px-3 sm:py-5 py-3 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex sm:gap-5 gap-3 flex-wrap sm:flex-nowrap">
              <div className="sm:w-1/2 w-full sm:px-4 px-3 sm:py-5 py-3 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="Phone No"
                />
              </div>
              <div className="sm:w-1/2 w-full sm:px-4 px-3 sm:py-5 py-3 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none text-white text-xl placeholder:text-[#bfbac4]"
                  placeholder="Email ID"
                />
              </div>
            </div>
            <div className="w-full">
              <textarea
                name=""
                rows={3}
                id=""
                className="w-full sm:px-4 px-3 sm:py-5 py-3 bg-[#FFFFFF0D] rounded-md border-[1px] border-[#FFFFFF1A] resize-none outline-none text-white text-xl placeholder:text-[#bfbac4]"
                placeholder="Type Message"
              ></textarea>
            </div>
            <button className="sm:w-1/2 w-full px-3 py-2.5 text-xl text-white font-medium bg-gradient-to-r from-[#0A6ED9] to-[#064281] rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0A6ED9] to-[#064281] w-full h-[40px]"></div>
    </div>
  );
}

export default Contactus;
