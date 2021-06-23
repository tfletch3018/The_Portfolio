// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Tonya",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    `I am a former hospitality and service industry professional with a background in Business Administration, and
    recent graduate of the Full-Stack Bootcamp hosted by the University of Pennsylvania. Effective at utilizing
    the strong organizational and planning skills attained from my experience as a customer service manager, as well as
    my creativity and desire to be challenged by a new endeavor.  Known to have an incredibly strong work ethic and the
    ability to place intense focus on the task at hand with the goal of seeing it through to completion.`,
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
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
    name: "Git",
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
    name: "Database",
    faClass: "fas fa-database",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "babysittr",
    skills: ["JS: 86.0%, HTML: 8.9%, CSS: 5.1%"],
    url: "https://github.com/tfletch3018/babysittr",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Workout Tracker",
    skills: ["JS: 60.5%, CSS: 21.4%, HTML: 18.1%"],
    url: "https://github.com/tfletch3018/Workout-Tracker",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Neighborly",
    skills: ["JS: 90.8%, CSS: 7.3%, HTML: 1.9%"],
    url: "https://github.com/tfletch3018/Neighborly",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Note Taker",
    skills: ["JS: 59.9%, HTML: 27.8%, CSS: 12.3%"],
    url: "https://github.com/tfletch3018/Note-Taker",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "The Employee Directory",
    skills: ["JS: 76.3%, HTML: 14.2%, CSS: 9.5%"],
    url: "https://github.com/tfletch3018/the-employee-directory",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Offline Budget Trackers",
    skills: ["JS: 80.3%, HTML: 15.0%, CSS: 4.7%"],
    url: "https://github.com/tfletch3018/Offline-Budget-Trackers",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Hobbies and Random Fun Stuff";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "My Loves 😻",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "My other love...🎹🥰",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "I love to travel! ✈️😉(gift shop in St. Croix)",
    // url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Tonya Fletcher",
  contactUrl: "https://form.jotform.com/211736638235155",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/tfletch3018",
  facebook: "https://www.facebook.com/tonya.r.fletcher/",
  linkedin: "https://www.linkedin.com/in/tonya-fletcher-733a9450/",
  instagram: "https://www.instagram.com/tfletch4504/",
  resume: "https://drive.google.com/file/d/1W90BZ0E5BycSrw_Lay45K2oBcgb4K9Hh/view?usp=sharing",
};
// Dont change anything here
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
