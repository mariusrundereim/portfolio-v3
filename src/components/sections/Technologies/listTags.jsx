import Tag from "../../core/Tag";
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
function ListTags() {
  return (
    <>
      <div className="gap-2 flex flex-wrap">
        <Tag size="large" state="active" icon={DiHtml5} iconSize="26">
          HTML
        </Tag>
        <Tag size="large" state="active" icon={DiCss3} iconSize="26">
          CSS
        </Tag>
        <Tag size="large" state="active" icon={IoLogoJavascript} iconSize="27">
          JavaScript
        </Tag>
        <Tag size="large" state="active" icon={SiTypescript} iconSize="24">
          TypeScript
        </Tag>
        <Tag size="large" state="active" icon={FaReact} iconSize="26">
          React
        </Tag>
        <Tag size="large" state="active" icon={SiTailwindcss} iconSize="26">
          TailwindCss
        </Tag>
        <Tag size="large" state="active" icon={FaGithub} iconSize="26">
          Github
        </Tag>
        <Tag size="large" state="active" icon={SiRedux} iconSize="26">
          Redux
        </Tag>
        <Tag size="large" state="active" icon={SiMantine} iconSize="26">
          Mantine
        </Tag>
        <Tag size="large" state="active" icon={SiMui} iconSize="26">
          MUI
        </Tag>
        <Tag size="large" state="active" icon={SiReactrouter} iconSize="26">
          React Router
        </Tag>
        <Tag size="large" state="active" icon={SiJest} iconSize="26">
          Jest
        </Tag>
        <Tag size="large" state="active" icon={SiCypress} iconSize="26">
          Cypress
        </Tag>
      </div>
    </>
  );
}

export default ListTags;
