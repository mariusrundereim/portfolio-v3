import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RoadmapItem } from "./RoadMapItem";

export function SkillSection({
  title,
  skills,
  onToggleSkill,
  isExpanded,
  onToggleExpand,
}) {
  const completedCount = skills.filter((skill) => skill.completed).length;
  const progress = (completedCount / skills.length) * 100;

  return (
    <div className="mb-8 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="text-sm space-x-4">
            <span>
              {completedCount} / {skills.length} fullført
            </span>
          </div>
        </div>
        <button
          onClick={onToggleExpand}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div className="mb-4 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-cyan-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {skills.map((skill) => (
            <RoadmapItem
              key={skill.id}
              title={skill.title}
              isCompleted={skill.completed}
              difficulty={skill.difficulty}
              onToggle={() => onToggleSkill(skill.id)}
              isLocked={skill.dependencies?.some(
                (dep) => !skills.find((s) => s.id === dep)?.completed
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
