import React, { useState } from "react";
import { Github, ExternalLink, Figma, Image } from "lucide-react";
import { categories, projects } from "./projectData";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeProjectId, setActiveProjectId] = useState(() => {
    const firstProject = projects.find(
      (project) => project.category === categories[0]
    );
    return firstProject ? firstProject.id : null;
  });

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const toggleProject = (projectId) => {
    setActiveProjectId(activeProjectId === projectId ? null : projectId);
  };
  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold pb-10">Prosjekter</h2>
        {/* Category Tabs */}
        <div className="flex gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                const firstProjectInCategory = projects.find(
                  (project) => project.category === category
                );
                setActiveProjectId(
                  firstProjectInCategory ? firstProjectInCategory.id : null
                );
              }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500 text-white"
                  : "bg-cyan-50 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-slate-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Header */}
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full p-4 flex justify-between items-center bg-cyan-150 hover:bg-cyan-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeProjectId === project.id ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Project Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeProjectId === project.id ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  <div>
                    {/* Project Title */}
                    <h2 className="mb-4 font-bold text-2xl">{project.title}</h2>
                    {/* Project Description */}
                    <p>{project.description}</p>

                    {/* Links */}
                    <div className="flex gap-4 my-6">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2  hover:text-gray-900"
                        >
                          <Github size={22} />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.deployUrl && (
                        <a
                          href={project.deployUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-gray-900"
                        >
                          <ExternalLink size={22} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Features</h4>
                      <ul className="list-disc list-inside">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-4">Teknologier</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-lg  hover:bg-cyan-100 cursor-pointer"
                          >
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Project Cover */}
                    <div className="relative h-full">
                      <img
                        src={project.cover}
                        className="aspect-square w-full h-full object-cover rounded-md"
                        alt="Project Cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
