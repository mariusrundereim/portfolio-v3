import {
  FaReact,
  FaAws,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { DiHtml5, DiCss3, DiMongodb } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiRadixui,
  SiMantine,
  SiMui,
  SiReactrouter,
  SiJest,
  SiCypress,
  SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";

export const TECHNOLOGIES = {
  featured: [
    {
      name: "React",
      icon: FaReact,
      url: "https://reactjs.org",
      iconSize: 26,
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      iconSize: 27,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      url: "https://www.typescriptlang.org",
      iconSize: 24,
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      url: "https://tailwindcss.com",
      iconSize: 26,
    },
    {
      name: "Next.js",
      icon: RiNextjsFill,
      url: "https://nextjs.org",
      iconSize: 26,
    },
  ],
  regular: [
    {
      name: "HTML",
      icon: DiHtml5,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      iconSize: 26,
    },
    {
      name: "CSS",
      icon: DiCss3,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      iconSize: 26,
    },
    {
      name: "Figma",
      icon: FaFigma,
      url: "https://www.figma.com",
      iconSize: 26,
    },
    {
      name: "Radix UI",
      icon: SiRadixui,
      url: "https://www.radix-ui.com",
      iconSize: 26,
    },

    {
      name: "Node.js",
      icon: FaNodeJs,
      url: "https://nodejs.org/en/",
      iconSize: 26,
    },
    {
      name: "Mantine",
      icon: SiMantine,
      url: "https://mantine.dev",
      iconSize: 26,
    },
    {
      name: "Material UI",
      icon: SiMui,
      url: "https://mui.com",
      iconSize: 26,
    },
    {
      name: "React Router",
      icon: SiReactrouter,
      url: "https://reactrouter.com",
      iconSize: 26,
    },
    {
      name: "Jest",
      icon: SiJest,
      url: "https://jestjs.io",
      iconSize: 26,
    },
    {
      name: "Cypress",
      icon: SiCypress,
      url: "https://www.cypress.io",
      iconSize: 26,
    },
    {
      name: "Express.js",
      icon: SiExpress,
      url: "https://expressjs.com",
      iconSize: 26,
    },
    {
      name: "Redux",
      icon: SiRedux,
      url: "https://redux.js.org",
      iconSize: 26,
    },
    {
      name: "MongoDB",
      icon: DiMongodb,
      url: "https://www.mongodb.com",
      iconSize: 26,
    },
    {
      name: "AWS EC2",
      icon: FaAws,
      url: "https://aws.amazon.com/ec2",
      iconSize: 26,
    },

    {
      name: "Git",
      icon: FaGitAlt,
      url: "https://git-scm.com/",
      iconSize: 26,
    },
  ],
};
