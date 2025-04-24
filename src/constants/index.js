import project1 from "../assets/projects/wordFlow.png";
import project2 from "../assets/projects/quizGame.png";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/netflix.png";

export const HERO_CONTENT = `Hi I'm a second year Undergraduate student currently pursuing Computer 
Science and Airtificial Intelligence. I am a passionate full stack developer with a knack for crafting 
robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in 
front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, 
PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive 
business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating 
efficient and user-friendly web applications. With 5 years of professional experience, I have worked with 
a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey 
in web development began with a deep curiosity for how things work, and it has evolved into a career where 
I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and 
enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying 
active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using 
    JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated 
    with MongoDB databases. Collaborated with stakeholders to define project 
    requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using 
    Next.js and React. Worked closely with backend developers to integrate frontend 
    components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, 
    React.js, and Node.js. Designed and implemented RESTful APIs for data 
    communication. Collaborated with cross-functional teams to deliver 
    high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using 
    JavaScript, React.js, and Node.js. Managed databases and implemented 
    data storage solutions using MongoDB. Worked closely with product 
    managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Blogging Platform",
    image: project1,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React.js", "Express", "Firebase", "Tailwind CSS" , "FireStore"],
    about : ["View live", "View code"],
     // Add the live site link and code link here
    links: ["https://word-flow.vercel.app/demo", "https://github.com/sourabh14022004/Word-Flow"],
  },
  {
    title: "Amazing Quiz App",
    image: project2,
    description:
      "A dynamic quiz app that allows users to create quizzes with customizable questions and options, adaptable for interactive games.",
    technologies: ["HTML", "CSS", "JavaScript"],
    about : ["View live", "View code"],
    links: ["https://sourabh14022004.github.io/Amazing-Quiz-App/", "https://github.com/sourabh14022004/Amazing-Quiz-App"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    about : ["View live", "View code"],
    links: ["https://word-flow.vercel.app/demo", "https://github.com/sourabh14022004/Word-Flow"],
  },
  {
    title: "Netflix Clone",
    image: project4,
    description:
      "Responsive design that allows users to browse, search, and stream content.",
    technologies: ['React', "Tailwind CSS", "TMDB API", "Vercel deploy", "Firebase", "vanilla CSS"],
    about : ["View live", "View code"],
    links: ["https://netflix-clone-check-bi91itkoy-sourabh14022004s-projects.vercel.app/", "https://github.com/sourabh14022004/Netflix.clone"],
  },
];

export const CONTACT = {
  address: "West Bengal, India, 735224 ",
  phoneNo: "+91 963 557 9746",
  email: "sourabhsorkarmng19@example.com",
};
