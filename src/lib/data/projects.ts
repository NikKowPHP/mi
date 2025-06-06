export interface ProjectType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  longDescription?: string;
  challenges?: string[];
  learnings?: string[];
  thumbnailUrl: string;
  technologies: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  images: string[];
}

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

export const projectsData: ProjectType[] = [
  {
    id: "proj2",
    title: "ZIRO.SPACE - Digital Health Design Agency",
    slug: "ziro-digital-health-design-agency",
    excerpt:
      "A professional full-stack web design and development agency specializing in human-centered digital health solutions.",
    description:
      "A professional full-stack web design and development agency specializing in human-centered digital health solutions. ZIRO creates intuitive UI/UX designs, branding strategies, and digital products that patients love to use, empowering individuals and enhancing healthcare interactions through impactful technology. Features a comprehensive admin dashboard (CMS) allowing user administrators to configure and manage each section of the website dynamically.",
    longDescription:
      "ZIRO.SPACE is a professional full-stack web design and development agency dedicated to creating human-centered digital health solutions. We specialize in crafting intuitive UI/UX designs, comprehensive branding strategies, and innovative digital products that resonate with users. Our goal is to empower individuals and enhance healthcare interactions through impactful technology. The platform features a comprehensive admin dashboard (CMS) that allows user administrators to dynamically configure and manage every section of the website, ensuring flexibility and control over content and presentation.",
    challenges: [
      "Implementing a highly flexible and dynamic CMS for all website sections.",
      "Ensuring seamless integration of third-party services while maintaining performance.",
      "Optimizing the platform for various devices and screen sizes.",
    ],
    learnings: [
      "Gained extensive experience in building scalable full-stack applications with Next.js and Supabase.",
      "Improved skills in designing and implementing robust CMS solutions.",
      "Learned to prioritize user experience in complex digital health platforms.",
    ],
    thumbnailUrl: "/projects/ziro-space/ziro-space-thumb.webp",
    technologies: [
      "Prisma",
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Supabase Auth",
    ],
    liveUrl: "https://www.ziro.space/en",
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/ziro-1/1200/800",
      "https://picsum.photos/seed/ziro-2/1200/800",
      "https://picsum.photos/seed/ziro-3/1200/800",
    ],
  },
  {
    id: "proj3",
    title: "ZIRO.FIT - Fitness Trainer Platform",
    slug: "ziro-fit-fitness-trainer-platform",
    excerpt:
      "A comprehensive digital business card, portfolio, and client engagement platform designed specifically for fitness trainers.",
    description:
      "A comprehensive digital business card, portfolio, and client engagement platform designed specifically for fitness trainers. ZIRO.FIT enables trainers to build their brand, showcase results, and grow their fitness business through personalized pitch pages. Features a comprehensive CMS allowing trainers to configure all details on their personal pages, integrated contact forms, payment processing, and calendar booking system for seamless client management and trainer scheduling.",
    longDescription:
      "ZIRO.FIT is a comprehensive digital business card, portfolio, and client engagement platform meticulously designed for fitness trainers. This platform empowers trainers to effectively build their personal brand, showcase client success stories and results, and significantly grow their fitness business. It achieves this through highly personalized pitch pages that trainers can customize to reflect their unique offerings. Key features include a robust CMS for managing all personal page details, integrated contact forms for lead generation, secure payment processing for services, and a streamlined calendar booking system to ensure seamless client management and efficient trainer scheduling.",
    challenges: [
      "Integrating complex payment processing and calendar booking systems.",
      "Ensuring data security and privacy for sensitive client information.",
      "Developing a highly customizable CMS for trainers with varying needs.",
    ],
    learnings: [
      "Deepened understanding of Laravel and Livewire for rapid application development.",
      "Gained experience in implementing secure payment gateways and scheduling functionalities.",
      "Learned to design flexible database schemas for diverse user configurations.",
    ],
    thumbnailUrl: "/projects/ziro-fit/zirofit-thumb.webp",
    technologies: [
      "AWS",
      "Laravel",
      "Tailwind CSS",
      "PostgreSQL",
      "Alpine.js",
      "Livewire",
    ],
    liveUrl: "https://ziro.fit",
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/zirofit-1/1200/800",
      "https://picsum.photos/seed/zirofit-2/1200/800",
      "https://picsum.photos/seed/zirofit-3/1200/800",
    ],
  },
  {
    id: "proj4",
    title: "Personal Portfolio Website",
    slug: "personal-portfolio-website",
    excerpt:
      "This very website! A modern, responsive personal portfolio built to showcase my projects and skills.",
    description:
      "This very website! A modern, responsive personal portfolio built to showcase my projects and skills. Features dynamic routing, dark mode toggle, and SEO optimization for project details. Designed for a seamless user experience across all devices.",
    longDescription:
      "This is my personal portfolio website, a modern and responsive platform meticulously crafted to showcase my diverse projects and extensive skill set as a web developer. It features dynamic routing for individual project details, ensuring a smooth and intuitive navigation experience. A user-friendly dark mode toggle allows for personalized browsing. The site is highly optimized for SEO, with dynamic metadata for each project to enhance discoverability and social media sharing. Designed with a focus on seamless user experience, it performs flawlessly across all devices, from desktops to mobile phones.",
    challenges: [
      "Optimizing performance and loading times for a rich visual experience.",
      "Implementing dynamic SEO metadata for each project page.",
      "Ensuring full responsiveness across a wide range of devices and screen sizes.",
    ],
    learnings: [
      "Enhanced proficiency in SvelteKit for building fast and reactive web applications.",
      "Gained deeper insights into SEO best practices for single-page applications.",
      "Improved skills in CSS animations and transitions for a polished user interface.",
    ],
    thumbnailUrl: "/projects/personal-website/personal-webpage-thumb.webp",
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
    images: [
      "https://picsum.photos/seed/portfolio-1/1200/800",
      "https://picsum.photos/seed/portfolio-2/1200/800",
      "https://picsum.photos/seed/portfolio-3/1200/800",
    ],
  },
  {
    id: "proj1",
    title: "Lessay Web App",
    slug: "lessay-web-app",
    excerpt:
      "A full-stack web app built from my experience as a polyglot - bringing proven language learning techniques to life.",
    description:
      "As someone who speaks 7 languages, I've learned what actually works and what doesn't in language acquisition. This web app is my attempt to digitize the personal techniques and best practices I've developed over years of learning languages. It's constantly evolving as I refine the approach, so expect some glitches - this is very much a work in progress and a demo of what's possible.",
    longDescription:
      "This web app represents everything I've learned about effective language acquisition, distilled into code. Speaking 7 languages didn't happen by accident - it took years of experimenting with different methods, failing, adapting, and discovering what actually sticks.\n\nI built Lessay Web App to capture those hard-earned insights and make them accessible to other language learners. The AI integration isn't just for show - it's designed around the specific learning patterns and techniques that have worked for me across multiple languages. From spaced repetition timing to context-aware practice, every feature reflects real-world learning strategies.\n\nSince I'm constantly refining my understanding of how language acquisition works, this app is in perpetual development. You'll probably encounter some bugs and rough edges - that's the nature of turning personal learning methodologies into working software. Think of this as a live demo of my language learning philosophy in action.\n\nThe platform adapts to how people actually learn languages, not how textbooks think they should. It's messy, iterative, and very much a reflection of my own journey from monolingual to polyglot. If you're serious about language learning and want to try an approach that's been battle-tested across 7 languages, this might be worth exploring.\n\nJust remember - this is a demo app, so patience with the occasional glitch is appreciated while I continue building and improving it.",

    challenges: [
      "Wrestling with complex application logic and intricate statistics aggregation systems to track meaningful learning progress across multiple languages.",
      "Managing sophisticated UI state across different learning modules while keeping the interface responsive and intuitive for users.",
      "Implementing complex database operations and data manipulations to handle diverse user learning patterns and multilingual content efficiently.",
    ],

    learnings: [
      "Developed deep expertise in handling complex state management patterns in React, learning to balance performance with maintainable code architecture.",
      "Mastered advanced database query optimization and aggregation techniques, particularly for calculating learning statistics and progress metrics.",
      "Gained valuable experience in breaking down complex business logic into manageable components, improving both code quality and debugging capabilities.",
    ],

    thumbnailUrl: "/projects/lessay-web-app/lessay-web-app-thumb.webp",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "AI",
    ],
    liveUrl: "https://lessay-app.vercel.app/app",
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/lessay-web-1/1200/800",
      "https://picsum.photos/seed/lessay-web-2/1200/800",
      "https://picsum.photos/seed/lessay-web-3/1200/800",
    ],
  },
  {
    id: "proj5",
    title: "Lessay Language Learning App",
    slug: "lessay-language-learning-app",
    excerpt:
      "A language learning app that actually gets how people learn - combining smart AI translation with personalized flashcards.",

    description:
      "I created Lessay because I was tired of language apps that felt robotic and disconnected from real learning. This AI-powered app translates with context and personality, not just word-for-word conversions. The best part? You can instantly save interesting phrases and turn them into custom flashcard decks that actually matter to you. It's like having a smart study buddy that knows exactly what you need to practice.",
    longDescription:
      "Learning a new language can be challenging, but it doesn't have to be overwhelming. That's why I built Lessay - an AI-powered language learning app that actually makes sense.\n\nWhat started as a simple translation tool evolved into something much more comprehensive. The AI translator doesn't just convert words - it understands context, tone, and formality levels, so whether you're texting a friend or writing a business email, you'll get translations that actually sound natural.\n\nBut here's where it gets interesting: instead of just translating and forgetting, you can save phrases that catch your attention and turn them into personalized flashcard decks. No more generic vocabulary lists that don't relate to your interests.\n\nThe app uses spaced repetition - basically, it shows you cards right when you're about to forget them, which is scientifically proven to help you remember better. You can track your progress with detailed stats and heatmaps that show exactly how you're improving over time.\n\nI've also included text-to-speech support because pronunciation matters, and let's be honest - sometimes you need to hear how something actually sounds. The app works offline too, so you can study your flashcards anywhere, even without internet.\n\nWhether you're a student cramming for exams, planning a trip abroad, or just curious about learning something new, this app adapts to how you actually learn. It's not perfect, but it's designed by someone who understands the real struggles of language learning.\n\nKey features:\n- Smart AI translation with context awareness\n- Custom flashcard creation from your saved phrases\n- Spaced repetition system for better retention\n- Progress tracking and performance insights\n- Text-to-speech for pronunciation practice\n- Offline study mode\n- Support for multiple languages",
    challenges: [
      "Overcoming complex implementation hurdles throughout the development process, requiring creative problem-solving and iterative refinement.",
      "Implementing sophisticated SRS (Spaced Repetition System) logic to optimize learning efficiency and user retention rates.",
      "Ensuring seamless integration between multiple system components, including the Flutter frontend, backend services, and AI APIs working in harmony.",
      "Navigating the complexities of AI API integration and agent creation, including handling API limitations, response formatting, and intelligent agent behavior design.",
    ],
    learnings: [
      "Mastered proper UI design and development patterns in Flutter, creating intuitive and responsive user interfaces for mobile applications.",
      "Developed comprehensive fullstack development skills, including server communication, API integration, and end-to-end application architecture.",
      "Gained hands-on experience with the complete Flutter development lifecycle, from initial setup to production deployment and maintenance.",
      "Acquired expertise in AI integration and API implementation, including working with various AI services and creating intelligent agents for language processing tasks.",
    ],
    thumbnailUrl: "/projects/lessay-app/lessay-app-thumb.webp",
    technologies: ["Flutter", "Node.js", "ExpressJS", "MongoDB", "AI"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.lessay.translate",
    repoUrl: null,
    images: [
      "/projects/lessay-app/lessay-1.webp",
      "/projects/lessay-app/lessay-2.webp",
      "/projects/lessay-app/lessay-3.webp",
      "/projects/lessay-app/lessay-4.webp",
      "/projects/lessay-app/lessay-5.webp",
      "/projects/lessay-app/lessay-6.webp",
      "/projects/lessay-app/lessay-7.webp",
    ],
  },
];
