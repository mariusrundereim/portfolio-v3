export const frontendSkills = [
  {
    id: "html",
    title: "HTML (Semantic, WCAG, SEO)",
    completed: true,
    difficulty: "Beginner",
    description:
      "Master semantic HTML, accessibility best practices, and SEO optimization techniques.",
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
    resources: [
      {
        title: "MDN Web Docs - HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { title: "Web.dev Accessibility", url: "https://web.dev/accessibility" },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript (ES6+, API, DOM Manipulation)",
    completed: true,
    difficulty: "Advanced",
    description:
      "Master semantic HTML, accessibility best practices, and SEO optimization techniques.",
    resources: [
      {
        title: "JS Docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScripthttps://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting",
      },
      {
        title: "DOM Manipulation",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting",
      },
    ],
  },
  {
    id: "nextjs",
    title: "Next.js",
    completed: false,
    difficulty: "Advanced",
    description:
      "Master semantic HTML, accessibility best practices, and SEO optimization techniques.",
    resources: [
      {
        title: "Next.js Documentation",
        url: "https://nextjs.org/docs",
      },
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
    dependencies: ["javascript-core"],
    resources: [
      {
        title: "Node.js Documentation",
        url: "https://nodejs.org/docs/latest/api/",
      },
    ],
  },
  {
    id: "express",
    title: "Express.js",
    completed: true,
    difficulty: "Intermediate",
    description: "Learn how to build web servers with Express.js.",
    dependencies: ["nodejs-core"],
    resources: [
      {
        title: "Express.js Documentation",
        url: "https://expressjs.com/",
      },
    ],
  },
];
