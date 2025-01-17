import React, { useState } from "react";
import { Activity, Palette, Code, Users } from "lucide-react";

function FocusAreas() {
  const [activeTab, setActiveTab] = useState("design");

  const portfolioSections = {
    design: {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Design Excellence",
      description:
        "14 years of graphic design experience transformed into modern web interfaces",
      skills: [
        "Color Theory",
        "Typography",
        "Visual Hierarchy",
        "Brand Identity",
        "UI Design",
      ],
    },
    accessibility: {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibility Champion",
      description: "Creating inclusive experiences through WCAG compliance",
      skills: [
        "WCAG 2.1",
        "Semantic HTML",
        "Keyboard Navigation",
        "Screen Reader Support",
        "Color Contrast",
      ],
    },
    development: {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Implementation",
      description: "Building responsive, performant frontend solutions",
      skills: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Component Architecture",
      ],
    },
    interaction: {
      icon: <Activity className="w-6 h-6" />,
      title: "Interactive Experiences",
      description:
        "Crafting engaging user journeys through thoughtful interaction design",
      skills: [
        "Micro-interactions",
        "Animation",
        "User Flows",
        "Prototyping",
        "State Management",
      ],
    },
  };
  return (
    <div className="p-6 rounded-lg border border-grey-200">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Prosess utvikling</h1>
        <p className="text-lg ">
          Som utvikler vil jeg presentere prosessen for utvikling av prosjekter.
        </p>
      </header>

      <nav className="mb-8">
        <ul className="flex flex-wrap gap-4 justify-center" role="tablist">
          {Object.entries(portfolioSections).map(([key, section]) => (
            <li key={key} role="presentation">
              <button
                onClick={() => setActiveTab(key)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                  ${
                    activeTab === key
                      ? "bg-black text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }
                `}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`${key}-panel`}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {Object.entries(portfolioSections).map(([key, section]) => (
        <div
          key={key}
          role="tabpanel"
          id={`${key}-panel`}
          className={`
            transition-all duration-300
            ${activeTab === key ? "opacity-100" : "opacity-0 hidden"}
          `}
        >
          <div className="bg-cyan-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-400 rounded-lg">{section.icon}</div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-cyan-200"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FocusAreas;
