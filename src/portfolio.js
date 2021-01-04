/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Zulqarnain',
  title: "Hi all, I'm Zulqarnain",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Angular / Nodejs and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1wHJ7U6WCTpSGdNjKHHhEWRZlSBR4l-f8/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/zukqurnain',
  linkedin: 'https://www.linkedin.com/in/zulqarnainhuda/',
  gmail: 'zulqurnainhuda@gmail.com',
  facebook: 'https://www.facebook.com/zulqurnainhuda',
  stackoverflow: 'https://stackoverflow.com/users/11658884/zulqurnain-huda',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Develop Modern Full Stack Serverless Multi-Tenant SaaS Apps'),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
    emoji('⚡ Creating application backend in Node & Express')
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'Angular',
      fontAwesomeClassname: 'fab fa-angular',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'laravel',
      fontAwesomeClassname: 'fab fa-laravel',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Harvard University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'Master of Science in Computer Science',
      duration: 'September 2017 - April 2019',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Stanford University',
      logo: require('./assets/images/stanfordLogo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - April 2017',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Zaavia',
      companylogo: require('./assets/images/Zaavia.png'),
      date: 'May 2019 – Present',
      // desc:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      // descBullets: [
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
    },
    {
      role: 'Freelance Web Developer',
      company: 'Fiverr',
      companylogo: require('./assets/images/Fiverr.png'),
      date: 'May 2018 – April 209',
      // desc:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'zukqurnain', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/LeanSystemsLogo.jpg'),
      link: 'http://leansystems.co.za/',
    },
    {
      image: require('./assets/images/Penetrum.png'),
      link: 'https://penetrum.com/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'M001: MongoDB Basics',
      image: require('./assets/images/MongoDB.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://university.mongodb.com/course_completion/a1f0f2c7-b476-4577-9a49-76c86bbddc3c/printable',
        },
        {
          name: 'Award Letter',
          url:
            'https://university.mongodb.com/course_completion/a1f0f2c7-b476-4577-9a49-76c86bbddc3c/printable',
        }
      ],
    },
    {
      title: 'TMC Community Web Design',
      image: require('./assets/images/MuslimCommunity.PNG'),
      footerLink: [
        {
          name: 'Live View',
          url: 'https://muslim-community.firebaseapp.com/',
        },
      ],
    },
    {
      title: 'Canvas Editor Design',
      image: require('./assets/images/CanvasEditor.PNG'),
      footerLink: [
        {
          name: 'Live View',
          url: 'https://canvas-editor-web.firebaseapp.com/',
        },
      ],
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+92-3361856166',
  emailAddress: 'zulqurnainhuda@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'zulqurnainhuda', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

// WhatsApp Widget Section

const WhatsAppDetails = {
  display : true, // Set true to display this section, defaults to true
  number : "923361856166", // type number without +
  textReplyTime:"Typically replies within a hour",
  companyName:"Zulqarnain"
}

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  WhatsAppDetails
};
