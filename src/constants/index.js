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
    year: "2024 - Present",
    role: "Full Stack Developer (Student)",
    company: "Self-Learning / Personal Projects",
    description: `Focused on mastering advanced Data Structures and Algorithms (DSA) using Python, 
    with an emphasis on time and space complexity analysis. Developed several full-stack web applications 
    using the MERN stack (MongoDB, Express.js, React.js, Node.js), and integrated modern styling practices 
    with Tailwind CSS. Built RESTful APIs, implemented authentication, and worked with relational databases 
    using MySQL. Continuously refining coding skills and exploring backend optimization techniques.`,
    technologies: ["Python", "Advance_Dsa", "React.js", "Node.js", "Express.js", "Tailwind_CSS", "MySQL", "Firebase"],
  },
  {
    year: "2023 - 2024",
    role: "Web Developer (Student)",
    company: "University Coursework / Self-Learning",
    description: `Initiated journey into software development during the first year of B.Tech in Computer Science and 
    Artificial Intelligence. Gained foundational knowledge in Python programming, along with front-end 
    technologies like HTML, CSS, and JavaScript. Created static websites and simple interactive projects. 
    Explored basic data structures like arrays, stacks, queues, and linked lists, laying a strong base 
    for deeper algorithmic understanding. Participated in coding practice sessions and contributed to 
    peer learning initiatives.`,
    technologies: ["Python", "Dsa", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Postman", "Figma"],
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
