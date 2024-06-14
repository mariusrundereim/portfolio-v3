import Justify from "./components/justify";
import Hero from "./components/sections/Hero";
import ProjectCard from "./components/core/ProjectCard";
function App() {
  return (
    <>
      <Hero />
      <div>
        <ProjectCard
          image="https://via.placeholder.com/800x600"
          title="Project title"
          assignment="Eksamen"
          date="Mai 2024"
        />
      </div>
    </>
  );
}

export default App;
