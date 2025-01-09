import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const serviceData = [
    {
      id: "front-end",
      title: "Front End Development",
      content:
        "We craft visually stunning, responsive websites with seamless user experiences, leveraging cutting-edge technologies like React, Vue, and Tailwind CSS to bring your brand to life.",
      description: `we specialize in delivering top-notch front-end web development services that transform ideas into interactive, user-friendly digital experiences. Our skilled team of developers combines creativity and technical expertise to craft visually stunning and highly responsive websites that captivate users and leave a lasting impression.
      We understand that the front end is the face of your business—it’s where your audience interacts with your brand. That’s why we focus on creating seamless, intuitive, and engaging interfaces that drive user satisfaction and retention. Using the latest technologies like React, Vue.js, and Angular, along with modern styling frameworks such as Tailwind CSS and Bootstrap, we ensure that your website is both aesthetically appealing and functionally robust.
      Our services include designing and developing responsive layouts that adapt flawlessly across devices, from desktops to smartphones, providing an exceptional user experience on any platform. We also implement smooth animations and dynamic interactions to make your website more engaging and interactive. By adhering to best practices in web development, we optimize load times and enhance website performance, ensuring a fast, seamless browsing experience.
      Collaboration is at the heart of what we do. We work closely with you to understand your vision, brand identity, and business goals, tailoring our solutions to meet your unique needs. Whether you’re launching a new website or revamping an existing one, our team ensures that every element—from typography to color schemes and navigation—is designed to reflect your brand and resonate with your audience.
      In addition to aesthetics and functionality, we prioritize accessibility and scalability. We build websites that are inclusive, adhering to web accessibility standards to ensure usability for all users, including those with disabilities. Our code is clean, modular, and scalable, making it easy to maintain and expand as your business grows.`,
      gif: "/icons/services_icons/s1.gif",
      technologies: ["React JS", "Next JS", "Tailwind CSS", "Javascript"],
      image: "/images/services/frontend.png",
    },
    {
      id: "back-end",
      title: "Back End Development",
      content:
        "We provide robust backend solutions, building scalable databases, secure APIs, and efficient server-side architecture to power your web applications and ensure seamless data flow and functionality.",
      description: ` we offer comprehensive back-end web development services that form the backbone of your web applications. Our expertise lies in building robust, scalable, and secure server-side architectures that ensure seamless functionality, efficient data management, and exceptional performance for your digital solutions.
      We understand that the back end is the engine that powers your applications, enabling smooth user experiences by handling complex processes behind the scenes. Our team of experienced developers specializes in creating and maintaining the systems that manage databases, process server requests, and deliver content dynamically to users.
      Our services include designing and implementing scalable databases, such as PostgreSQL, MongoDB, and MySQL, tailored to suit your application’s needs. We also develop secure and efficient RESTful and GraphQL APIs that facilitate seamless communication between the front end and back end. By integrating third-party services, payment gateways, and other essential features, we enhance the functionality of your applications while maintaining data integrity and security.
      Security is at the core of our back-end development practices. We implement robust security measures, including data encryption, token-based authentication, and role-based access controls, to protect sensitive user information and safeguard your application from cyber threats. Our team conducts rigorous testing to identify and resolve vulnerabilities, ensuring your application is built to withstand potential security risks.
      Scalability and performance optimization are integral to our approach. Whether you’re building an MVP or scaling up a complex enterprise application, we design systems that can handle high traffic, large datasets, and complex queries efficiently. Our solutions are built with future growth in mind, ensuring your application can adapt as your business evolves.
      With a focus on cutting-edge technologies like Node.js, Express.js, Python, Flask, and Django, our team stays ahead of industry trends to deliver innovative solutions. Whether you need to build an e-commerce platform, a content management system, or a custom web application, we provide back-end services that drive efficiency, reliability, and success for your business.`,
      gif: "/icons/services_icons/s2.gif",
      technologies: ["Node JS", "Express JS", "Mongo DB", "Flask"],
      image: "/images/services/backend.png",
    },
    {
      id: "api-pen-testing",
      title: "Api Pen Testing",
      content:
        "Protect your digital assets with our expert API penetration testing services, identifying vulnerabilities and providing actionable insights to strengthen your API security and prevent cyberattacks.",
      description: ` we specialize in providing comprehensive API penetration testing services to safeguard your digital infrastructure and ensure the security of your applications. APIs are the backbone of modern web and mobile applications, facilitating communication and data exchange between systems. However, they are also prime targets for cyberattacks. Our expert team helps you identify and address vulnerabilities in your APIs before they can be exploited, securing your systems against potential threats.
      Our API penetration testing services involve a meticulous and methodical approach to assessing the security posture of your APIs. We simulate real-world attack scenarios to uncover weaknesses, such as authentication flaws, authorization bypass, insecure data transmission, and input validation issues. By adopting an attacker’s mindset, we can accurately identify potential risks and provide actionable insights to strengthen your API defenses.
      APIs are critical to your application’s functionality and user experience. Protecting them from cyber threats is essential to maintaining user trust, safeguarding sensitive data, and ensuring the smooth operation of your applications.
      Partner with BreachBlock Co. to secure your APIs and build a robust defense against evolving cybersecurity challenges. Let us help you ensure your APIs remain a secure and reliable component of your digital ecosystem.`,
      gif: "/icons/services_icons/s3.gif",
      image: "/images/services/apitesting.png",
      technologies: [
        "Postman",
        "REST",
        "OWASP ZAP",
        "Burp Suite",
        "JWT.io",
        "Python",
        "Bash",
      ],
    },
    {
      id: "mobile-pen-testing",
      title: "Mobile Application Pentesting",
      content:
        "Secure your mobile apps against cyber threats with our thorough penetration testing, identifying vulnerabilities and mitigating risks to protect sensitive data and your brand's reputation.",
      description: `we offer specialized mobile application penetration testing services to help you secure your mobile apps against ever-evolving cyber threats. With the increasing reliance on mobile applications for business operations and user engagement, safeguarding these apps is critical to protecting sensitive data, user privacy, and your brand’s reputation.
      Our mobile application penetration testing services are designed to uncover vulnerabilities specific to mobile platforms, including Android and iOS. By simulating real-world attack scenarios, we identify security gaps that could be exploited by malicious actors, providing you with the insights needed to enhance your app’s security posture.
      Mobile applications are often a primary touchpoint for customers, making them a lucrative target for cyberattacks. Ensuring the security of your mobile apps not only protects your users but also strengthens your brand’s reputation and compliance with industry regulations.
      At BreachBlock Co., we are committed to helping you secure your mobile applications against potential threats, ensuring they are resilient, reliable, and ready to meet the demands of today’s digital landscape. Let us be your trusted partner in delivering secure and trustworthy mobile solutions.`,
      gif: "/icons/services_icons/s4.gif",
      image: "/images/services/mobiletesting.png",
      technologies: [
        "APKTool",
        "ClassyShark",
        "Wireshark",
        "AndroBugs",
        "Fiddler",
        "SQLmap",
      ],
    },
    {
      id: "web-pen-testing",
      title: "Web Application Pen Testing",
      content:
        "Protect your web applications from cyberattacks with our expert penetration testing, identifying and addressing vulnerabilities like SQL injection and XSS to prevent unauthorized access and data breaches.",
      description: `we provide expert web application penetration testing services designed to identify and address vulnerabilities within your web applications before they can be exploited by attackers. With the increasing reliance on web applications for critical business operations, user interactions, and data management, ensuring their security is paramount to protecting sensitive information and maintaining trust with your users.
      Our web application penetration testing services simulate real-world cyberattacks to uncover security weaknesses in your web applications. We perform comprehensive security assessments that cover both front-end and back-end vulnerabilities, ensuring a complete evaluation of your application’s security posture.p’s security posture.
      Web applications are often a primary point of interaction with your customers and business partners, making them an attractive target for hackers. A security breach in your web application can lead to significant financial losses, data breaches, reputational damage, and legal consequences. By conducting regular web application penetration testing, you can proactively identify and fix vulnerabilities before they are exploited, ensuring the safety of your application, your data, and your users.
      At BreachBlock Co., we are committed to helping you secure your web applications and build trust with your users. Our web application penetration testing services provide the comprehensive, detailed assessments you need to protect your applications from modern cyber threats.`,
      gif: "/icons/services_icons/s5.gif",
      image: "/images/services/webtesting.png",
      technologies: ["Nmap", "Hydra", "Nikto", "Burp Suite", "Qualys"],
    },
  ];
  const [courses, setCourses] = useState([
    {
      id: "wapt",
      image: "/images/c1.jpg",
      category: "Cyber Security",
      rating: 3,
      courseName: "Web Application Penetration Testing",
      courseInfo:
        "Embark on a thrilling journey into the shadowy realm of cybercrime, and learn to exploit web application.",
      skills: ["Penetration Testing", "Exploit"],
      courseContent: [
        {
          title: "What is Web Application Penetration Testing?",
          subtopics: [
            "Definition and Scope",
            "Types of Web Applications",
            "Importance of Web Application Security",
          ],
        },
        {
          title: "Attacker Mindset",
          subtopics: [
            "Motivation and Goals of Attackers",
            "Common Attack Vectors",
            "Threat Modeling and Risk Assessment",
          ],
        },
        {
          title: "Legal and Ethical Considerations",
          subtopics: [
            "Legal Frameworks and Regulations (e.g., OWASP Code of Conduct)",
            "Responsible Disclosure Practices",
            "Obtaining Authorization for Penetration Testing",
          ],
        },
        {
          title: "Reconnaissance & Information Gathering",
          subtopics: [
            "Google Hacking",
            "Social Media Research",
            "Domain Information (WHOIS, DNS records)",
            "Port Scanning",
            "Service Enumeration",
            "Directory Brute-forcing",
          ],
        },
        {
          title: "Vulnerability Scanning & Exploitation",
          subtopics: [
            "Vulnerability Identification (SQL Injection, XSS, CSRF, etc.)",
            "Vulnerability Verification and Exploitation",
          ],
        },
        {
          title: "Web Application Attacks",
          subtopics: [
            "SQL Injection",
            "Command Injection",
            "OS Command Injection",
            "Reflected XSS",
            "Stored XSS",
            "DOM-based XSS",
            "CSRF Tokens",
            "Preventing CSRF Attacks",
            "Weak Passwords",
            "Session Hijacking",
            "Improper Authentication",
            "Default Configurations",
            "Unpatched Systems",
            "Misconfigured Servers",
            "Predictable File Names",
            "Insecure URLs",
            "Storing Sensitive Data (Passwords, Credit Cards)",
            "Insecure Data Transmission",
            "Authorization Issues",
            "Improper Role-Based Access Control",
            "Exploiting XML Parsers",
            "Attacking Internal Systems",
          ],
        },
        {
          title: "Web Application Firewalls (WAF)",
          subtopics: [
            "WAF Concepts and Deployment",
            "Evasion Techniques",
            "Bypassing WAFs",
          ],
        },
        {
          title: "Setting up a Vulnerable Lab Environment",
          subtopics: [
            "Virtual Machines (VMs)",
            "Docker Containers",
            "Vulnerable Web Applications (DVWA, OWASP BWA)",
          ],
        },
        {
          title: "Guided Lab Exercises",
          subtopics: [
            "Practical Exercises on each Vulnerability Type",
            "Exploitation Techniques and Mitigation Strategies",
            "Real-world Case Studies and Analysis",
          ],
        },
        {
          title: "Expert Guidance & Mentorship",
          subtopics: [
            "Q&A Sessions",
            "Code Reviews",
            "Personalized Feedback",
            "Troubleshooting Assistance",
          ],
        },
        {
          title: "Penetration Testing Report Structure",
          subtopics: [
            "Executive Summary",
            "Methodology",
            "Findings and Vulnerabilities",
            "Risk Assessment and Impact",
            "Recommendations and Mitigation Strategies",
          ],
        },
        {
          title: "Report Writing Best Practices",
          subtopics: [
            "Clear and Concise Language",
            "Professional Presentation",
            "Evidence and Screenshots",
            "Risk Assessment and Impact",
            "Vulnerability Scoring (e.g., CVSS)",
          ],
        },
      ],
      assessments: [
        {
          ass_title: "Lab Assignments",
          ass_desc: "Regular hands-on exercises and challenges.",
        },
      ],
    },
    {
      id: uuidv4(),
      image: "/images/c2.png",
      category: "Web Development",
      rating: 4.5,
      courseName: "Build User Interface",
      courseInfo:
        "Learn how to apply User Experience (UX) principles to your website designs.",
      skills: ["Research", "UI UX"],
      courseContent: [
        {
          title: "Introduction to UI Design",
          subtopics: [
            "What is UI Design?",
            "UI Design Principles",
            "Tools for UI Design",
            "Creating Wireframes",
          ],
        },
        {
          title: "UX Research and Strategy",
          subtopics: [
            "User Research Techniques",
            "Personas and Empathy Maps",
            "Journey Mapping",
            "User Testing",
          ],
        },
        {
          title: "Web Development Basics",
          subtopics: [
            "HTML and CSS Fundamentals",
            "Responsive Web Design",
            "Flexbox and Grid",
            "Intro to JavaScript",
          ],
        },
        {
          title: "Backend Development with Node.js",
          subtopics: [
            "Setting up a Node.js Server",
            "Express.js Framework",
            "Working with Databases",
            "RESTful APIs",
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      image: "/images/c3.png",
      category: "Backend Development",
      rating: 5,
      courseName: "Backend Domination",
      courseInfo:
        "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      skills: ["Web Development", "Logic Building"],
      courseContent: [
        {
          title: "Introduction to UI Design",
          subtopics: [
            "What is UI Design?",
            "UI Design Principles",
            "Tools for UI Design",
            "Creating Wireframes",
          ],
        },
        {
          title: "UX Research and Strategy",
          subtopics: [
            "User Research Techniques",
            "Personas and Empathy Maps",
            "Journey Mapping",
            "User Testing",
          ],
        },
        {
          title: "Web Development Basics",
          subtopics: [
            "HTML and CSS Fundamentals",
            "Responsive Web Design",
            "Flexbox and Grid",
            "Intro to JavaScript",
          ],
        },
        {
          title: "Backend Development with Node.js",
          subtopics: [
            "Setting up a Node.js Server",
            "Express.js Framework",
            "Working with Databases",
            "RESTful APIs",
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      image: "/images/c4.jpg",
      category: "Programming",
      rating: 4,
      courseName: "JavaScript Essentials",
      courseInfo:
        "Master JavaScript, the essential language for web development, and build interactive websites.",
      skills: ["Web Development", "JavaScript", "DOM Manipulation", "APIs"],
      courseContent: [
        {
          title: "Introduction to UI Design",
          subtopics: [
            "What is UI Design?",
            "UI Design Principles",
            "Tools for UI Design",
            "Creating Wireframes",
          ],
        },
        {
          title: "UX Research and Strategy",
          subtopics: [
            "User Research Techniques",
            "Personas and Empathy Maps",
            "Journey Mapping",
            "User Testing",
          ],
        },
        {
          title: "Web Development Basics",
          subtopics: [
            "HTML and CSS Fundamentals",
            "Responsive Web Design",
            "Flexbox and Grid",
            "Intro to JavaScript",
          ],
        },
        {
          title: "Backend Development with Node.js",
          subtopics: [
            "Setting up a Node.js Server",
            "Express.js Framework",
            "Working with Databases",
            "RESTful APIs",
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      image: "/images/c5.jpg",
      category: "Data Science",
      rating: 5,
      courseName: "Python for Data Analysis",
      courseInfo:
        "Learn Python to analyze data, create visualizations, and build machine learning models.",
      skills: ["Python", "Data Analysis", "Pandas", "Machine Learning"],
      courseContent: [
        {
          title: "Introduction to UI Design",
          subtopics: [
            "What is UI Design?",
            "UI Design Principles",
            "Tools for UI Design",
            "Creating Wireframes",
          ],
        },
        {
          title: "UX Research and Strategy",
          subtopics: [
            "User Research Techniques",
            "Personas and Empathy Maps",
            "Journey Mapping",
            "User Testing",
          ],
        },
        {
          title: "Web Development Basics",
          subtopics: [
            "HTML and CSS Fundamentals",
            "Responsive Web Design",
            "Flexbox and Grid",
            "Intro to JavaScript",
          ],
        },
        {
          title: "Backend Development with Node.js",
          subtopics: [
            "Setting up a Node.js Server",
            "Express.js Framework",
            "Working with Databases",
            "RESTful APIs",
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      image: "/images/c6.jpg",
      category: "Marketing",
      rating: 4,
      courseName: "Digital Marketing Fundamentals",
      courseInfo:
        "Understand the basics of SEO, social media, and analytics to drive business growth online.",
      skills: ["SEO", "Content Marketing", "Analytics", "Social Media"],
      courseContent: [
        {
          title: "Introduction to UI Design",
          subtopics: [
            "What is UI Design?",
            "UI Design Principles",
            "Tools for UI Design",
            "Creating Wireframes",
          ],
        },
        {
          title: "UX Research and Strategy",
          subtopics: [
            "User Research Techniques",
            "Personas and Empathy Maps",
            "Journey Mapping",
            "User Testing",
          ],
        },
        {
          title: "Web Development Basics",
          subtopics: [
            "HTML and CSS Fundamentals",
            "Responsive Web Design",
            "Flexbox and Grid",
            "Intro to JavaScript",
          ],
        },
        {
          title: "Backend Development with Node.js",
          subtopics: [
            "Setting up a Node.js Server",
            "Express.js Framework",
            "Working with Databases",
            "RESTful APIs",
          ],
        },
      ],
    },
  ]);

  const [serviceDetails, setServiceDetails] = useState(serviceData);

  return (
    <CourseContext.Provider
      value={{ courses, setCourses, serviceDetails, setServiceDetails }}
    >
      {children}
    </CourseContext.Provider>
  );
};
