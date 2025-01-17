import Tag from "../../core/Tag/SimpleTag";
import { TECHNOLOGIES } from "./techData";
function ListTags() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Fremhevet</h3>
        <div className="gap-4 flex flex-wrap">
          {TECHNOLOGIES.featured.map((tech) => (
            <Tag
              key={tech.name}
              size="large"
              state="featured"
              iconLeft={tech.icon}
              iconSize={tech.iconSize}
              href={tech.url}
            >
              {tech.name}
            </Tag>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Teknologier</h3>
        <div className="gap-4 flex flex-wrap">
          {TECHNOLOGIES.regular.map((tech) => (
            <Tag
              key={tech.name}
              size="large"
              state="active"
              iconLeft={tech.icon}
              iconSize={tech.iconSize}
              href={tech.url}
            >
              {tech.name}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListTags;
