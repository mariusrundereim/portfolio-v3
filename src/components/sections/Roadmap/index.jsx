import React, { useState } from "react";
import { SkillSection } from "./SkillSection";
import { frontendSkills, backendSkills } from "./roadmapData";

export default function RoadMap() {
  const [expandedSections, setExpandedSections] = useState({
    frontend: true,
    backend: true,
  });

  const [skills, setSkills] = useState({
    frontend: frontendSkills,
    backend: backendSkills,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSkill = (section, skillId) => {
    setSkills((prev) => ({
      ...prev,
      [section]: prev[section].map((skill) =>
        skill.id === skillId ? { ...skill, completed: !skill.completed } : skill
      ),
    }));
  };

  return (
    <section className="p-6 rounded-lg border border-grey-200">
      <div>
        <h1 className="text-3xl font-bold mb-8">Roadmap</h1>

        <SkillSection
          title="Frontend"
          skills={skills.frontend}
          onToggleSkill={(skillId) => toggleSkill("frontend", skillId)}
          isExpanded={expandedSections.frontend}
          onToggleExpand={() => toggleSection("frontend")}
        />

        <SkillSection
          title="Backend"
          skills={skills.backend}
          onToggleSkill={(skillId) => toggleSkill("backend", skillId)}
          isExpanded={expandedSections.backend}
          onToggleExpand={() => toggleSection("backend")}
        />
      </div>
    </section>
  );
}
