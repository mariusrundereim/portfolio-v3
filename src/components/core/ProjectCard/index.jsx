import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
function ProjectCard({ image, title, assignment, date, slug }) {
  const [isOpen, setIsOpen] = useState(false);
  const [onDesktop, setOnDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setOnDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full  overflow-hidden group aspect-square md:aspect-video drop-shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div
        className={classNames(
          "absolute top-0  right-0 w-full h-full p-8 bg-white rounded-lg  transform transition-transform duration-300",
          onDesktop
            ? "group-hover:translate-x-0 translate-x-full w-2/5"
            : isOpen
            ? "translate-y-0"
            : "translate-y-full"
        )}
      >
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{assignment}</p>
          <p>{date}</p>
          <Link to={`/project/${slug}`}>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded">
              Se prosjekt
            </button>
          </Link>
        </div>
      </div>
      {!onDesktop && (
        <button
          className="md:hidden absolute bottom-4 rounded-lg w-full py-2 bg-black text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          Se prosjekt
        </button>
      )}
    </section>
  );
}

export default ProjectCard;
