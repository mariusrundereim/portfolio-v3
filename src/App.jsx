import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Layout/Footer";
import ProjectList from "./components/sections/ProjectList";
import Social from "./components/sections/Social";
import Technologies from "./components/sections/Technologies";

function App() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4 flex flex-col space-y-20">
        <Hero />
        <section id="projects">
          <ProjectList />
        </section>
        <Technologies />
        <section id="contact">
          <Contact />
        </section>
        <Social />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
