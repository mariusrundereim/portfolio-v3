import { useParams } from "react-router-dom";
import { fetchCaseStudies } from "../../service/fetch/getCaseStudies";
import { useEffect, useState } from "react";
import ListStack from "./listStack";
import ListMedia from "./listMedia";
import ListBrief from "./listBrief";
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
      <div>
        {project ? (
          <div>
            <h2>Specific page {project.title}</h2>
            <ListStack stack={project.stack} />
            <ListMedia media={project.media} />
            <ListBrief brief={project.brief} />
          </div>
        ) : (
          <p>Loading or project not found...</p>
        )}
      </div>
    </>
  );
}

export default SpecificPage;
