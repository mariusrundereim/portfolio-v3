import Tag from "../../components/core/Tag/SimpleTag";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiMui,
  SiRedux,
  SiMantine,
  SiJavascript,
  SiWordpress,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
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
  Express: SiExpress,
  "AWS EC2": FaAws,
  "Mongo DB": SiMongodb,
  Postman: SiPostman,
};

function ListStack({ stack }) {
  return (
    <>
      <div>
        <h2 className="text-4xl mb-6">Stack</h2>
        <ul className="flex flex-wrap gap-4">
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
