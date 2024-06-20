import LinkTag from "../../components/core/Tag/LinkTag";
function ProjectHeader({ title, year, assignment, links }) {
  return (
    <>
      <section className="grid  space-y-4">
        <div className="border-2 border-gray-200 rounded-lg p-4 flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-5xl mb-4">{title}</h1>
          </div>
          <div className="text-start md:text-end">
            <h2 className="text-xl">{year}</h2>
            <h2 className="text-xl">{assignment}</h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <LinkTag brand="github" href={links.github}>
              Github
            </LinkTag>
            <LinkTag brand="netlify" href={links.netlify}>
              Netlify
            </LinkTag>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectHeader;
