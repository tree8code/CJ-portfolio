import { FaSoundcloud } from "react-icons/fa";

const logotext = "CJ";
const meta = {
    title: "CJ Porter",
    description: "I'm CJ",
};

const introdata = {
    title: "I'm CJ Porter",
    animated: {
        first: "I love music",
        second: "Multidisciplanary creator",
        third: "Sustainable solutions",
        forth: "𖤓ᨒ↟❀☪︎"
    },
    description: "Community orientated mind with training in electrical engineering and permaculture. Thorough problem solver with a passion for building spaces that can hold visions and education for sustainable creation. Fueled by love of nature and music. Enthusiastic about collaboration and teamwork.",
    your_img_url: require("./assets/images/mountainman.jpeg"),
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Community orientated mind with training in electrical engineering and permaculture. Thorough problem solver with a passion for building spaces that can hold visions and education for sustainable creation. Fueled by love of nature and music. Enthusiastic about collaboration and teamwork.",
};

const worktimeline = [{
        jobtitle: "Music and plant Nerd",
        where: "Earth",
        date: "1995 - Present",
    },
    {
        jobtitle: "Live Sound Engineer",
        where: "Freelance",
        date: "2017 - Present",
    },
    {
        jobtitle: "Audio/Production Engineer",
        where: "Listen Inc.",
        date: "2017-2021",
    },
];

const skills = [{
        name: "Audio Processing",
        value: 90,
    },
    {
        name: "Sound Design",
        value: 70,
    },
    {
        name: "Music Theory",
        value: 80,
    },
    {
        name: "Ableton skillz",
        value: 75,
    },
    {
        name: "Audio Production",
        value: 85,
    },
];

const services = [{
        title: "Sound Design & Music Production",
        description: "Professional audio production, sound design, and music creation for various projects and events.",
    },
    {
        title: "Web Development",
        description: "Custom web applications and websites built with modern technologies and responsive design.",
    },
    {
        title: "Sustainable Solutions",
        description: "Implementing sustainable and eco-friendly solutions through technology and permaculture principles.",
    },
];

const dataportfolio = [{
        img: require("./assets/images/IMG_7820.jpeg"),
        description: "treeway",
        link: "https://soundcloud.com/treejmusic/treeway",
    },
    {
        img: require("./assets/images/IMG_4451.PNG"), 
        description: "Heart Warrior Ecstatic Dance ~ Earthshake 4.4.2025",
        link: "https://soundcloud.com/treejmusic/heart-warrior-ecstatic-dance-earthshake-4425",
    },
    {
        img: require("./assets/images/IMG_8052.JPG"),
        description: "Sirius Community ~ Spring Awakening Ecstatic Dance",
        link: "https://soundcloud.com/treejmusic/spring-awakening",
    },
    {
        img: require("./assets/images/IMG_7738 2.JPG"),
        description: "Melt 222 ~ TreeJ Journey",
        link: "https://soundcloud.com/treejmusic/melt-222-treej-journey",
    },
    {
        img: require("./assets/images/soundcraft.png"),
        description: "Web Based Audio Synthisizer - Built with Tesnsorflow.js",
        link: "https://tree8code.github.io/VI-WebApp/",
    },

];

const contactConfig = {
    YOUR_EMAIL: "tree8code@gmail.com",
    YOUR_FONE: "(617)-224-8317",
    description: "Feel free to contact me for any professional inquires or collaboration oppurtunties. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_xn3a3kk",
    YOUR_TEMPLATE_ID: "template_kxphqkw",
    YOUR_USER_ID: "zrtgszhl8A6Sy0qAa",
};

const socialprofils = {
    soundcloud: "https://soundcloud.com/treejmusic",
    github: "https://github.com/tree8code",
    facebook: "https://www.facebook.com/cj.porter.12/",
    linkedin: "https://www.linkedin.com/in/christopher-porter-111963a3/",
   
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};