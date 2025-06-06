export interface Employment {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  logo: string;
}

export const employmentData: Employment[] = [
  {
    id: "emp1",
    company: "BaseSystem",
    position: "FullStack Web Developer",
    duration: "Feb 2024 - Present",
    location: "Poland, Krzeszowice",
    description:
      "- Developed and maintained complex e-commerce web applications and APIs, ensuring seamless functionality and an optimized user experience.\n- Designed and implemented new features to enhance performance.\n- Integrated third-party services, such as payment gateways and social media APIs.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "PHP",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    logo: "https://picsum.photos/seed/basesystem/60/60",
  },
  {
    id: "emp2",
    company: "Freelance Web Developer",
    position: "Freelance Web Developer",
    duration: "Jan 2023 - Present",
    location: "remote",
    description:
      "Developed a series of fullstack web applications, focusing on both user-friendly interfaces and efficient backend solutions.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "PHP",
      "Node.js",
      "Tailwind CSS",
      "Bootstrap",
      "MySQL",
      "PostgreSQL",
    ],
    logo: "https://picsum.photos/seed/freelance/60/60",
  },
];
