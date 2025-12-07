// src/data/portfolioData.js
export const portfolioData = {
  personal: {
    name: "Md Aiyaz",
    title: "Full Stack Developer",
    email: "mdaiyaz308@gmail.com",
    phone: "+91-9523420887",
    location: "Bhagalpur, India",
    bio: "Passionate web developer with 1 year of experience in building modern, responsive websites. I hold an MCA and BCA degree, complemented by various industry certifications. I specialize in React, JavaScript, and full-stack development, with expertise in creating user-friendly digital solutions."
  },  
  socials: [
    { name: "GitHub", url: "https://github.com/Mdaiyaz868", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mdaiyaz09/", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://twitter.com/mdaiyaz09", icon: "FaTwitter" }
  ],
  
  education: [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Lovely Professional University",
      year: "2022-2024",
      grade: "73.90%"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "G.B College Naugachia Bhagalpur",
      university: "T.M.B.U Bhagalpur",
      year: "2017-2020",
      grade: "62.61%"
    },
    {
      degree: "12th Grade",
      institution: "S.D College Gauripur Bihpur",
      board: "B.S.E.B Patna",
      year: "2016",
    },
    {
      degree: "10th Grade",
      institution: "N.K.H.S Jhandapur Bihpur Bhagalpur",
      board: "B.S.E.B Patna",
      year: "2014",
    }
  ],

  certifications: [  
    { name: "The Full Stack", issuer: "IBM", year: "2023", image: "/images/Certificate/IBM_Full_Stack_Software_Developer.jpg" },
    { name: "The Full Stack", issuer: "Meta", year: "2023", image: "/images/Certificate/The_Full_Stack.jpg" },
    { name: "Python 101 for Data Science", issuer: "Meta", year: "2023", image: "/images/Certificate/Python_101_for_Data_Science.jpg" },
    { name: "Introduction to Web Development with HTML, CSS, JavaScript", issuer: "IBM", year: "2023", image: "/images/Certificate/Introduction_to_web_Development_With_HTML_CSS_Javascript.jpg" },
    { name: "Introduction to Front End", issuer: "Meta", year: "2023", image: "/images/Certificate/Introduction_to_front_end.jpg" },
    { name: "Developing Back-end Apps", issuer: "IBM", year: "2023", image: "/images/Certificate/Developing_Backend_apps.jpg" },
    { name: "Developing Front-end Apps", issuer: "IBM", year: "2023", image: "/images/Certificate/Developing_frontend_apps.jpg" },
    { name: "HTML, CSS and JavaScript", issuer: "Coursera", year: "2023", image: "/images/Certificate/HTML_CSS_and_javascript_for_web_development.jpg" },
    { name: "Git and Github", issuer: "IBM", year: "2023", image: "/images/Certificate/Git_and_Github.png" },
    { name: "C for Everyone", issuer: "Coursera", year: "2022", image: "/images/Certificate/C_for_every_one.jpg" },
    { name: "C++ Programming", issuer: "Coursera", year: "2022", image: "/images/Certificate/Cpp.jpg" },
    { name: "Crash Course Python", issuer: "Google", year: "2023", image: "/images/Certificate/Crash_Course_Pyhton.jpg" },
    { name: "Java Programming", issuer: "Coursera", year: "2022", image: "/images/Certificate/Java_Programming.jpg" },
    { name: "Cyber Attack", issuer: "Coursera", year: "2023", image: "/images/Certificate/Cyber_attack.jpg" },
    { name: "Python", issuer: "Coursera", year: "2022", image: "/images/Certificate/Python.jpg" },
    { name: "Managing Linux System", issuer: "Coursera", year: "2023", image: "/images/Certificate/Managing_Linux_System.jpg" }
  ],

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
    backend: ["Laravel", "PHP", "Node.js", "Python"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Git", "VS Code", "Postman", "Docker"]
  },

  experience: [
    {
      title: "Full Stack Developer",
      company: "Gyansarover Group of Education",
      duration: "October 2025 - Present",
      responsibilities: [
        "Designed and developed multiple educational projects using PHP, Bootstrap, JavaScript, HTML, and CSS",
        "Implemented responsive and user-friendly interfaces using Bootstrap and modern web technologies",
        "Built backend applications with PHP handling all server-side logic and business processes",
        "Managed database operations with MySQL for data storage and retrieval",
        "Handled both frontend and backend development for complete project lifecycle",
        "Created interactive learning modules with dynamic functionality",
        "Optimized website performance and ensured cross-browser compatibility"
      ]
    },
    {
      title: "Backend Developer & Team Leader",
      company: "Make My Bharat Yatra",
      duration: "November 2024 - April 2025",
      responsibilities: [
        "IT Team Leadership: Directed the IT team to ensure smooth coordination and on-time delivery of all project milestones",
        "API Integration and Optimization: Integrated and optimized APIs for Bus, Car, Hotel, Flight, and payment services",
        "Website Development and Maintenance: Spearheaded the development and maintenance of the company's website",
        "Technical Strategy Execution: Designed and implemented technical solutions to unify travel services",
        "Team Mentorship: Guided team members through technical challenges",
        "Infrastructure Management: Managed IT infrastructure and implemented cybersecurity measures",
        "Continuous Innovation: Conducted research and incorporated industry trends"
      ]
    }
  ],

  projects: [
    {
      title: "Gyansarover Education Platform",
      description: "An educational organization website providing interactive learning modules, course details, and student management features.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
     
    },
     {
      title: "Make My Bharat Yatra",
      description: "A comprehensive tour and travel website featuring booking system with bus, car, hotel, and flight services along with integrated payment gateway.",
      technologies: ["Laravel", "MySQL", "PHP", "Bootstrap"],
     
    },
    {
      title: "Automobile E-Commerce Platform",
      description: "Developed a full-stack e-commerce platform for automobile parts using PHP, MySQL, JavaScript. Implemented secure user authentication, product management, and real-time inventory tracking.",
      technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "XAMPP", "Git"],
      
    },
   
    
    {
      title: "Online Quiz System",
      description: "Designed and developed an online quiz system with user-friendly interface for creating and taking quizzes with responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
     
    },
    {
      title: "Criminal Record Management System",
      description: "Built a criminal and officer record system using Java and Swing. Allows users to add, edit, delete, and search records with report generation.",
      technologies: ["Java", "Swing", "Xampp"],
     
    },
    {
      title: "Brain Trivia - Memory Game",
      description: "Built a memory game using Java to test IQ with questions on Java, aptitude, DBMS, and reasoning topics.",
      technologies: ["Java", "Swing"],
      
    }
  ],

  publications: [
    {
      img: "/images/testimonials/Jurnal.png",
      title: "Beyond the Showroom: Exploring the Virtual Landscape of Motorcycle Parts",
      journal: "International Journal of Scientific Research in Engineering & Management (IJSREM)",
      highlights: [
        "Published in peer-reviewed international journal",
        "Indexed in major databases",
        "High impact factor recognition"
      ]
    }
  ],

  testimonials: [
    {
      img: "/images/testimonials/testimonials-1.jpg"
    },
    {
      img: "/images/testimonials/testimonials-2.jpg"
    },
    {
      img: "/images/testimonials/testimonials-3.jpg"
    },
    {
      img: "/images/testimonials/testimonials-4.jpg"
    },
    {
      img: "/images/testimonials/testimonials-5.jpg"
    }
  ]

};