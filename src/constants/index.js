import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons';
import { panda_trading_systems, theguy, paycom } from '../assets/images';

export const skills = [
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: 'https://img.icons8.com/color/64/api-settings.png',
    name: 'REST API',
    type: 'Backend',
  },
  {
    imageUrl: 'https://img.icons8.com/color/48/amazon-web-services.png',
    name: 'AWS',
    type: 'Cloud Services',
  },
  {
    imageUrl: 'https://img.icons8.com/color/48/google-cloud-platform.png',
    name: 'GCP',
    type: 'Cloud Services',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: 'https://img.icons8.com/color/48/mysql.png',
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: 'https://img.icons8.com/color/48/webpack.png',
    name: 'Webpack',
    type: 'Build Tools',
  },
  {
    imageUrl: 'https://img.icons8.com/color/48/jenkins.png',
    name: 'Jenkins',
    type: 'CI/CD',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: 'https://img.icons8.com/color/48/firebase.png',
    name: 'Firebase',
    type: 'Backend Services',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
];

export const experiences = [
  {
    title: 'Frontend Tech Lead',
    company_name: 'Pay.com',
    icon: paycom,
    iconBg: '#b2a7ff',
    date: 'May 2024 - Present',
    points: [
      'Specialize in developing new Next.js applications, prioritizing modern, high-quality, and engaging user experiences.',
      'Conduct comprehensive code reviews, ensuring high standards in performance, security, and maintainability across all projects.',
      'Maintain and enhance the components design system, fostering consistency and reusability across applications.',
      'Oversee the SDK, managing microfrontends and hosted apps for seamless integration and optimal performance.',
      'Mentor and guide developers, sharing expertise and encouraging a collaborative, growth-focused team environment.',
    ],
  },
  {
    title: 'Web Team Lead',
    company_name: 'Panda Trading Systems',
    icon: panda_trading_systems,
    iconBg: '#111113',
    date: 'Aug 2022 - May 2024',
    points: [
      'Lead and manage a dynamic team of up to 5 developers, both remote and on-site, prioritizing collaboration and high-quality deliverables.',
      'Facilitate seamless cooperation with product managers, UX/UI designers, and marketing to align web development with business objectives and user needs.',
      'Specialize in developing websites using Next.js and Jekyll, focusing on modern, engaging user experiences.',
      'Drive React widget development, enhancing product versatility and client solutions.',
      'Oversee domain management and security implementations using Reblaze and CloudFlare, safeguarding internal systems and client websites.',
      'Serve as a senior developer, offering technical guidance and mentoring to the team.',
      'Provide cross-departmental support in technical troubleshooting, fostering a cooperative work environment.',
      'Propel company growth through innovative technology adoption and development process optimization.',
      'Conduct thorough code reviews to maintain high standards in code quality and development efficiency.',
      'Actively engage in hands-on coding and complex problem-solving.',
      'Committed to ongoing professional development in the latest web technologies and trends.',
    ],
  },
  {
    title: 'Development Department Manager',
    company_name: 'TheGuy',
    icon: theguy,
    iconBg: '#b3d06c',
    date: 'Feb 2022 - Aug 2022',
    points: [
      'Managing the development department while coding 80% of the time. Team of 1-10.',
      'Mentoring and training new developers.',
      'Design applications and databases architectures.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'TheGuy',
    icon: theguy,
    iconBg: '#b3d06c',
    date: 'Sep 2015 - Feb 2022',
    points: [
      'Design applications and databases architectures.',
      'Build frontend application using React.',
      'Build backend using Node.js and PHP.',
      'Experience with graphical user-interface library such as Bootstrap, styled components and Material ui.',
      'Good understanding of relational and non-relational databases.',
      'Build web application using HTML, SCSS, JAVASCRIPT.',
      'We are working with Agile & Scrum methodologies.',
      'Develop custom WordPress websites and systems.',
      'Develop custom Joomla! websites and systems.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
];
