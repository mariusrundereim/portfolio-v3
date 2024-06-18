import Tag from "../../components/core/Tag/SimpleTag";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiMui,
  SiRedux,
  SiMantine,
  SiJavascript,
  SiWordpress,
  SiTailwindcss,
} from "react-icons/si";
const iconMap = {
  HTML: DiHtml5,
  CSS: DiCss3,
  React: DiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  MUI: SiMui,
  Redux: SiRedux,
  Mantine: SiMantine,
  Wordpress: SiWordpress,
  TailwindCss: SiTailwindcss,
};

function ListStack({ stack }) {
  return (
    <>
      <div>
        <h2>Stack</h2>
        <ul>
          {stack.map((item, index) => {
            const Icon = iconMap[item];
            return (
              <li key={index}>
                <Tag size="large" state="active" iconLeft={Icon} iconSize="26">
                  {item}
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ListStack;
