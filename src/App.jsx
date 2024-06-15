import Justify from "./components/justify";
import Hero from "./components/sections/Hero";
import ProjectList from "./components/sections/ProjectList";
import Technologies from "./components/sections/Technologies";
function App() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4">
        <Hero />
        <ProjectList />
        <Technologies />
      </main>
    </>
  );
}

export default App;
