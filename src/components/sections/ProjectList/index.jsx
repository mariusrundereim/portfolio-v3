import { useState, useEffect } from "react";
import { fetchCaseStudies } from "../../../service/fetch/getCaseStudies";
import ProjectCard from "../../core/ProjectCard";

const selectedProjects = ["Holidaze", "Style Vault"];

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("selected");

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchCaseStudies();
        setProjects(data);
      } catch (error) {
        setError("Failed to load projects");
      }
    };

    getProjects();
  }, []);

  const filteredProjects =
    filter === "selected"
      ? projects.filter((project) => selectedProjects.includes(project.title))
      : projects;

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Case studies</h1>
          <div className="space-x-2">
            <button
              className={`px-4 py-2 rounded ${
                filter === "selected"
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
              onClick={() => setFilter("selected")}
            >
              Utvalgte
            </button>
            <button
              className={`px-4 py-2 rounded ${
                filter === "all"
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
              onClick={() => setFilter("all")}
            >
              Vis alle
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.cover}
              title={project.title}
              assignment={project.assignment}
              date={project.year}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectList;
