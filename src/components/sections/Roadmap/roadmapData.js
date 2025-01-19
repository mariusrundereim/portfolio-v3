export const frontendSkills = [
  {
    id: "html",
    title: "HTML (Semantic, WCAG, SEO)",
    completed: true,
    difficulty: "Beginner",
  },
  {
    id: "css",
    title: "CSS (Flexbox, Grid, Responsive Design)",
    completed: true,
    difficulty: "Intermediate",
  },
  {
    id: "javascript",
    title: "JavaScript (ES6+, API, DOM Manipulation)",
    completed: true,
    difficulty: "Advanced",
  },
  {
    id: "dom-manipulation",
    title: "DOM Manipulation",
    completed: true,
    difficulty: "Intermediate",
  },
  {
    id: "nextjs",
    title: "Next.js",
    completed: false,
    difficulty: "Advanced",
  },
  {
    id: "js-framework",
    title: "JavaScript Frameworks (React, Vue, Svelte)",
    completed: true,
    difficulty: "Advanced",
  },
];

export const backendSkills = [
  {
    id: "nodejs-core",
    title: "Node.js Fundamentals",
    completed: false,
    difficulty: "Intermediate",
    dependencies: ["javascript-core"],
  },
  {
    id: "express",
    title: "Express.js",
    completed: true,
    difficulty: "Intermediate",
    dependencies: ["nodejs-core"],
  },
];
