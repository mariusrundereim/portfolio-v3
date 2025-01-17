export const frontendSkills = [
  {
    id: "html",
    title: "HTML (Semantic, WCAG, SEO)",
    completed: true,
    difficulty: "Beginner",
    description:
      "Master semantic HTML, accessibility best practices, and SEO optimization techniques.",
    estimatedHours: 20,
    resources: [
      {
        title: "MDN Web Docs - HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { title: "Web.dev Accessibility", url: "https://web.dev/accessibility" },
    ],
  },
  {
    id: "css",
    title: "CSS (Flexbox, Grid, Responsive Design)",
    completed: true,
    difficulty: "Intermediate",
    description:
      "Master semantic HTML, accessibility best practices, and SEO optimization techniques.",
    estimatedHours: 20,
    resources: [
      {
        title: "MDN Web Docs - HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { title: "Web.dev Accessibility", url: "https://web.dev/accessibility" },
    ],
  },
];

export const backendSkills = [
  {
    id: "nodejs-core",
    title: "Node.js Fundamentals",
    completed: false,
    difficulty: "Intermediate",
    description: "Learn Node.js core concepts and server-side JavaScript.",
    estimatedHours: 30,
    dependencies: ["javascript-core"],
    resources: [
      {
        title: "Node.js Documentation",
        url: "https://nodejs.org/docs/latest/api/",
      },
    ],
  },
];
