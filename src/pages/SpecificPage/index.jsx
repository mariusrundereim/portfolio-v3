import { useParams } from "react-router-dom";
import { fetchCaseStudies } from "../../service/fetch/getCaseStudies";
import { useEffect, useState } from "react";
import ListStack from "./listStack";
import ListMedia from "./listMedia";
import ListBrief from "./listBrief";
import ArrowBack from "../../components/ui/ArrowBack";
import Slideshow from "../../components/slideshow/Slideshow";
import ProjectHeader from "./projectHeader";
import ListStories from "./listStories";

function SpecificPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const caseStudies = await fetchCaseStudies();
        const foundProject = caseStudies.find((p) => p.slug === slug);
        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [slug]);

  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4 md:px-0">
        {project ? (
          <section className="grid space-y-20">
            <ArrowBack />
            <ProjectHeader
              title={project.title}
              assignment={project.assignment}
              year={project.year}
              links={project.links}
            />
            <ListStack stack={project.stack} />
            <ListMedia media={project.media} />
            <ListBrief brief={project.brief} />
            <ListStories stories={project.stories} />
          </section>
        ) : (
          <p>Loading or project not found...</p>
        )}
      </main>
    </>
  );
}

export default SpecificPage;
