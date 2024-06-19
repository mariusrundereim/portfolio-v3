import { useParams } from "react-router-dom";
import { fetchCaseStudies } from "../../service/fetch/getCaseStudies";
import { useEffect, useState } from "react";
import ListStack from "./listStack";
import ListMedia from "./listMedia";
import ListBrief from "./listBrief";
import ArrowBack from "../../components/ui/ArrowBack";
import Slideshow from "../../components/slideshow/Slideshow";

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
            <ArrowBack />
            <h2>Specific page {project.title}</h2>
            <ListStack stack={project.stack} />
            <ListMedia media={project.media} />
            <ListBrief brief={project.brief} />
            <Slideshow
              images={project.media}
              speedOptions={["0x", "1x", "2x"]}
            />
          </div>
        ) : (
          <p>Loading or project not found...</p>
        )}
      </div>
    </>
  );
}

export default SpecificPage;
