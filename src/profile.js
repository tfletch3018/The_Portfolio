// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};

const header = {
  name: "Tonya",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};

const section2title = "About Me";
const about = {
  paragraph:
    `I am a former hospitality and service industry professional with a background in Business Administration, and
    recent graduate of the Full-Stack Bootcamp hosted by the University of Pennsylvania. Effective at utilizing
    the strong organizational and planning skills attained from my experience as a customer service manager, as well as
    my creativity and desire to be challenged by a new endeavor.  Known to have an incredibly strong work ethic and the
    ability to place intense focus on the task at hand with the goal of seeing it through to completion.`,
};

const skillsBar = [
  {
    name: "HTML",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node JS",
    faClass: "fab fa-node-js",
  },
  {
    name: "Github",
    faClass: "fab fa-git",
  },
  {
    name: "Bootstrap",
    faClass: "fab fa-bootstrap",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
  {
    name: "MySQL",
    faClass: "fas fa-database",
  },
];

const section3Title = "Projects";
const projects = [
  {
    id: "project1",
    name: "myMusic",
    skills: ["JS: 52.0%, HTML: 24.5%, CSS: 23.5%"],
    deployed: "https://main.d3oxu15funiko7.amplifyapp.com/",
    url: "https://github.com/tfletch3018/myMusic",
  },
  {
    id: "project2",
    name: "babysittr",
    skills: ["JS: 86.0%, HTML: 8.9%, CSS: 5.1%"],
    deployed:"https://tfletch3018.github.io/babysittr/",
    url: "https://github.com/tfletch3018/babysittr",
  },
  {
    id: "project3",
    name: "Weather Dashboard",
    skills: ["JS: 64.1%, HTML: 25%, CSS: 10.9%"],
    deployed:"https://tfletch3018.github.io/Weather-Dashboard/",
    url: "https://github.com/tfletch3018/Weather-Dashboard",
  },
  {
    id: "project4",
    name: "The Employee Directory",
    skills: ["JS: 76.3%, HTML: 14.2%, CSS: 9.5%"],
    deployed:"https://tfletch3018.github.io/the-employee-directory/",
    url: "https://github.com/tfletch3018/the-employee-directory",
  },
  {
    id: "project5",
    name: "The Portfolio",
    skills: ["JS: 57.7%, CSS: 35.0%, HTML: 7.3%"],
    deployed:"https://tfletch3018.github.io/The_Portfolio/",
    url: "https://github.com/tfletch3018/The_Portfolio",
  },
  {
    id: "project6",
    name: "Offline Budget Trackers",
    skills: ["JS: 80.3%, HTML: 15.0%, CSS: 4.7%"],
    deployed:"https://agile-bastion-05761.herokuapp.com/",
    url: "https://github.com/tfletch3018/Offline-Budget-Trackers",
  },
];

const section4Title = "Interests";
const miscellaneous = [
  {
    id: "misc1",
    name: "My Loves 😻",

  },
  {
    id: "misc2",
    name: "My other love...🎹🥰",

  },
  {
    id: "misc3",
    name: "I love to travel! ✈️😉",
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I have a passion for creating solutions that address the challenges of today.  Let's connect!",
  copyright: "Tonya Fletcher",
  contactUrl: "https://form.jotform.com/211736638235155",
};

const social = {
  github: "https://github.com/tfletch3018",
  facebook: "https://www.facebook.com/tonya.r.fletcher/",
  linkedin: "https://www.linkedin.com/in/tonya-fletcher-733a9450/",
  instagram: "https://www.instagram.com/tfletch4504/",
  tiktok: "https://www.tiktok.com/@tfletche3018",
  resume: "https://drive.google.com/file/d/131RLw2MfSL49xRvL0DOoKMkeIvbqPRRE/view?usp=drive_link",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};