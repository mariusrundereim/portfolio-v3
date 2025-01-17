import React from "react";
import { Check, Lock, ExternalLink } from "lucide-react";

const difficultyColors = {
  Beginner: "bg-blue-100 text-blue-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
};

export function RoadmapItem({
  title,
  isCompleted,
  difficulty,
  description,
  resources = [],
  onToggle,
  isLocked = false,
}) {
  return (
    <div
      className={`border rounded-lg p-4 mb-4 ${
        isCompleted ? "bg-gray-50" : "bg-white"
      } `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggle}
            disabled={isLocked}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
              ${
                isCompleted
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300"
              }
              ${
                isLocked
                  ? "cursor-not-allowed opacity-50"
                  : "hover:border-green-500"
              }`}
          >
            {isCompleted && <Check size={14} className="text-white" />}
            {isLocked && <Lock size={14} className="text-gray-400" />}
          </button>
          <h3 className="font-medium">{title}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>
      </div>

      <p className="mt-2 text-gray-600 text-sm">{description}</p>

      {resources.length > 0 && (
        <div className="mt-3">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Ressurser:</h4>
          <ul className="space-y-1">
            {resources.map((resource, index) => (
              <li key={index} className="text-sm">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center group"
                >
                  {resource.title}
                  <ExternalLink
                    size={12}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
