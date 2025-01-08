import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
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

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};
