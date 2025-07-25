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
    id: "proj6",
    title: "LinguaScribe - AI Language Learning Platform",
    slug: "linguascribe-ai-language-learning-platform",
    excerpt:
      "A PWA that revolutionizes language learning by focusing on active creation through AI-powered journaling and feedback.",
    description:
      "LinguaScribe is an AI-powered PWA designed to help users master a language by writing. It provides instant, contextual feedback on journal entries, turning every writing session into a personalized lesson. The platform uses a spaced repetition system (SRS) to reinforce learning and provides detailed analytics to track progress.",
    longDescription:
      "LinguaScribe is a Progressive Web App (PWA) designed to revolutionize language learning by shifting the focus from passive consumption to active creation. The core philosophy is that users improve best by doing. By providing instant, AI-powered feedback on journal entries, the app turns every writing session into a targeted lesson.\n\nThe system features an AI-driven analysis engine that provides feedback on grammar, phrasing, and vocabulary. Mistakes identified in journal entries can be seamlessly converted into flashcards for a personalized Spaced Repetition System (SRS) study deck. For Pro users, features like in-editor translation and AI-powered sentence completion enhance the writing experience.\n\nThe application is built with a modern, scalable tech stack including Next.js, Prisma, PostgreSQL, and Supabase for authentication, all orchestrated to deliver a seamless and adaptive learning journey.",
    challenges: [
      "Designing a robust and scalable architecture to handle asynchronous AI analysis jobs without blocking the user interface.",
      "Implementing a fair and effective tiered rate-limiting system for AI-features to manage costs while providing value to free users.",
      "Integrating multiple services (Supabase Auth, Stripe Billing, Gemini AI) into a cohesive user experience within a Next.js application.",
    ],
    learnings: [
      "Gained deep experience in building complex, full-stack applications with Next.js App Router and server components.",
      "Mastered asynchronous job processing and state management for long-running AI tasks using React Query.",
      "Developed a strong understanding of integrating and managing third-party services like Stripe for subscriptions and Supabase for authentication within a cohesive architecture.",
    ],
    thumbnailUrl: "/projects/linguascribe/linguascribe-thumb.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Stripe",
      "Gemini",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: null,
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/linguascribe-1/1200/800",
      "https://picsum.photos/seed/linguascribe-2/1200/800",
      "https://picsum.photos/seed/linguascribe-3/1200/800",
    ],
  },
  {
    id: "proj2",
    title: "ZIRO.SPACE - Digital Health Design Agency",
    slug: "ziro-digital-health-design-agency",
    excerpt:
      "My take on building a digital health design agency website - experimenting with Next.js and modern full-stack development.",

    description:
      "ZIRO.SPACE represents my exploration into building professional agency websites with modern technologies. It's a digital health design agency platform where I experimented with Next.js, Supabase, and complex Tailwind layouts. The site includes a comprehensive admin dashboard that lets administrators manage every section dynamically.",

    longDescription:
      "ZIRO.SPACE was my playground for learning Next.js and modern full-stack development. I wanted to create something that looked professional while giving me hands-on experience with technologies I'd been curious about.\n\nThis digital health design agency website became my testing ground for Supabase SDK, complex Tailwind CSS layouts, and figuring out how server-client connections actually work in practice. The admin dashboard was particularly challenging - I wanted administrators to be able to configure and manage every section of the website dynamically, which meant diving deep into state management and database operations.\n\nBuilding this taught me that creating something that looks simple on the surface often requires solving complex problems behind the scenes. Every smooth interaction and responsive layout represents hours of wrestling with APIs, database queries, and making sure everything actually works together.\n\nIt's designed around digital health solutions because I believe technology should make healthcare more human, not less. But honestly, this project was as much about my own learning journey as it was about the final product.",

    challenges: [
      "Learning Next.js from scratch while building a complex, dynamic CMS that could handle real-world content management needs.",
      "Mastering Supabase SDK and understanding how to properly structure database operations and API calls for optimal performance.",
      "Creating complex, responsive layouts with Tailwind CSS while maintaining clean code and ensuring everything works across different devices.",
    ],

    learnings: [
      "Got my first real taste of Next.js and full-stack frameworks, discovering both their power and their quirks through hands-on development.",
      "Developed proficiency with Supabase SDK, learning how to handle authentication, database operations, and real-time features effectively.",
      "Significantly improved my Tailwind CSS skills, especially with complex layouts and responsive design patterns that actually work in production.",
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
      "A digital business card and client engagement platform made just for fitness trainers who want to grow their brand and connect with clients.",

    description:
      "ZIRO.FIT is built to help fitness trainers showcase their work, share success stories, and manage their business all in one place. It's designed to be easy to use and customizable, so trainers can create a personal pitch page that truly represents them.",

    longDescription:
      "ZIRO.FIT is more than just a digital business card — it's a full platform designed to help fitness trainers grow their business and connect with clients in a meaningful way. Trainers can create personalized pages that highlight their unique style and success stories, making it easy to attract and engage new clients.\n\nThe platform includes tools like a flexible CMS to manage all the details and integrated contact forms to capture leads. Payment processing and calendar booking systems are planned features that will be added soon to keep everything running smoothly. It's built to be simple yet powerful, so trainers can focus on what they do best — helping people get fit.\n\nI wanted to create something that actually addresses the real challenges fitness trainers face when trying to build their online presence and manage their client relationships. No more juggling multiple apps or dealing with generic solutions that don't understand the fitness industry.",

    challenges: [
      "Planning and preparing for future payment gateway integrations and calendar booking systems.",
      "Implementing robust data security measures to protect sensitive client information.",
      "Creating a CMS flexible enough to handle different trainer needs while keeping it simple enough for non-tech people to use.",
    ],

    learnings: [
      "Got hands-on experience with Laravel and Livewire, discovering how powerful they are for building interactive web applications quickly.",
      "Gained foundational knowledge in planning secure payment processing and scheduling systems, preparing for future implementation.",
      "Developed skills in designing database schemas that can adapt to diverse user needs without becoming overly complex.",
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
      "This very website! My first dive into Svelte - turned out to be exactly the quick dev solution I was looking for.",

    description:
      "This is the website you're currently browsing! I built it as my introduction to Svelte, having zero previous experience with the framework. I was looking for a fast development and deployment solution, and Svelte delivered exactly that. It's responsive, features dark mode, and showcases all my projects.",

    longDescription:
      "You're looking at my first Svelte project right now! I decided to build my portfolio website using a completely new technology I'd never touched before - Svelte. I was searching for something that would let me develop and deploy quickly without sacrificing quality, and honestly, Svelte blew me away.\n\nComing from React and other frameworks, Svelte felt refreshingly different. The learning curve wasn't as steep as I expected, and the development experience was surprisingly smooth. I managed to implement dynamic routing, a dark mode toggle, SEO optimization for each project page, and full responsiveness across devices - all while learning the framework from scratch.\n\nWhat impressed me most was how fast everything compiled and how little boilerplate code I needed to write. Svelte just gets out of your way and lets you focus on building. The hot reloading was instant, deployment was straightforward, and the final bundle size was tiny compared to what I was used to.\n\nThis project became both my portfolio and my Svelte playground. Every feature I added taught me something new about the framework, and I kept being surprised by how intuitive and powerful it is. If you're looking for a quick dev/deploy solution that doesn't compromise on performance or developer experience, I can't recommend Svelte enough.",

    challenges: [
      "Learning Svelte's unique approach to reactivity and component architecture while building a production-ready website.",
      "Implementing dynamic SEO metadata and routing patterns using SvelteKit's file-based routing system as a complete beginner.",
      "Figuring out how to structure a Svelte project properly while ensuring optimal performance and maintainability.",
    ],

    learnings: [
      "Discovered that Svelte's learning curve is much gentler than expected, with incredibly intuitive syntax and powerful reactive features.",
      "Gained hands-on experience with SvelteKit's file-based routing, SSR capabilities, and build optimizations for fast, modern web apps.",
      "Learned that sometimes trying a completely new technology can lead to finding your new favorite development tool - Svelte just works beautifully.",
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