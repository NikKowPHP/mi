
export interface Employment {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string
  technologies: string[]
  logo: string
}

export const employmentData: Employment[] = [
  {
    id: "emp1",
    company: "TechFlow Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of cloud-native applications and mentoring junior developers. Built scalable microservices architecture serving 100k+ users.",
    technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
    logo: "https://picsum.photos/seed/techflow/60/60",
  },
  {
    id: "emp2",
    company: "InnovateLab",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    location: "Remote",
    description:
      "Developed responsive web applications and improved user experience across multiple products. Collaborated with design team to implement pixel-perfect interfaces.",
    technologies: ["Vue.js", "SCSS", "Firebase", "Figma"],
    logo: "https://picsum.photos/seed/innovatelab/60/60",
  },
  {
    id: "emp3",
    company: "StartupXYZ",
    position: "Junior Developer",
    duration: "2019 - 2020",
    location: "Austin, TX",
    description:
      "Built and maintained e-commerce platform features. Gained experience in agile development and version control best practices.",
    technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
    logo: "https://picsum.photos/seed/startupxyz/60/60",
  },
  {
    id: "emp4",
    company: "FreelanceWork",
    position: "Web Developer",
    duration: "2018 - 2019",
    location: "Various",
    description:
      "Delivered custom websites for small businesses and startups. Managed full project lifecycle from requirements gathering to deployment.",
    technologies: ["WordPress", "HTML/CSS", "jQuery", "Photoshop"],
    logo: "https://picsum.photos/seed/freelance/60/60",
  },
]
