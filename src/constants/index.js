import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  ruby,
  nodejs,
  mongodb,
  git,
  scoreboard,
  dashboard,
  pace,
  ffc,
  vue
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Bootcamp Grad",
    icon: mobile,
  }
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Ruby",
    icon: ruby,
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
    name: "git",
    icon: git,
  },
  {
    name: "vue",
    icon: vue,
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Foundation Finance",
    icon: ffc,
    iconBg: "#fff",
    date: "October 2021 - Present",
    points: [
      "Developed and implemented innovative features for a web app, resulting in a 30% increase in loan applications submitted by dealers.",
      "Collaborated with cross-functional teams to design and implement secure authentication and authorization protocols for the web services, reducing security vulnerabilities by 40%.",
      "Joined forces with different departments to gather requirements and design user-friendly interfaces for the web services, resulting in a 20% increase in user satisfaction."
    ],
  },
  {
    title: "Lab Analyst",
    company_name: "Pace Analytical",
    icon: pace,
    iconBg: "#fff",
    date: "Jan 2020 - October 2021",
    points: [
      "Conducted comprehensive physical testing on over 100 medical products, ensuring compliance with industry standards and regulations.",
      "Implemented new testing protocols that resulted in a 20% reduction in product failure rates, improving overall product quality.",
      "Worked jointly with diverse teams to analyze test data and identify areas for improvement, leading to a 15% increase in product performance."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Golf Scoreboard",
    description:
      "Designed and developed a dynamic golf scoreboard app enabling users to effortlessly organize tournaments, manage scorecards, and view real-time leaderboards for an enhanced golfing experience.",
    tags: [
      {
        name: "rubyOnRails",
        color: "pink-text-gradient",
      },
      {
        name: "vueJS",
        color: "green-text-gradient",
      }
    ],
    image: scoreboard,
    source_code_link: "https://github.com/SymensJeffrey/golf_api",
  },
  {
    name: "Dashboard",
    description:
      "Crafted a modern, multifaceted dashboard featuring three pages, four interactive applications, and seven comprehensive charts for a data-driven and user-friendly experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: dashboard,
    source_code_link: "https://github.com/SymensJeffrey/dashboard",
  }
];

export { services, technologies, experiences, testimonials, projects };