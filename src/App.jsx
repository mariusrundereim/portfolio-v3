import Contact from "./components/sections/Contact";
import FocusAreas from "./components/sections/Focus";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/projects";
import RoadMap from "./components/sections/Roadmap";
import Social from "./components/sections/Social";
import Technologies from "./components/sections/Technologies";

function App() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4 flex flex-col space-y-20 pb-20">
        <Hero />

        <FocusAreas />
        <section id="projects">
          <Portfolio />
        </section>
        <section id="roadmap">
          <RoadMap />
        </section>
        <Technologies />
        <section id="contact">
          <Contact />
        </section>
        <Social />
      </main>
    </>
  );
}

export default App;
