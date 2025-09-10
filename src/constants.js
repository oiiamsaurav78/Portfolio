// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import college from './assets/education_logo/college.jpg';

import skp from './assets/education_logo/skp.png';

// Project Section Logo's
import drumkit from './assets/work_logo/drumkit.png';
import evcharge from './assets/work_logo/evcharge.png';
import GameSelection from './assets/work_logo/GameSelection.png';
import Gridpattern from './assets/work_logo/Gridpattern.png';
import pfm from './assets/work_logo/pfm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: college,
      school: "National Institute of Technology Andhra Pradesh",
      date: "2018 - 2020",
      grade: "7.18 CGPA",
      desc: "I have completed my B.Tech in Electrical and Electronics Engineering from NIT Andhra Pradesh. During my time at NIT, I built a strong foundation in programming, software development, and computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops, projects, and technical events, which enhanced my skills and knowledge. My experience at NIT Andhra Pradesh has been instrumental in shaping my technical abilities and professional growth.",
      degree: "B.Tech in Electrical and Electronics Engineering"
    },
    
    {
      id: 1,
      img: skp,
      school: "S.K.P Vidya Vihar Bhagalpur",
      date: "2018 - March 2020",
      grade: "81%",
      desc: "I completed my class 12 education from S.K.P Vidya Vihar Bhagalpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)Computer Science.",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: skp,
      school: "S.K.P Vidya Vihar Bhagalpur",
      date: "2017 - 2012",
      grade: "89.6%",
      desc: "I completed my class 10 education from S.K.P Vidya Vihar Bhagalpur, under the CBSE board.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
  id: 0,
  title: "Personal Finance Manager",
  description:
    "A feature-rich web application built with Node.js, Express, EJS, and MongoDB that helps users take control of their finances. It allows seamless expense tracking, budget management, and visual insights through interactive dashboards. With secure authentication and a clean, user-friendly interface, this tool makes financial planning simple and efficient.",
  image: pfm ,// ✅ replace with your actual logo variable
  tags: ["Node.js", "Express", "EJS", "MongoDB", "JavaScript"],
  github: "https://github.com/oiiamsaurav78/PersonalFinanceManager2",
  webapp: "https://github.com/oiiamsaurav78/PersonalFinanceManager2",
},
    {
  id: 1,
  title: "EV Charging Station Locator",
  description:
    "A responsive and user-friendly web application that helps users easily locate nearby EV charging stations. Built with HTML, CSS, and JavaScript, the platform ensures smooth navigation across devices with a clean UI, making it convenient for EV owners to plan their trips efficiently.",
  image: evcharge, // ✅ replace with your actual logo variable
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/oiiamsaurav78/Evchargingwebsite",
  webapp: "https://oiiamsaurav78.github.io/EVChargewheel2/",
},
    {
  id: 2,
  title: "Drum-Kit Game",
  description:
    "An interactive web-based game where users can play drum sounds using either mouse clicks or keyboard keys. Built with JavaScript, HTML, and CSS, it provides an engaging and fun way to simulate a virtual drum kit directly in the browser.",
  image: drumkit, // ✅ replace with your actual logo variable
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/oiiamsaurav78/drumkit2",
  webapp: "https://oiiamsaurav78.github.io/drumkit2/",
},
{
  id: 3,
  title: "Game Selection Page",
  description:
    "A React-based game hub that allows users to explore and select different mini-games from a centralized interface. Designed with responsive layouts and a clean UI, it makes accessing and switching between games seamless and user-friendly.",
  image: GameSelection, // ✅ replace with your actual logo variable
  tags: ["React.js", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/oiiamsaurav78/GameSelectionPage",
  webapp: "https://game-selection-page-6ou5nauvp-saurav-kumars-projects-7608b3d0.vercel.app/",
},
{
  id: 4,
  title: "Grid-Pattern Game",
  description:
    "A browser-based logic game that generates dynamic grid patterns with continuous X-designs. Players can interact with the grid and explore pattern-based visuals, making it both fun and a great exercise in creative coding.",
  image: Gridpattern, // ✅ replace with your actual logo variable
  tags: ["React.js", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/oiiamsaurav78/Grid-Pattern",
  webapp: "https://game-selection-page-mwla-bq0fd13zh.vercel.app/",
}
// future add here all rhr project{}
  ];  
  // Leadership Section
// Leadership Section
export const LeadershipInfo = [
  {
    id: 0,
    title: "Promotion Team Lead",
    org: "College Tech Fest",
    desc: "Led the promotion team for the annual college fest for 2 consecutive years, driving outreach campaigns and boosting event participation.",
  },
  {
    id: 1,
    title: "Core Member",
    org: "Entrepreneurship & Innovation Cell",
    desc: "Organized and managed a startup expo with 500+ participants, coordinating logistics and ensuring smooth execution.",
  },
  {
    id: 2,
    title: "Design Team Lead",
    org: "College Fest",
    desc: "Headed the design team, creating visual assets, posters, and stage setups that enhanced the overall fest experience.",
  },
  {
    id: 3,
    title: "Freelance Video Editor",
    org: "Independent Projects",
    desc: "Delivered professional video editing services for multiple freelance clients, enhancing storytelling and brand impact.",
  },
];
