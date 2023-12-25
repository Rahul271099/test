import logo5 from "./assets/rxjs-1.svg";

const data = [
  {
    id: 1,
    symbol:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzPHeLHu0yFV-r1RFoSsoy2HHY2LfcNi2kGPhEc-SvmEB1G8b",
    title: "Astro Basics",
    subtitle: "Node.js",
    category: "popular",
  },
  {
    id: 2,
    symbol:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_YyfYiLVB2vAHpTaqalSB2r1hwCaKVD81CikxGD4xEWnm4lr2",
    title: "Next.js",
    subtitle: "Node.js",
    category: "popular",
  },
  {
    id: 3,
    symbol:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8lygZ2epbSnecBnrZ82_paRklYgYVMetrHR4WukhPXRcCyOss",
    title: "Nuxt 3",
    subtitle: "Node.js",
    category: "popular",
  },
  {
    id: 4,
    symbol: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    title: "Node.js",
    subtitle: "Blank Project",
    category: "popular",
  },
  {
    id: 5,
    symbol:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/javascript-2752148-2284965.png?f=webp&w=256",
    title: "JavaScript",
    subtitle: "Blank Project",
    category: "popular",
  },
  {
    id: 6,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=webp&w=256",
    title: "TypeScript",
    subtitle: "Blank Project",
    category: "popular",
  },
  {
    id: 7,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "React",
    subtitle: "TypeScript",
    category: "popular",
  },
  {
    id: 8,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-angular-3-226070.png?f=webp&w=256",
    title: "Angular",
    subtitle: "TypeScript",
    category: "popular",
  },
  {
    id: 9,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-vue-282497.png?f=webp&w=256",
    title: "Vue 3",
    subtitle: "Javascript",
    category: "popular",
  },
  {
    id: 10,
    symbol: "https://www.cdnlogo.com/logos/r/44/rxjs.svg",
    title: "RxJs",
    subtitle: "Typescript",
    category: "popular",
  },
  {
    id: 11,
    symbol:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1X4mt2zamECycTiaKWCmNmUh8deF4tul1aI9IRK9nT58NADbW",
    title: "Web Container API",
    subtitle: "Node.js",
    category: "popular",
  },
  {
    id: 12,
    symbol: "image1",
    title: "Native Script",
    subtitle: "Javascript",
    category: "mobile",
  },
  {
    id: 13,
    symbol: "image2",
    title: "Native Script",
    subtitle: "Angular",
    category: "mobile",
  },
  {
    id: 14,
    symbol: "image3",
    title: "Native Script",
    subtitle: "Vue",
    category: "mobile",
  },
  {
    id: 15,
    symbol: "image4",
    title: "Native Script",
    subtitle: "Sevelte",
    category: "mobile",
  },
  {
    id: 16,
    symbol: "image5",
    title: "Native Script",
    subtitle: "React",
    category: "mobile",
  },
  {
    id: 17,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-angular-3-226070.png?f=webp&w=256",
    title: "Angular",
    subtitle: "TypeScript",
    category: "frontend",
  },
  {
    id: 18,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "React",
    subtitle: "JavaScript",
    category: "frontend",
  },
  {
    id: 19,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "React",
    subtitle: "TypeScript",
    category: "frontend",
  },
  {
    id: 20,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-vue-282497.png?f=webp&w=256",
    title: "Vue",
    subtitle: "JavaScript",
    category: "frontend",
  },
  {
    id: 21,
    symbol:
      "https://webapps1.chicago.gov/cdn/Bootstrap-4.0.0-beta.2/assets/brand/bootstrap-solid.svg",
    title: "Bootstrap 5",
    subtitle: "JavaScript",
    category: "frontend",
  },
  {
    id: 22,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Solid",
    subtitle: "JavaScript",
    category: "frontend",
  },
  {
    id: 23,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Solid",
    subtitle: "TypeScript",
    category: "frontend",
  },
  {
    id: 24,
    symbol: "https://static.cdnlogo.com/logos/h/84/html.svg",
    title: "Static",
    subtitle: "HTML/JS/CSS",
    category: "frontend",
  },
  {
    id: 25,
    symbol:
      "https://vectorseek.com/wp-content/uploads/2023/09/Effector-Logo-Vector.svg-.png",
    title: "Effector",
    subtitle: "TypeScript",
    category: "frontend",
  },
  {
    id: 26,
    symbol:
      "https://vectorseek.com/wp-content/uploads/2023/03/Svelte-Logo-Vector-300x300.jpg",
    title: "Svelte",
    subtitle: "JavaScript",
    category: "frontend",
  },
  {
    id: 27,
    symbol:
      "https://vectorseek.com/wp-content/uploads/2023/03/Svelte-Logo-Vector-300x300.jpg",
    title: "Svelte",
    subtitle: "TypeScript",
    category: "frontend",
  },
  {
    id: 28,
    symbol: "https://static.cdnlogo.com/logos/e/34/ember.svg",
    title: "Ember",
    subtitle: "JavaScript",
    category: "frontend",
  },
  {
    id: 29,
    symbol: "https://static.cdnlogo.com/logos/e/34/ember.svg",
    title: "Ember",
    subtitle: "TypeScript",
    category: "frontend",
  },
  {
    id: 30,
    symbol:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIATRNi8GqnwHFAlvHjAlBahwO7f2NYZxUtl5YQ2gaCg&s",
    title: "Ladle",
    subtitle: "TypeScript",
    category: "frontend",
  },
  {
    id: 31,
    symbol:
      "https://vectorseek.com/wp-content/uploads/2023/09/NestJS-Logo-Vector.svg-.png",
    title: "NestJS",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 32,
    symbol:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSap7zIMxT7Uf5MUWFACSFXyHggMoZjUzNsue7d87RzkT0uNAaDp9Vi6I8NkA&s",
    title: "Express",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 33,
    symbol: "image33",
    title: "Koa",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 34,
    symbol: "https://www.vectorlogo.zone/logos/eggjs/eggjs-icon.svg",
    title: "Egg.js",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 35,
    symbol:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Apache_Feather_Logo.svg/508px-Apache_Feather_Logo.svg.png?20220805205423",
    title: "Feathers",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 36,
    symbol:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png",
    title: "GraphQL",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 37,
    symbol: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    title: "json-server",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 38,
    symbol:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png",
    title: "JSON GraphQL Server",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 39,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "H3",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 40,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Nitro",
    subtitle: "Node.js",
    category: "backend",
  },
  {
    id: 41,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Astro Basics",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 42,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Astro Minimal",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 43,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Next.js",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 44,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Nuxt 3",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 45,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Nuxt 2",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 46,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Qwik",
    subtitle: "TypeScript",
    category: "fullstack",
  },
  {
    id: 47,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Remix",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 48,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "SvelteKit",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 49,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Quasar",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 50,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "WebContainer API",
    subtitle: "Node.js",
    category: "fullstack",
  },
  {
    id: 51,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "vanilla",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 52,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "vanilla-ts",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 53,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "vue",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 54,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "vue-ts",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 55,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "react",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 56,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "react-ts",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 57,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "preact",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 58,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "preact-ts",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 59,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "lit",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 60,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "lit-ts",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 61,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "svelte",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 62,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "svelte-ts",
    subtitle: "Vite",
    category: "vite",
  },
  {
    id: 63,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Eleventy",
    subtitle: "Node.js",
    category: "docs, Blocks & Slides",
  },
  {
    id: 64,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Docusaurus",
    subtitle: "Node.js",
    category: "docs, Blocks & Slides",
  },
  {
    id: 65,
    symbol:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256",
    title: "Slidev",
    subtitle: "Node.js",
    category: "docs, Blocks & Slides",
  },
  {
    id: 66,
    symbol: "image66",
    title: "Astro Blog",
    subtitle: "Node.js",
    category: "docs, Blocks & Slides",
  },
  {
    id: 67,
    symbol: "image67",
    title: "Astro Portfolio",
    subtitle: "Node.js",
    category: "docs, Blocks & Slides",
  },
  {
    id: 68,
    symbol: "image68",
    title: "Starlight",
    subtitle: "Node.js",
    category: "docs, Blocks & Slides",
  },
  {
    id: 69,
    symbol: "image69",
    title: "Remotion",
    subtitle: "TypeScript",
    category: "docs, Blocks & Slides",
  },
  {
    id: 70,
    symbol: "image70",
    title: "VitePress",
    subtitle: "TypeScript",
    category: "docs, Blocks & Slides",
  },
  {
    id: 71,
    symbol: "image71",
    title: "WebContainer API",
    subtitle: "Node.js",
    category: "docs, Blocks & Slides",
  },
  {
    id: 72,
    symbol: "image72",
    title: "TresJS",
    subtitle: "TypeScript",
    category: "creative",
  },
  {
    id: 73,
    symbol: "image73",
    title: "GreenSock",
    subtitle: "React",
    category: "creative",
  },
  {
    id: 74,
    symbol: "image74",
    title: "GreenSock",
    subtitle: "Vue 3",
    category: "creative",
  },
  {
    id: 75,
    symbol: "image75",
    title: "GreenSock",
    subtitle: "Svelte",
    category: "creative",
  },
  {
    id: 76,
    symbol: "image76",
    title: "GreenSock",
    subtitle: "Next",
    category: "creative",
  },
  {
    id: 77,
    symbol: "image77",
    title: "GreenSock",
    subtitle: "Nuxt 3",
    category: "creative",
  },
  {
    id: 78,
    symbol: "image78",
    title: "GreenSock",
    subtitle: "SvelteKit",
    category: "creative",
  },
  {
    id: 79,
    symbol: "image79",
    title: "node.new",
    subtitle: "Node.js",
    category: "vanilla",
  },
  {
    id: 80,
    symbol: "image80",
    title: "Nodemon",
    subtitle: "Node.js",
    category: "vanilla",
  },
  {
    id: 81,
    symbol: "image81",
    title: "Vite vanilla",
    subtitle: "Node.js",
    category: "vanilla",
  },
  {
    id: 82,
    symbol: "image82",
    title: "Vitest",
    subtitle: "Node.js",
    category: "vanilla",
  },
  {
    id: 83,
    symbol: "image83",
    title: "Webpack",
    subtitle: "Node.js",
    category: "vanilla",
  },
  {
    id: 84,
    symbol: "image84",
    title: "RxJS",
    subtitle: "TypeScript",
    category: "vanilla",
  },
  {
    id: 85,
    symbol: "image85",
    title: "Static",
    subtitle: "HTML/JS/CSS",
    category: "vanilla",
  },
  {
    id: 86,
    symbol: "image86",
    title: "Blank Project",
    subtitle: "TypeScript",
    category: "vanilla",
  },
  {
    id: 87,
    symbol: "image87",
    title: "Blank Project",
    subtitle: "JavaScript",
    category: "vanilla",
  },
  {
    id: 88,
    symbol: "image88",
    title: "Python",
    subtitle: "Experimental",
    category: "nativelanguage",
  },
  {
    id: 89,
    symbol: "image89",
    title: "WordPress",
    subtitle: "PHP",
    category: "nativelanguage",
  },
  {
    id: 90,
    symbol: "image90",
    title: "jq",
    subtitle: "WebContainers",
    category: "nativelanguage",
  },
];
export default data;
