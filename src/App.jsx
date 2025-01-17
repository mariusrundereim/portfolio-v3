import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/projects";
import Social from "./components/sections/Social";
import Technologies from "./components/sections/Technologies";

function App() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4 flex flex-col space-y-16 pb-20">
        <Hero />

        <section id="projects">
          <Portfolio />
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
