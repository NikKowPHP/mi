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
    title: "ZIRO.SPACE - Digital Health Design Agency",
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
    thumbnailUrl: "https://picsum.photos/seed/portfolio/400/300",
    technologies: [
      "SvelteKit",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    liveUrl: "https://mikita-kavaliou.online",
    repoUrl: "https://github.com/NikKowPHP/mi",
  },
  {
    id: "proj1",
    title: "Lessay Web App",
    slug: slugify("Lessay Language Learning App"),
    description: "Full-stack, AI-powered mobile app for language acquisition.",
    thumbnailUrl: "https://picsum.photos/seed/lessay/400/300",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "AI",
    ],
    liveUrl: "https://lessay-app.vercel.app",
    repoUrl: null,
  },
  {
    id: "proj1",
    title: "Lessay Language Learning App",
    slug: slugify("Lessay Language Learning App"),
    description:
      "Unlock your language learning potential with our cutting-edge AI-powered app! Our AI translator delivers highly accurate translations with customizable tone and formality. Seamlessly transition from translation to learning by saving your favorite phrases and effortlessly creating personalized flashcard decks.",
    longDescription:
      "Unlock your language learning potential with our cutting-edge AI-powered app! Whether you're a beginner or an advanced learner, our app provides the tools you need to achieve fluency. Our AI translator delivers highly accurate translations with customizable tone and formality, making it perfect for any context – from casual conversations to professional emails. Seamlessly transition from translation to learning by saving your favorite phrases and effortlessly creating personalized flashcard decks.\n\nBoost your vocabulary with our intuitive vocabulary builder tools. Utilize spaced repetition, a proven memorization technique, to optimize your study sessions and maximize retention. Track your daily and weekly progress with detailed statistics and interactive heatmaps, visualizing your language learning journey. Dive deep into individual flashcard performance to identify weak spots and refine your study strategy.\n\nOur app goes beyond basic translation. It's a comprehensive language learning platform designed to help you master any language. With features like TTS (text-to-speech) support, you can improve your pronunciation and listening comprehension. Build custom study sets, review your flashcards on the go, and achieve your language goals faster than ever before.\n\nDownload now and experience the future of language learning! Perfect for students, travelers, professionals, and anyone looking to expand their language skills.\nKey features include:\n- AI-powered translation with tone and formality control\n- Personalized flashcard decks and vocabulary lists\n- Spaced repetition for optimized memorization\n- Detailed progress tracking and performance insights\n- TTS support for pronunciation practice\n- Offline access to your flashcards\n- Support for multiple languages\n\nStart your journey towards fluency today!",
    thumbnailUrl: "https://picsum.photos/seed/lessay/400/300",
    technologies: ["Flutter", "Node.js", "ExpressJS", "MongoDB", "AI"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.lessay.translate",
    repoUrl: null,
  },
];
