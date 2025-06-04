function slugify(text: string) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export const projectsData = [
  {
    id: "proj2",
    title: "ZIRO - Digital Health Design Agency",
    slug: "ziro-digital-health-design-agency",
    description:
      "A professional full-stack web design and development agency specializing in human-centered digital health solutions. ZIRO creates intuitive UI/UX designs, branding strategies, and digital products that patients love to use, empowering individuals and enhancing healthcare interactions through impactful technology. Features a comprehensive admin dashboard (CMS) allowing user administrators to configure and manage each section of the website dynamically.",
    thumbnailUrl: "https://picsum.photos/seed/ziro/400/300",
    technologies: [
      "Prisma",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Supabase Auth",
    ],
    liveUrl: "https://www.ziro.space/en",
    repoUrl: null,
  },
  {
    id: "proj3",
    title: "ZIRO.FIT - Fitness Trainer Platform",
    slug: "ziro-fit-fitness-trainer-platform",
    description:
      "A comprehensive digital business card, portfolio, and client engagement platform designed specifically for fitness trainers. ZIRO.FIT enables trainers to build their brand, showcase results, and grow their fitness business through personalized pitch pages. Features a comprehensive CMS allowing trainers to configure all details on their personal pages, integrated contact forms, payment processing, and calendar booking system for seamless client management and trainer scheduling.",
    thumbnailUrl: "https://picsum.photos/seed/zirofit/400/300",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "Livewire",
      "Alpine.js",
      "PostgreSQL",
      "AWS",
    ],
    liveUrl: "https://ziro.fit",
    repoUrl: null,
  },

  // {
  //   id: "proj2",
  //   title: "EcoTracker Mobile App",
  //   slug: slugify("EcoTracker Mobile App"),
  //   // TODO: Expand description for better SEO. Include keywords related to mobile PWA, carbon footprint, gamification.
  //   description:
  //     "Mobile-first progressive web application to track and reduce personal carbon footprint with gamification elements.",
  //   thumbnailUrl: "https://picsum.photos/seed/ecotracker/400/300",
  //   technologies: ["Vue.js", "Firebase", "PWA", "Chart.js"],
  //   liveUrl: "https://ecotracker-app.com",
  //   repoUrl: "https://github.com/alexchen/ecotracker",
  // },
  // {
  //   id: "proj3",
  //   title: "Neural Art Generator",
  //   slug: slugify("Neural Art Generator"),
  //   // TODO: Expand description for better SEO. Include keywords related to AI art, machine learning, text prompts.
  //   description:
  //     "AI-powered art generation tool using machine learning models to create unique digital artwork from text prompts.",
  //   thumbnailUrl: "https://picsum.photos/seed/neuralart/400/300",
  //   technologies: ["Python", "TensorFlow", "FastAPI", "Svelte"],
  //   liveUrl: null,
  //   repoUrl: "https://github.com/alexchen/neural-art",
  // },
  {
    id: "proj4",
    title: "TaskFlow Collaboration",
    slug: slugify("TaskFlow Collaboration"),
    // TODO: Expand description for better SEO. Include keywords related to team productivity, real-time collaboration, task management, video conferencing.
    description:
      "Team productivity platform with real-time collaboration, task management, and integrated video conferencing.",
    thumbnailUrl: "https://picsum.photos/seed/taskflow/400/300",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    liveUrl: "https://taskflow-collab.com",
    repoUrl: "https://github.com/alexchen/taskflow",
  },
  {
    id: "proj5",
    title: "Crypto Portfolio Tracker",
    slug: slugify("Crypto Portfolio Tracker"),
    // TODO: Expand description for better SEO. Include keywords related to crypto, portfolio tracking, analytics, trading signals.
    description:
      "Real-time cryptocurrency portfolio tracking with advanced analytics and automated trading signals.",
    thumbnailUrl: "https://picsum.photos/seed/cryptoportfolio/400/300",
    technologies: ["Svelte", "Express.js", "MongoDB", "WebSocket"],
    liveUrl: "https://crypto-tracker-pro.com",
    repoUrl: "https://github.com/alexchen/crypto-tracker",
  },
  {
    id: "proj6",
    title: "Smart Home Dashboard",
    slug: slugify("Smart Home Dashboard"),
    // TODO: Expand description for better SEO. Include keywords related to IoT, smart home, voice control, energy analytics.
    description:
      "IoT device management dashboard with voice control integration and energy consumption analytics.",
    thumbnailUrl: "https://picsum.photos/seed/smarthome/400/300",
    technologies: ["Angular", "MQTT", "InfluxDB", "Docker"],
    liveUrl: null,
    repoUrl: "https://github.com/alexchen/smart-home",
  },
];
