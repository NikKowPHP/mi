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
  {
    id: "proj4",
    title: "Personal Portfolio Website",
    slug: slugify("Personal Portfolio Website"),
    description:
      "This very website! A modern, responsive personal portfolio built to showcase my projects and skills. Features dynamic routing, dark mode toggle, and SEO optimization for project details. Designed for a seamless user experience across all devices.",
    thumbnailUrl: "https://picsum.photos/seed/portfolio/400/300", // You can replace this with an actual screenshot later
    technologies: [
      "SvelteKit",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    liveUrl: "https://mikita-kavaliou.online",
    repoUrl: "https://github.com/NikKowPHP/mi", // Replace with your actual GitHub repo URL
  },
];
