import Tag from "../../core/Tag/SimpleTag";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiMantine } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa";
function ListTags() {
  return (
    <>
      <div className="gap-2 flex flex-wrap">
        <Tag size="large" state="active" iconLeft={DiHtml5} iconSize="26">
          HTML
        </Tag>
        <Tag size="large" state="active" iconLeft={DiCss3} iconSize="26">
          CSS
        </Tag>
        <Tag
          size="large"
          state="active"
          iconLeft={IoLogoJavascript}
          iconSize="27"
        >
          JavaScript
        </Tag>
        <Tag size="large" state="active" iconLeft={SiTypescript} iconSize="24">
          TypeScript
        </Tag>
        <Tag size="large" state="active" iconLeft={FaReact} iconSize="26">
          React
        </Tag>
        <Tag size="large" state="active" iconLeft={SiTailwindcss} iconSize="26">
          TailwindCss
        </Tag>
        <Tag size="large" state="active" iconLeft={FaFigma} iconSize="26">
          Figma
        </Tag>
        <Tag size="large" state="active" iconLeft={FaGithub} iconSize="26">
          Github
        </Tag>
        <Tag size="large" state="active" iconLeft={SiRedux} iconSize="26">
          Redux
        </Tag>
        <Tag size="large" state="active" iconLeft={SiMantine} iconSize="26">
          Mantine
        </Tag>
        <Tag size="large" state="active" iconLeft={SiMui} iconSize="26">
          MUI
        </Tag>
        <Tag size="large" state="active" iconLeft={SiReactrouter} iconSize="26">
          React Router
        </Tag>
        <Tag size="large" state="active" iconLeft={SiJest} iconSize="26">
          Jest
        </Tag>
        <Tag size="large" state="active" iconLeft={SiCypress} iconSize="26">
          Cypress
        </Tag>
        <Tag size="large" state="active" iconLeft={SiExpress} iconSize="26">
          Express JS
        </Tag>
        <Tag size="large" state="active" iconLeft={DiMongodb} iconSize="26">
          Mongo DB
        </Tag>
        <Tag size="large" state="active" iconLeft={FaAws} iconSize="26">
          AWS EC2
        </Tag>
      </div>
    </>
  );
}

export default ListTags;
