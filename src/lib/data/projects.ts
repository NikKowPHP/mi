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
  pinned?: boolean;
}


export const projectsData: ProjectType[] = [
  {
    id: "proj6",
    title: "Lexity: AI Language Learning PWA",
    slug: "lexity-ai-language-learning-pwa",
    excerpt:
      "A PWA that revolutionizes language learning by shifting from passive consumption to active creation, with AI-driven feedback and mistake-drilling exercises.",
    description:
      "Lexity is a PWA designed to revolutionize language learning by focusing on active creation. It leverages a deeply integrated AI core to provide a personalized, adaptive, and effective writing-centric learning experience, with robust drilling exercises for user's specific mistakes.",
    longDescription: `Lexity is a Progressive Web App (PWA) designed to revolutionize language learning by shifting the focus from passive consumption to active creation. The application leverages a deeply integrated AI core to provide a personalized, adaptive, and effective writing-centric learning experience. Users improve by doing—receiving instant, contextual feedback, engaging in robust drilling exercises on their specific mistakes, and visualizing their predicted path to fluency.

A key feature is the "Write -> Analyze -> Practice" loop. A user writes, the AI analyzes mistakes, and for each mistake, the user can start a Practice Session. This triggers a robust AI-powered drilling feature that generates new, targeted exercises to reinforce the correct concept.

The system utilizes a multi-provider AI strategy to balance cost, speed, and capability, using powerful models like Google Gemini for complex analysis and high-speed models like Cerebras/Groq for instant translations.`,
    challenges: [
      "Implementing a multi-provider AI strategy to balance cost, speed, and capability for different tasks (e.g., complex analysis vs. high-speed translation).",
      "Developing a robust AI-powered 'drilling' feature to generate targeted practice exercises for specific user mistakes.",
      "Creating a hybrid forecasting model (Holt's Linear/Damped Trend) to predict a user's path to fluency based on performance data.",
      "Integrating a headless rich text editor (Tiptap) for the core writing experience while maintaining a seamless UI.",
    ],
    learnings: [
      "Architected a multi-provider AI system, abstracting different LLMs behind service interfaces to optimize for both performance and cost.",
      "Built a complex, interactive learning loop involving journal analysis, mistake identification, and dynamic practice generation.",
      "Gained experience with data forecasting models to provide users with predictive analytics on their learning progress.",
      "Integrated and customized the Tiptap rich text editor for a seamless and extensible writing experience.",
    ],
    thumbnailUrl: "/projects/lexity/lexity-thumb.webp",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "Multi-Provider AI (Gemini, Groq)",
      "Tailwind CSS",
      "Tiptap",
      "Zustand",
      "React Query",
    ],
    liveUrl: "https://lexity.app",
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/lexity-1/1200/800",
      "https://picsum.photos/seed/lexity-2/1200/800",
      "https://picsum.photos/seed/lexity-3/1200/800",
    ],
    pinned: true,
  },
  {
    id: "proj7",
    title: "Interly: AI Interview Prep Platform",
    slug: "interly-ai-interview-prep-platform",
    excerpt:
      "An AI-driven PWA to help users prepare for technical interviews using voice-based practice, real-time feedback, and a systematic, data-driven process.",
    description:
      "Interly is a PWA and SaaS Platform designed to help users prepare for technical interviews using AI-driven voice-based practice and real-time feedback. It replaces guesswork with a systematic, data-driven, and confidence-building process.",
    longDescription: `Interly is a Progressive Web App (PWA) designed to help users prepare for technical interviews using AI-driven voice-based practice and real-time feedback. The core philosophy is to replace guesswork and anxiety in interview preparation with a systematic, data-driven, and confidence-building process.

The system is built on a modern stack including Next.js, Supabase for backend services, Prisma for type-safe database access, and Google's Gemini API for all core AI tasks, including question generation and voice answer evaluation. A key feature is the asynchronous handling of initial question generation for new interview objectives, providing a seamless user experience while background tasks run. The platform is currently free, with future plans for a premium tier offering advanced analytics and content.`,
    challenges: [
      "Implementing a 'fire-and-forget' background job for question generation with client-side polling for status updates.",
      "Ensuring low latency and high accuracy for real-time voice transcription and AI-driven feedback.",
      "Managing the cost and performance of the Google Gemini API by optimizing prompts and implementing strict, IP-based rate limiting.",
      "Designing a seamless, mobile-first PWA experience with a native-like feel for the core practice loop.",
    ],
    learnings: [
      "Developed a full-stack, scalable PWA using the Next.js App Router, Server Components, and Vercel.",
      "Gained deep experience integrating Supabase for Authentication and Storage, and PostgreSQL with Prisma for a fully type-safe data layer.",
      "Mastered the use of Google's Gemini API for complex, multimodal tasks including voice evaluation and content generation.",
      "Built a highly accessible and responsive UI using Tailwind CSS and shadcn/ui, following a mobile-first design philosophy.",
    ],
    thumbnailUrl: "/projects/interly/interly-thumb.webp",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Google Gemini",
      "Tailwind CSS",
      "Zustand",
      "Zod",
      "Vercel",
    ],
    liveUrl: "https://interly.app",
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/interview-ai-1/1200/800",
      "https://picsum.photos/seed/interview-ai-2/1200/800",
      "https://picsum.photos/seed/interview-ai-3/1200/800",
    ],
    pinned: true,
  },
  {
    id: "proj2",
    title: "ZIRO.HEALTH - Digital Health Design Agency",
    slug: "ziro-digital-health-design-agency",
    excerpt:
      "My take on building a digital health design agency website - experimenting with Next.js and modern full-stack development.",

    description:
      "ZIRO.HEALTH represents my exploration into building professional agency websites with modern technologies. It's a digital health design agency platform where I experimented with Next.js, Supabase, and complex Tailwind layouts. The site includes a comprehensive admin dashboard that lets administrators manage every section dynamically.",

    longDescription:
      "ZIRO.HEALTH was my playground for learning Next.js and modern full-stack development. I wanted to create something that looked professional while giving me hands-on experience with technologies I'd been curious about.\n\nThis digital health design agency website became my testing ground for Supabase SDK, complex Tailwind CSS layouts, and figuring out how server-client connections actually work in practice. The admin dashboard was particularly challenging - I wanted administrators to be able to configure and manage every section of the website dynamically, which meant diving deep into state management and database operations.\n\nBuilding this taught me that creating something that looks simple on the surface often requires solving complex problems behind the scenes. Every smooth interaction and responsive layout represents hours of wrestling with APIs, database queries, and making sure everything actually works together.\n\nIt's designed around digital health solutions because I believe technology should make healthcare more human, not less. But honestly, this project was as much about my own learning journey as it was about the final product.",

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
    liveUrl: "https://www.ziro.health/en",
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/ziro-1/1200/800",
      "https://picsum.photos/seed/ziro-2/1200/800",
      "https://picsum.photos/seed/ziro-3/1200/800",
    ],
    pinned: false,
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
    pinned: true,
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
    pinned: false,
  },
  {
    id: "proj8",
    title: "Instagram Comment-to-DM Bot System",
    slug: "instagram-comment-to-dm-bot",
    excerpt:
      "An automated system that sends DMs to users who comment with specific keywords on Instagram posts, managed via a web panel.",
    description:
      "A full-stack system featuring a Python bot for Instagram monitoring and a Next.js admin panel for managing triggers and DM responses",
    longDescription: `This project is an automated system designed to bridge the gap between Instagram post engagement and direct user interaction. When a user comments on a monitored Instagram post with a specific keyword, a Python-based bot automatically sends them a pre-configured Direct Message.

The entire system is managed through a secure, web-based admin panel built with Next.js 15. Administrators can log in to perform CRUD operations on keyword triggers and the associated DM responses, which can include both text and media. They can also view basic statistics on trigger performance.
`,
    challenges: [
      "Containerizing a multi-language (Python/JS) application into a cohesive system using Docker Compose.",
      "Designing a decoupled architecture where the Python bot and Next.js panel communicate asynchronously via a shared Supabase database.",
      "Implementing secure authentication and authorization for the admin panel using Supabase Auth.",
      "Ensuring the Instagram bot operates reliably in the background, handling potential API rate limits and errors gracefully.",
    ],
    learnings: [
      "Gained hands-on experience orchestrating a multi-service application with Docker Compose.",
      "Learned to build a full-stack, decoupled system where a Python service and a Next.js frontend interact through a shared database as a single source of truth.",
      "Mastered secure CRUD operations in a Next.js application using Prisma ORM against a Supabase PostgreSQL database.",
      "Developed a deeper understanding of building event-driven systems based on user interactions from third-party platforms.",
    ],
    thumbnailUrl: "/projects/instagram-bot/instagram-bot-thumb.webp",
    technologies: [
      "Python",
      "Next.js",
      "Docker",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    liveUrl: null,
    repoUrl: null,
    images: [
      "https://picsum.photos/seed/ig-bot-1/1200/800",
      "https://picsum.photos/seed/ig-bot-2/1200/800",
      "https://picsum.photos/seed/ig-bot-3/1200/800",
    ],
    pinned: false,
  },
];