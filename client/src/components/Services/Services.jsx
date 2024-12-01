import React, { useState } from "react";
import styles from "./Services.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

function Services() {
  const [hoveredService, setHoveredService] = useState(null); // To track which service is hovered

  // Services data
  const services = [
    {
      id: 1,
      title: "Front End Development",
      content:
        "Transforming ideas into interactive digital experiences. Our Front-End Development team creates visually captivating and highly responsive websites that engage users from the moment they land. With a focus on seamless user experience and dynamic interfaces, we bring your brand to life on the screen using the latest technologies like React, Vue, and Tailwind CSS. Whether it's a responsive layout or smooth animations, we ensure your website is not just seen, but experienced",
      svg: `<svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45 30H30V45L30 60H15L0 45L15 30H0V0H15L30 15V2.86102e-06L45 0L60 15L45 30ZM30 15V30H15L30 15Z"
                    fill="currentColor"
                  />
                  <path d="M45 30H60V60H45L30 45L45 30Z" fill="currentColor" />
                </svg>`,
    },
    {
      id: 2,
      title: "Back End Development",
      content:
        "Our backend development services power the functionality of your web applications, ensuring seamless data flow, security, and efficiency. From building scalable databases to creating robust server-side architecture, we design and implement the hidden systems that make your frontend experience smooth and dynamic. We specialize in developing APIs, integrating third-party services, and creating the core logic that drives your business. Whether you need to manage user data, process payments, or handle complex queries, our backend solutions are tailored to meet the demands of your application.",
      svg: `<svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45 30H30V45L30 60H15L0 45L15 30H0V0H15L30 15V2.86102e-06L45 0L60 15L45 30ZM30 15V30H15L30 15Z"
                    fill="currentColor"
                  />
                  <path d="M45 30H60V60H45L30 45L45 30Z" fill="currentColor" />
                </svg>`,
    },
    {
      id: 3,
      title: "Api Pen Testing",
      content:
        "Shield your digital assets with our rigorous API penetration testing services. Our expert team meticulously scans your APIs for vulnerabilities, identifying and exploiting weaknesses to prevent potential data breaches and cyberattacks. We employ advanced techniques to assess security risks, offering actionable insights to bolster your API security posture.",
      svg: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 30V15L45 0H60V15L45 30H30Z" fill="currentColor"/>
<path d="M30 45V30H15L30 15L15 0H0V30H15L0 45V60H15L30 45Z" fill="currentColor"/>
<path d="M30 45L45 60H60V30H45L30 45Z" fill="currentColor"/>
</svg>
`,
    },
    {
      id: 4,
      title: "Mobile Pen Testing ",
      content:
        "Protect your mobile applications from cyber threats with our comprehensive penetration testing services. Our experts scrutinize your mobile apps for vulnerabilities, including insecure data storage, weak network communication, and malicious code injection. By identifying and mitigating these risks, we ensure the security and integrity of your mobile applications, safeguarding sensitive user data and brand reputation.",
      svg: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 0L20 10L10 0H0V10L10 20L0 30L10 40L0 50V60H10L20 50L30 60L40 50L50 60H60V50L50 40L60 30L50 20L60 10V0H50L40 10L30 0ZM40 10L50 20L40 30L50 40L40 50L30 40L20 50L10 40L20 30L10 20L20 10L30 20L40 10Z" fill="currentColor"/>
</svg>
`,
    },
    {
      id: 5,
      title: "Website Pen Testing",
      content:
        "Safeguard your web applications from cyberattacks with our advanced penetration testing services. Our skilled team meticulously scans your web applications for vulnerabilities, including SQL injection, cross-site scripting (XSS), and other common threats. By identifying and addressing these vulnerabilities, we help you protect your web applications from unauthorized access, data breaches, and reputational damage.",
      svg: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45 15H60V0H45L30 15V0H15L0 15V30H15V45H0V60H15L30 45V60H45L60 45V30H45V15ZM30 30V15H15V30H30ZM30 30H45V45H30V30Z" fill="currentColor"/>
</svg>
`,
    },
  ];

  return (
    <div className="sm:pt-20 pt-10" id="services">
      <SectionHeading
        heading={"services"}
        subheading={"what we do"}
        content={
          "Providing scalable, expert-driven e-learning solutions to enhance skills and boost business performance"
        }
        rowReverse={false}
      />

      <div className="relative flex flex-col sm:gap-10 gap-5 sm:mt-10 mt-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex group items-center sm:gap-10 gap-3 relative w-fit"
            onMouseEnter={() => setHoveredService(service.id)} // Set hovered service
            onMouseLeave={() => setHoveredService(null)} // Reset on hover out
          >
            {/* Left Icon */}
            <div className="service-left flex items-start sm:gap-5 gap-3">
              <div
                className="text-[#CCCCCC] transition-all duration-300 group-hover:text-[#064281] hidden sm:flex"
                dangerouslySetInnerHTML={{ __html: service.svg }}
              ></div>

              <h5 className="sm:text-[40px] text-[25px] text-[#CCCCCC] leading-none font-regular group-hover:text-[#064281] transition-all duration-300">
                0{service.id}
              </h5>
            </div>

            {/* Right Title */}
            <div className="service-right flex items-end justify-between sm:w-[40vw] sm:border-b-2 sm:border-b-[#CCCCCC] group-hover:border-b-2 group-hover:border-b-[#064281] sm:pb-8 pb-0 w-100vw] border-none">
              <h2 className="sm:text-[50px] text-[25px] font-semibold text-[#CCCCCC] group-hover:text-[#064281] transition-all duration-300">
                {service.title}
              </h2>
              <div className="text-[#CCCCCC] group-hover:text-[#064281] transition-all duration-300 group-hover:rotate-45 sm:flex hidden">
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="leading-none"
                >
                  <path
                    d="M13.5746 2.4444C13.5884 2.86098 13.7664 3.25517 14.0699 3.5409C14.3733 3.82663 14.7775 3.98066 15.1942 3.96937L23.2437 3.6826L1.15869 27.1374C0.87185 27.4421 0.717771 27.8482 0.730352 28.2664C0.742932 28.6846 0.921141 29.0807 1.22577 29.3676C1.53041 29.6544 1.93651 29.8085 2.35475 29.7959C2.77298 29.7833 3.16909 29.6051 3.45593 29.3005L25.5301 5.85716L25.773 13.9303C25.7784 14.1385 25.825 14.3436 25.91 14.5337C25.9951 14.7238 26.1169 14.8952 26.2686 15.038C26.4202 15.1808 26.5986 15.2921 26.7935 15.3656C26.9884 15.4391 27.1959 15.4732 27.404 15.4661C27.8206 15.4524 28.2148 15.2743 28.5005 14.9709C28.7862 14.6674 28.9403 14.2632 28.929 13.8466L28.6775 5.11516C28.639 3.8615 28.1045 2.67437 27.1913 1.81455C26.2782 0.954722 25.0611 0.49251 23.8073 0.529441L15.0996 0.824849C14.683 0.83862 14.2888 1.01667 14.0031 1.32012C13.7174 1.62357 13.5633 2.02776 13.5746 2.4444Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Hover Card */}
            {hoveredService === service.id && (
              <div
                className={`absolute -right-[420px] -top-[80px] w-[400px] p-5 ${styles.gradientBackground} rounded-xl border-[3px] border-[#0a6ed9] ${styles.animateBorderMotion} sm:flex hidden`}
              >
                {/* Glowing effect div */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#064281] to-[#0a6ed9] blur-2xl opacity-50 rounded-xl"></div>

                {/* Card content */}
                <p className="text-md mt-2 font-medium text-white">
                  {service.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
