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
  {
    title: 'Vault Unlock Mini-Game',
    desc:
      'A fast, interactive vault-opening game built with Pixi.js and GSAP. Randomized 3-step combination, tactile handle input, polished door + shadow animation, and responsive crop-fill background.',
    subdesc:
      'Inputs are debounced and state-guarded to prevent race conditions during transitions. Combination length, timings, and assets are configurable in src/main.ts. Designed for crisp visuals across aspect ratios.',
    href: 'https://github.com/KokoMilev/vault-unlock-mini-game',
    texture: '/textures/project/vault_done.mp4',
    logo: '/assets/vaultLogo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Pixi.js', path: '/assets/pixiLogo.png' },
      { id: 2, name: 'GSAP', path: '/assets/gsapLogo.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescriptLogo.png' },
      { id: 4, name: 'Vite', path: '/assets/viteLogo.png' },
    ],
  },
  {
    title: 'SVG Snake Game',
    desc:
      'Modern Snake built with TypeScript, SVG, and D3.js. Responsive board, skins, power-ups, smooth animations, full audio, and an in-game menu with rules and settings.',
    subdesc:
      'SVG rendering via D3 keeps graphics crisp at any DPI. Resize edge cases and rapid start inputs are handled with debounced events and transition state guards. Local storage persists scores and preferences.',
    href: 'https://github.com/KokoMilev/SVG-Snake-Game',
    texture: '/textures/project/snake_done.mp4',
    logo: '/assets/snakeLogo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'TypeScript', path: '/assets/typescriptLogo.png' },
      { id: 2, name: 'D3.js', path: '/assets/d3Logo.png' },
      { id: 3, name: 'SVG', path: '/assets/svgLogo.png' },
      { id: 4, name: 'Jest', path: '/assets/jestLogo.png' },
    ],
  }
];

export const workExperiences = [
  {
    id: 1,
    name: 'UiPath',
    pos: 'Software Engineer',
    duration: 'Sep 2025 – Present',
    title:
      'Working on enterprise-scale Process Mining applications used by large customers, contributing to complex, data-heavy frontends built with React, TypeScript, and D3.js. Delivered production-ready features, investigated and fixed critical bugs, and shipped hotfixes directly to live systems under strict reliability requirements. Contributed to maintaining and improving end-to-end test suites and supported stable CI/CD deployments in a large, collaborative engineering environment.',
    icon: '/assets/uipath.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'LifeSense Group',
    pos: 'Software Engineer',
    duration: 'May 2025 – Jul 2025',
    title:
      'Co-developed URi TEST, a mobile health app for real-time urine test analysis. Built image validation logic, integrated MongoDB, and delivered a GDPR-compliant React Native UI tailored for elderly users.',
    icon: '/assets/lifesense.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Avutec Computer Vision Solutions',
    pos: 'Software Engineer',
    duration: 'Apr 2025 – May 2025',
    title:
      'Led development of CortexConnect, a cloud-based platform managing 300+ ANPR devices. Improved license plate recognition workflows using .NET (C#), Blazor, Azure, and Protobuf for real-time data handling.',
    icon: '/assets/avutec.png',
    animation: 'salute',
  }
]


export const calculateSizes = (isSmall, isMobile, isTablet, isMobileHorizontal) => {
  return {
    deskScale: isSmall ? 0.5 : isMobile ? 0.7 : isMobile ? 0.8 : 1,
    deskPosition: isSmall ? [1, -3.5, 0] : isMobile ? [1.3, -5, 0] : isMobileHorizontal ? [1, -5, 0] : [1, -5.5, 0],
    cubePosition: isSmall ? [4, -6, 0] : isMobile ? [5, -10, 0] : isMobileHorizontal ? [5, -10, 0] : isTablet ? [10, -5, 0] : [9, -10, 0],
    reactLogoPosition: isSmall ? [-5, 0, 0] : isMobile ? [-3, 0, 0] : isMobileHorizontal ? [-2, 0, 0] : isTablet ? [0, 0, 0] : [-3, 0, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-13, 6, 0] : isMobileHorizontal ? [-18, 7, 0] : isTablet ? [-12, 4, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -9, -10] : isMobile ? [-6, -15, -10] : isMobileHorizontal ? [-8, -13, -10] : isTablet ? [-13, -7, -10] :  [-13, -13, -10],
  };
};


