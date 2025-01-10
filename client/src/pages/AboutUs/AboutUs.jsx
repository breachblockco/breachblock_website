import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function AboutUs() {
  return (
    <div>
      <Header />
      <div>
        {/* Header Section */}
        <header
          className="text-white text-center py-12 px-6 poppins-family mt-0 sm:mt-14"
          style={{
            background: "linear-gradient(90deg, #0a6ed9 0%, #064281 100%)",
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold poppins-family">
            About Us
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Welcome to Breachblock! We are committed to providing exceptional
            services and solutions tailored to meet your needs.
          </p>
        </header>

        {/* Main Content Section */}
        <main className="py-8 sm:py-16 px-4 sm:px-6 bg-gray-50 poppins-family">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[50vh]">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/images/aboutus/aboutus.png" // Replace with your actual image
                alt="Our Team"
                className="w-[90%] sm:w-[85%] rounded-lg shadow-xl"
              />
            </div>

            {/* Text Content Section */}
            <div className="poppins-family">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                Who We Are
              </h2>
              <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                BreachBlock Co. is your trusted partner in securing and
                enhancing your digital presence. With a team of seasoned
                experts, we provide comprehensive web application development
                and robust penetration testing services tailored to your
                specific needs.
              </p>
              <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                Our Services: Web Application Development: Crafting innovative
                and secure web applications Leveraging cutting-edge technologies
                and industry best practices Ensuring optimal performance and
                user experience Penetration Testing: Rigorous testing of web,
                mobile, and network applications Identification and exploitation
                of vulnerabilities Providing actionable insights to mitigate
                risks Cybersecurity Training: Empowering individuals and
                organizations with essential cybersecurity knowledge Offering
                valued certified course preparation to advance your career.
              </p>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="py-8 sm:py-16 px-4 sm:px-6 bg-white poppins-family">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="flex flex-col items-center p-4 sm:p-6 border border-gray-200 rounded-lg shadow-md">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full">
                  <i className="fas fa-star text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700 mt-4">
                  Quality
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  We prioritize quality in every project, ensuring satisfaction
                  and success.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center p-4 sm:p-6 border border-gray-200 rounded-lg shadow-md">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full">
                  <i className="fas fa-cogs text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700 mt-4">
                  Innovation
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Our innovative solutions are tailored to meet your unique
                  needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center p-4 sm:p-6 border border-gray-200 rounded-lg shadow-md">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full">
                  <i className="fas fa-users text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700 mt-4">
                  Teamwork
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Collaboration and teamwork drive our success in every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="text-white text-center py-12 px-4 sm:px-6 poppins-family"
          style={{
            background: "linear-gradient(90deg, #0a6ed9 0%, #064281 100%)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Let us help you bring your ideas to life. Reach out to us today!
          </p>
          <Link
            to={"/contactus"}
            className="inline-block bg-white text-blue-700 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
