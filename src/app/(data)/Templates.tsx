import { TemplatesType } from "@/app/(data)/types";

export const Templates: TemplatesType[] = [
  {
    name: "Blog title",
    desc: "An AI tool that generates blog title based on your blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/17739/17739227.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points based on the niche: {niche} and the outline: {outline}.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "HTML Generation",
    desc: "An AI tool that generates HTML code based on your requirements",
    category: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/128/17739/17739227.png",
    aiPrompt:
      "Generate HTML code for the following description: {description}. Include appropriate tags and structure.",
    slug: "generate-html",
    form: [
      {
        label: "Enter a brief description of your layout or content",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "CSS Generation",
    desc: "An AI tool that generates CSS code based on your styling needs",
    category: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/128/17739/17739227.png",
    aiPrompt:
      "Generate CSS styles based on this style description: {styleDescription}. Ensure to cover important styling elements such as colors, spacing, and positioning.",
    slug: "generate-css",
    form: [
      {
        label: "Describe the style you need (colors, fonts, etc.)",
        field: "textarea",
        name: "styleDescription",
        required: true,
      },
    ],
  },
  {
    name: "JavaScript Generation",
    desc: "An AI tool that generates JavaScript functions and code snippets",
    category: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/128/17739/17739227.png",
    aiPrompt:
      "Generate JavaScript code for the following functionality: {jsFunctionality}. Include comments to explain the logic.",
    slug: "generate-javascript",
    form: [
      {
        label: "Describe the functionality you need",
        field: "textarea",
        name: "jsFunctionality",
        required: true,
      },
    ],
  },
  {
    name: "Frontend Frameworks Code Generation",
    desc: "An AI tool that generates code for frontend frameworks like React, Angular, and Vue",
    category: "Frontend Frameworks",
    icon: "https://cdn-icons-png.flaticon.com/128/17739/17739227.png",
    aiPrompt:
      "Generate {framework} code for the following component or functionality: {frameworkDescription}.",
    slug: "generate-frontend-frameworks",
    form: [
      {
        label: "Select a framework",
        field: "dropdown",
        name: "framework",
        required: true,
      },
      {
        label: "Describe the component or functionality",
        field: "textarea",
        name: "frameworkDescription",
        required: true,
      },
    ],
  },
  {
    name: "Next.js Code Generation",
    desc: "An AI tool that generates code for Next.js projects",
    category: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/128/17739/17739227.png",
    aiPrompt:
      "Generate Next.js code for the following page or component: {nextjsComponent}.",
    slug: "generate-nextjs",
    form: [
      {
        label: "Describe the page or component",
        field: "textarea",
        name: "nextjsComponent",
        required: true,
      },
    ],
  },
  {
    name: "Algorithm and Data Structure Questions",
    desc: "An AI tool that generates algorithm and data structure problems",
    category: "Algorithms",
    icon: "https://cdn-icons-png.flaticon.com/128/17739/17739227.png",
    aiPrompt:
      "Generate an algorithm or data structure question based on the topic: {algorithmTopic}, with a detailed problem statement and example input/output.",
    slug: "generate-algorithms-ds",
    form: [
      {
        label: "Select a topic",
        field: "dropdown",
        name: "algorithmTopic",
        required: true,
      },
    ],
  },
];
