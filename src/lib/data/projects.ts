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
    thumbnailUrl: "https://picsum.photos/seed/zirofit/400/300",
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
    excerpt: "Full-stack, AI-powered mobile app for language acquisition.",
    description: "Full-stack, AI-powered mobile app for language acquisition.",
    longDescription:
      "Lessay Web App is a full-stack, AI-powered mobile application designed to revolutionize language acquisition. This innovative platform leverages artificial intelligence to provide personalized learning experiences, making the journey of mastering a new language more efficient and engaging. It focuses on interactive lessons, intelligent feedback, and adaptive learning paths to cater to individual user needs, helping them achieve fluency faster.",
    challenges: [
      "Integrating advanced AI models for personalized language learning.",
      "Ensuring real-time performance for interactive lessons and feedback.",
      "Managing and scaling a NoSQL database (MongoDB) for diverse user data.",
    ],
    learnings: [
      "Gained expertise in integrating AI services into full-stack applications.",
      "Improved skills in real-time data processing and responsive UI development.",
      "Learned effective strategies for managing and optimizing MongoDB databases.",
    ],
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
      "Unlock your language learning potential with our cutting-edge AI-powered app!",
    description:
      "Unlock your language learning potential with our cutting-edge AI-powered app! Our AI translator delivers highly accurate translations with customizable tone and formality. Seamlessly transition from translation to learning by saving your favorite phrases and effortlessly creating personalized flashcard decks.",
    longDescription:
      "Unlock your language learning potential with our cutting-edge AI-powered app! Whether you're a beginner or an advanced learner, our app provides the tools you need to achieve fluency. Our AI translator delivers highly accurate translations with customizable tone and formality, making it perfect for any context – from casual conversations to professional emails. Seamlessly transition from translation to learning by saving your favorite phrases and effortlessly creating personalized flashcard decks.\n\nBoost your vocabulary with our intuitive vocabulary builder tools. Utilize spaced repetition, a proven memorization technique, to optimize your study sessions and maximize retention. Track your daily and weekly progress with detailed statistics and interactive heatmaps, visualizing your language learning journey. Dive deep into individual flashcard performance to identify weak spots and refine your study strategy.\n\nOur app goes beyond basic translation. It's a comprehensive language learning platform designed to help you master any language. With features like TTS (text-to-speech) support, you can improve your pronunciation and listening comprehension. Build custom study sets, review your flashcards on the go, and achieve your language goals faster than ever before.\n\nOur app goes beyond basic translation. It's a comprehensive language learning platform designed to help you master any language. With features like TTS (text-to-speech) support, you can improve your pronunciation and listening comprehension. Build custom study sets, review your flashcards on the go, and achieve your language goals faster than ever before.\n\nDownload now and experience the future of language learning! Perfect for students, travelers, professionals, and anyone looking to expand their language skills.\nKey features include:\n- AI-powered translation with tone and formality control\n- Personalized flashcard decks and vocabulary lists\n- Spaced repetition for optimized memorization\n- Detailed progress tracking and performance insights\n- TTS support for pronunciation practice\n- Offline access to your flashcards\n- Support for multiple languages\n\nStart your journey towards fluency today!",
    challenges: [
      "Optimizing the Flutter application for smooth performance across various mobile devices.",
      "Implementing and fine-tuning the AI translation and flashcard generation features.",
      "Ensuring seamless data synchronization between the mobile app and the backend.",
    ],
    learnings: [
      "Gained significant experience in mobile app development with Flutter.",
      "Deepened understanding of AI integration for language processing.",
      "Improved skills in designing robust and scalable backend APIs for mobile applications.",
    ],
    thumbnailUrl: "https://picsum.photos/seed/lessay/400/300",
    technologies: ["Flutter", "Node.js", "ExpressJS", "MongoDB", "AI"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.lessay.translate",
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/lessay-app-1/1200/800",
      "https://picsum.photos/seed/lessay-app-2/1200/800",
      "https://picsum.photos/seed/lessay-app-3/1200/800",
    ],
  },
];
