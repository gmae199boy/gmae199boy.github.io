/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kim Myunghun",
  title: "안녕하세요, 김명훈 입니다",
  subTitle: emoji(
    "3년 차 백엔드 개발자 입니다. 주로 Nodejs(Typescript, Express, Nestjs)를 사용하며, AWS(ECS 등), Docker 등을 사용하여 개발합니다. 최근에는 Rust와 쿠버네티스에 관심을 두고 있습니다."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gmae199boy",
  linkedin: "https://www.linkedin.com/in/myunghun-kim-1b88801a3/",
  gmail: "kim88594544@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ 웹/앱 서비스를 위한 백엔드 개발(Nodejs, Typescript, Express, Nestjs)"
    ),
    emoji("⚡ AWS를 이용한 서버 구축 및 배포(ECS, RDS, S3, CloudFront 등)"),
    emoji("⚡ 생산성 향상을 위한 프레임워크 및 도구 사용")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      iconPath: "icons/js-icon.png"
    },
    {
      skillName: "TypeScript",
      iconPath: "icons/ts-icon.png"
    },
    {
      skillName: "NodeJS",
      iconPath: "icons/nodejs-icon.png"
    },
    {
      skillName: "NestJS",
      iconPath: "icons/nestjs.png"
    },
    {
      skillName: "MySQL",
      iconPath: "icons/mysql.jpeg"
    },
    {
      skillName: "Express",
      iconPath: "icons/express.jpg"
    },
    {
      skillName: "Rust",
      iconPath: "icons/rust.png"
    },
    {
      skillName: "Docker",
      iconPath: "icons/docker.png"
    },
    {
      skillName: "AWS",
      iconPath: "icons/aws.png"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nihon University",
      logo: require("./assets/images/nihon.png"),
      subHeader: "경제학",
      duration: "2016 ~ 2020"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "Fingerlabs",
      companylogo: require("./assets/images/fingerlabs.png"),
      date: "2022.08 ~ 재직중",
      desc: "Fingerlabs에서 백엔드 엔지니어로 근무하고 있습니다. 주로 Nodejs, Typescript, Express, Nestjs를 사용하여 서비스를 개발, AWS로 배포하고 있습니다.",
      descBullets: [
        "NFT를 현실적인 BM으로 만들기 위한 서비스 개발",
        "영상 스트리밍 서비스 개발 및 운영"
      ]
    },
    {
      role: "Backend Engineer",
      company: "datalabs",
      companylogo: require("./assets/images/datalabs.png"),
      date: "2021.11 ~ 2022.06",
      desc: "블록체인 기반 서비스 개발",
      descBullets: [
        "프라이빗 블록체인 운영",
        "개인정보 디지털화 및 보안 서비스 개발",
        "수험생 수험증명서 관리 컨트랙트 개발"
      ]
    },
    {
      role: "Backend Engineer",
      company: "블록체인랩스",
      companylogo: require("./assets/images/blockchainlabs.png"),
      date: "2021.07 ~ 2021.11",
      desc: "블록체인 Layer2를 위한 영지식 증명에 관한 연구",
      descBullets: ["영지식 증명에 관한 모듈 개발"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/xclusive.png"),
      projectName: "Xclusive",
      projectDesc: "NFT 기반 영상 스트리밍 서비스",
      footerLink: [
        {
          name: "바로가기",
          url: "http://xclusive.market/"
        }
      ]
    },
    {
      image: require("./assets/images/favorlet-biz.png"),
      projectName: "Favorlet Biz",
      projectDesc:
        "페이버렛을 사용해 NFT를 발급/인증 할 수 있는 이벤트를 생성하는 서비스",
      footerLink: [
        {
          name: "바로가기",
          url: "https://biz.favorlet.io/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "프로젝트에 대해 토론하거나 그냥 인사하고 싶으신가요? 내 받은 편지함은 모든 사람에게 열려 있습니다.",
  number: "010-2420-3405",
  email_address: "kim88594544@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
