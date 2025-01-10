import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";

function ContactUs() {
  const form = useRef(); // For emailjs integration
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zscf9u2", // Replace with your EmailJS Service ID
        "breachblockco_template", // Replace with your EmailJS Template ID
        form.current,
        "ROF_f_l8nYxFGbL4w" // Replace with your EmailJS User ID (or public key)
      )
      .then(
        (result) => {
          toast.success("Message sent successfully")
        },
        (error) => {
          toast.error("Error in sending message. Try Again")
        }
      );

    e.target.reset(); // Reset the form after submission
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form state
  };

  return (
    <div className="">
      <ToastContainer />
      <Header />
      <div
        className="min-h-[90vh] flex flex-col justify-center items-center px-4 sm:mt-14 py-5 sm:py-0"
        style={{
          background: "linear-gradient(90deg, #0a6ed9 0%, #064281 100%)",
        }}
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch">
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center items-center bg-zinc-100 rounded-tl-lg rounded-tr-lg sm:rounded-tl-lg sm:rounded-bl-lg">
            <img
              src="/images/contactus/contactus.png" // Replace with your image URL
              alt="Contact Us"
              className="w-[100%] h-auto rounded-lg"
            />
          </div>
          {/* Form Container */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-4 poppins-family">
              Contact Us
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We'd love to hear from you! Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone No.
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows="3"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
