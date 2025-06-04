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
    id: "proj1",
    title: "CloudSync Dashboard",
    slug: slugify("CloudSync Dashboard"),
    // TODO: Expand description for better SEO. Include keywords related to cloud management, UI, real-time monitoring.
    description:
      "A cutting-edge platform for managing cloud resources with an intuitive UI and real-time monitoring capabilities.",
    thumbnailUrl: "https://picsum.photos/seed/cloudsync/400/300",
    technologies: ["React", "Node.js", "GraphQL", "AWS", "TypeScript"],
    liveUrl: "https://cloudsync-demo.com",
    repoUrl: "https://github.com/alexchen/cloudsync",
  },
  {
    id: "proj2",
    title: "EcoTracker Mobile App",
    slug: slugify("EcoTracker Mobile App"),
    // TODO: Expand description for better SEO. Include keywords related to mobile PWA, carbon footprint, gamification.
    description:
      "Mobile-first progressive web application to track and reduce personal carbon footprint with gamification elements.",
    thumbnailUrl: "https://picsum.photos/seed/ecotracker/400/300",
    technologies: ["Vue.js", "Firebase", "PWA", "Chart.js"],
    liveUrl: "https://ecotracker-app.com",
    repoUrl: "https://github.com/alexchen/ecotracker",
  },
  {
    id: "proj3",
    title: "Neural Art Generator",
    slug: slugify("Neural Art Generator"),
    // TODO: Expand description for better SEO. Include keywords related to AI art, machine learning, text prompts.
    description:
      "AI-powered art generation tool using machine learning models to create unique digital artwork from text prompts.",
    thumbnailUrl: "https://picsum.photos/seed/neuralart/400/300",
    technologies: ["Python", "TensorFlow", "FastAPI", "Svelte"],
    liveUrl: null,
    repoUrl: "https://github.com/alexchen/neural-art",
  },
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
