import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import ProjectList from "./components/sections/ProjectList";
import Social from "./components/sections/Social";
import Technologies from "./components/sections/Technologies";
function App() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4 flex flex-col space-y-20">
        <Hero />
        <ProjectList />
        <Technologies />
        <Contact />
        <Social />
      </main>
    </>
  );
}

export default App;
