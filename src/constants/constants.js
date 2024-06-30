import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  tesla,
  shopify,
  ecommerce,
  pong,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ICT INTERN",
    company_name: "REGENT MANAGEMENT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2022 ",
    points: [
      "Enhanced user interface resulting in 20% increase in user engagement, driving product sustainability and continuous improvement.",
      "Proficient in relational database systems and Object-Oriented Programming(OOP) principles, facilitating the development of dynamic and data-driven web applications.",
    "Proficient in frontend technologies including TypeScript, React, GraphQL, and Tailwind, with a track record of leveraging these tools to develop polished user Interfaces and enhance user experiences.",
    "Worked with cross-functional teams to develop and integrate software features,leading to a 15% improvement in product efficiency and scalability",
  ],
  },
  {
    title: "JUNIOR SOFTWARE DEVELOPER",
    company_name: "SYSTEM REENGINEERED LIMITED",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2022 - August 2022 ",
    points: [
      "Implementing Dependency Injection and Repository Design Patterns in ASP.NET CORE",
      "Demonstrated proficiency in developing applications using C# and WPF, as well as familiarity with other desktop application frameworks",
      "Experienced in utilizing backend technologies such as Postgres, Redis, and GraphQL, with adaptability to work with other backend languages and frameworks as required.",
      "Microsoft Dynamics NAV ERP functional processes. Developed and maintained high-quality software solutions, meeting project requirements and timelines.",
    ],
  },
  {
    title: "PROJECT MANAGER INTERN",
    company_name: "NG-CDF MACHAKOS TOWN ",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2024 - June 2024",
    points: [
      "Built and developed project teams, enhancing performance by providing clear purpose, direction, and motivation, which increased overall team productivity by 15%",
      "Analyzed project status and revised scope, schedule, or budget as necessary,ensuring project requirements were met and reducing project overruns by 20%.",
      "Established and maintained relationships with client stakeholders, providing day-today contact on project status and changes, which led to a 30% improvement in client satisfaction scores",
      "Structured and managed integrated, multitrack performance databases for digital print, social, broadcast, and experiential projects, improving data accessibility and utilization by 25%.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Email: erono@sysre.co.ke Phone: +254708002921",
    name: "Edwin Rono",
    designation: "Senior Software Developer",
    company: "System Reenginnered Limited",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    testimonial:
      "Email:info@regent-mgt.com Phone: +254722691641",
    name: "Mr Humprey",
    designation: "ICT officer",
    company: "Regent Management",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    testimonial:
      "Email: nKimanzi@gmail.com Phone: +254720528337",
    name: "Nicholas Kimanzi",
    designation: "Fund Manger",
    company: "NG-CDF Machakos",
    image: "https://randomuser.me/api/portraits/men/87.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "Web-based platform that allows users to browse a variaty of clothing items and also to buy selected items and rate each product ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Java Ping Pong Game",
    description:
      "Java 2D application that allows the user to hit a ball with the paddle and compete with the AI to see who scores the highest. After every score the paddle and ball reseet their positions",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: "User Interface",
        color: "pink-text-gradient",
      },
    ],
    image: pong,
    source_code_link: "https://github.com/",
  },
  {
    name: "Unity Flappy bird 2D",
    description:
      "A Unity engine application where the user controls a bird and tries to manuver through obstacles without colliding. When the bird collides the score is reset and the Play game interface loads.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "User Interface",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
