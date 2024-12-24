export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Python Classroom: Collaborative Learning Platform',
    desc: 'Python Classroom is an innovative platform designed to enhance programming education through collaboration and structure. It connects teachers and students via an intuitive Android app, allowing teachers to create classrooms, assign Python coding tasks, and provide personalized feedback. Students can complete and submit assignments while receiving tailored guidance.',
    subdesc:
      'Powered by AWS Lambda, DynamoDB, Kotlin, and GPT-3.5, the platform ensures secure, scalable, and efficient performance. Unlike traditional self-paced apps, Python Classroom emphasizes accountability and human interaction, fostering a motivating and personalized learning experience.',
    href: 'https://drive.google.com/file/d/1pnm9DRFdVHYygAJBPdSOHA1UzNCcYEPk/view?usp=sharing',
    texture: '/textures/project/classroom_done.mp4',
    logo: '/assets/PythonClassroomLogo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Kotlin',
        path: '/assets/kotlinLogo.png',
      },
      {
        id: 2,
        name: 'Go',
        path: 'assets/goLogo.png',
      },
      {
        id: 3,
        name: 'AWS',
        path: '/assets/awsLogo.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/pythonLogo.png',
      },
    ],
  },
  {
    title: 'Smart Disk Sorting Robot',
    desc: 'The project introduces a smart robotic system that revolutionizes disk sorting in automated workflows. By utilizing advanced sensors and precise mechanical components, the robot efficiently detects, fetches, and sorts black and white disks from a conveyor belt with unparalleled accuracy.',
    subdesc:
      'Built with robust technologies such as Raspberry Pi 3b, Arduino Uno R3, ultrasonic and color sensors, and custom motor-driven mechanisms, this system is designed for reliability, scalability, and seamless integration into modern industrial processes.',
    href: 'https://github.com/KokoMilev/DBL-Embedded-Systems',
    texture: '/textures/project/embedded_done.mp4',
    logo: '/assets/robotlogosmall.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Raspberry Pi',
        path: '/assets/raspberrypiLogo.svg',
      },
      {
        id: 2,
        name: 'Arduino',
        path: 'assets/arduinoLogo.svg',
      },
      {
        id: 3,
        name: 'Python',
        path: '/assets/pythonLogo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.6 : isMobile ? 1.0 : 1.2,
    deskPosition: isSmall ? [1, -4, 0] : isMobile ? [1.5, -5, 0] : isTablet ? [1.8, -10, 0] : [1.8, -10, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [15, -6.55, 0] : isTablet ? [15, -6.5, 0] : [15, -6.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [5, 3, 0],
    ringPosition: isSmall ? [20, 0, 0] : isMobile ? [-25, 17, 0] : isTablet ? [-20, 18, 0] : [-24, 18, 0],
    targetPosition: isSmall ? [-10, -10, -10] : isMobile ? [-20, -10, -10] : isTablet ? [-20, -10, -10] : [-20, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];