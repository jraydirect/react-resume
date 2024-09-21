import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jakeb Ray Portfolio Website',
  description: "Portfolio website built in React by Jakeb Ray",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Jakeb Ray`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Columbia, MO based <strong className="text-stone-100">IT Professional</strong> with experience in SWE, AI, Networking, and Web Development, currently working full time
        at <strong className="text-stone-100">Club Car Wash</strong> as an IT professional, but also a part time (limited time) <strong className="text-stone-100">AI Integration/Engineering Intern</strong> at the <strong className="text-stone-100">Missouri Innovation Center</strong> and part time (limited time) <strong className="text-stone-100">Web Application Engineer</strong> at <strong className="text-stone-100">Cybermissions</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me tutoring highschool students in <strong className="text-stone-100">AP Computer Science</strong>,
        mentoring kids as a <strong className="text-stone-100">Robotics Mentor</strong>, or working on my projects for{' '}
        <strong className="text-stone-100">Missouri Innovation Center</strong> and <strong className="text-stone-100">Cybermissions</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a 24 year old IT enthusiest, volunteer, mentor, and part-time student. I work full time job as IT Specialist, but also work my AI internship on limited hours a week, usually done off-site with updates and sync done on-site every other week. My Web Development job is also only a couple of hours a week remotely. Most of my freetime is spent working on websites, Agentic-RAG applications, and tutoring.`,
  aboutItems: [
    {label: 'Location', text: 'Columbia, MO', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Interests', text: 'Programming, Startups, Chess', Icon: SparklesIcon},
    {label: 'Study', text: 'Kansas State University (Machine Learning), Moberly Area Community College (Cybersecurity)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Club Car Wash, Missouri Innovation Center, Cybermissions', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'React',
        level: 5.7,
      },
      {
        name: 'TypeScript',
        level: 5,
      },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      {
        name: 'OpenAI API',
        level: 7,
      },
      {
        name: 'TensorFlow',
        level: 5,
      },
      {
        name: 'PyTorch',
        level: 5,
      },
    ],
  },
  {
    name: 'Database Technologies',
    skills: [
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'Vector Databases',
        level: 6,
      },
      {
        name: 'NoSQL',
        level: 4.7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Estimated 2027',
    location: 'Kansas State University (Remote)',
    title: 'Bachelors of Science - Machine Learning and Autonomous Systems',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2021 - 2024',
    location: 'Moberly Area Community College',
    title: 'Associates of Science - Cybersecurity',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2024 - Present',
    location: 'Club Car Wash',
    title: 'Information Technology Specialist',
    content: (
      <p>
        <strong>-</strong> Perform network analysis and troubleshooting on servers for CCW sites (<strong>Cisco, Meraki, CLI tools</strong>).<br></br>
        <strong>-</strong> Automate various network processes over remote connections. This includes power cycling, gathering network statistics, user creation, etc. (<strong>Powershell, SQL</strong>).
      </p>
    ),
  },
  {
    date: 'January 2024 - Present',
    location: 'Missouri Innovation Center',
    title: 'AI Integration/Engineering Intern',
    content: (
      <p>
<strong>-</strong> Responsible for development of custom-trained AI chatbot that provides up-to-date information on SBIR/STTR grants and participating agencies, aimed at increasing grant distribution for innovative startups (<strong>Python, Pinecone, Cloudflare, JavaScript, OpenAI API, Retrieval-Augmented Generation, NLP, Machine Learning, AI, Deep Learning, Vectorization</strong>).
      </p>
    ),
  },
  {
    date: 'September 2024 - Present',
    location: 'Cybermissions',
    title: 'Web Application Engineer',
    content: (
      <p>
<strong>-</strong> Solo developer responsible for creating modern web applications for Christian Missionary organization. Currently modernizing web application with site statistics of 210,000 visitors annually (<strong>Ruby, Rails, JavaScript, Bootstrap, Tailwind</strong>).
      </p>
    ),
  },
  {
    date: 'January 2023 - August 2024',
    location: 'Socket Telecommunications',
    title: 'Software/Automation Engineering and Support',
    content: (
      <ul>
  <li><strong>-</strong> Wrote an automation script to web-drive cloud dashboard to automatically unbind over 1000 device licenses, saving the company $3,000 (<strong>Python, Selenium, Git, TP-Link</strong>).</li><br></br>
  <li><strong>-</strong> Developed a script to automatically configure new enterprise-level routers transitioning business-issued routers from WiFi 5 to WiFi 6 (<strong>PHP, RouterOS, BASH, Python, MikroTik</strong>).</li><br></br>
  <li><strong>-</strong> Lead developer in script that parsed DOM for customer shipping information and placed it below the USPS label so the outbound support no longer had to manually write the customers address on envelope (<strong>JavaScript, PDF.js</strong>).</li>
</ul>

    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
