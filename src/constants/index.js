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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
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
    title: "Web Developement",
    icon: web,
  },
  {
    title: "Database Management",
    icon: mobile,
  },
  {
    title: "Problem Solving ",
    icon: backend,
  },
  {
    title: "Version Control(git) ",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IBM Internship and Training Program",
    company_name: "IBM",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - May 2022",
    points: [
      "Gained hands-on experience in designing and building conversational AI chatbots to enhance user interaction and automate processes.",
      "Explored and utilized advanced AI tools to develop intelligent solutions, improving efficiency and scalability.",
      "Acquired knowledge in data analysis, visualization, and machine learning, applying these skills to real-world scenarios.",
      "Applied AI-driven problem-solving approaches to optimize workflows and derive actionable insights from data.",
    ],
    certificate_link: "https://www.credly.com/badges/d9f49ee2-e3c5-42c3-a396-91d790d9804a",
  },
  {
    title: "Java Certified on HackerRank",
    company_name: "HackerRank",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "19/07/2024",
    points: [
      "Demonstrated strong understanding of object-oriented programming, collections, and exception handling through HackerRank certification.",
      "Showcased ability to solve algorithmic challenges efficiently using Java, reinforcing analytical and logical thinking.",
      "Gained recognition for writing clean, optimized, and maintainable Java code.",
      "Certified on a globally recognized platform, validating technical expertise in Java programming.",
    ],
    certificate_link: "https://www.hackerrank.com/certificates/3f4658bcdf06",
  },
  {
    title: "SQL Certified on HackerRank",
    company_name: "HackerRank",
    icon: shopify,
    iconBg: "#383E56",
    date: "20/07/2024",
    points: [
      "Successfully achieved SQL certification, demonstrating expertise in query writing, data manipulation, and database management.",
      "Skilled in crafting optimized SQL queries to handle large datasets efficiently, ensuring high performance in data-driven applications.",
      "Experienced in analyzing complex database schemas and implementing solutions to solve real-world data challenges.",
      "The HackerRank SQL certification showcases validated skills, enhancing credibility for data-centric roles.",
    ],
    certificate_link: "https://www.hackerrank.com/certificates/a277cdc5da11?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
  },
  {
    title: "Full stack Developement",
    company_name: "Udemy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025",
    points: [
      "Acquired in-depth understanding of front-end and back-end development, including HTML, CSS, JavaScript, and frameworks like React and Node.js.",
      "Earned a recognized certification in web development, validating skills in building responsive and dynamic web applications.",
      "Gained hands-on experience through projects, developing user-friendly and scalable websites with modern technologies.",
      "Learned industry standards for web performance optimization, accessibility, and responsive design to deliver high-quality solutions.",
    ],
    certificate_link: "https://example.com/java-certification",
  },
];

const testimonials = [
  {
    testimonial:
      "To leverage my technical skills and passion for innovation to contribute meaningfully to the IT industry, solving real-world problems through technology while continuously evolving as a professional.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Deepen my expertise in cloud computing, artificial intelligence, and DevOps to stay at the forefront of technological advancements.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Contribute to the tech community through open-source projects and knowledge-sharing initiatives.   ",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Employee Management System",
    description:
      "Created a React-based Employee Management System using HTML, CSS, React  and local storage. The system allows admin task assignment, displays tasks on employee dashboards upon login, and includes secure login and logout functionality." , 

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Bhupendra263/",
    live_demo_link: "https://employee-management-system-orpin.vercel.app/",
  },
  {
    name: "Real Time Device Tracking App",
    description: "Developed a real-time device tracking application using Express, Node.js, Socket.io, and the Leaflet.js library. The app efficiently tracks and displays the current location of devices on an interactive map." , 
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Context API ",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io ",
        color: "pink-text-gradient",
      },
      {
        name: "Leaflet ",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Bhupendra263/",
    live_demo_link: "https://8c9b5xp9-3000.inc1.devtunnels.ms/",
  },
  {
    name: "Job Portal System -> Opportunity Sphere",
    description:
      "Created a MERN stack job portal website featuring admin job creation, user-friendly job browsing and searching, and advanced filtering options to enhance the job search experience for users.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs #NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Bhupendra263/",
    live_demo_link: "https://username.github.io/portfolio",
  },
  
];


export { services, technologies, experiences, testimonials ,  projects };