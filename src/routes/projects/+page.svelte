<script lang="ts">
  import { onMount } from "svelte";
  import { projectsData } from "$lib/data/projects";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  let mounted = $state(false);
  let filteredProjects = $state(projectsData);
  let selectedTech = $state("All");

  // Get all unique technologies
  const allTechnologies = [
    "All",
    ...new Set(projectsData.flatMap((p) => p.technologies)),
  ];

  onMount(() => {
    mounted = true;
  });

  function filterProjects(tech: string) {
    selectedTech = tech;
    if (tech === "All") {
      filteredProjects = projectsData;
    } else {
      filteredProjects = projectsData.filter((project) =>
        project.technologies.includes(tech),
      );
    }
  }
</script>

<svelte:head>
  <title>Projects - Mikita Kavaliou | Web Development Portfolio</title>
  <meta
    name="description"
    content="Explore a collection of web development projects by Mikita Kavaliou, showcasing expertise in full-stack development, React, Next.js, PHP, and more."
  />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mikita-kavaliou.online/projects" />
  <meta
    property="og:title"
    content="Projects - Mikita Kavaliou | Web Development Portfolio"
  />
  <meta
    property="og:description"
    content="Explore a collection of web development projects by Mikita Kavaliou, showcasing expertise in full-stack development, React, Next.js, PHP, and more."
  />
  <meta
    property="og:image"
    content="https://mikita-kavaliou.online/profile-photo.webp"
  />
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://mikita-kavaliou.online/projects"
  />
  <meta
    property="twitter:title"
    content="Projects - Mikita Kavaliou | Web Development Portfolio"
  />
  <meta
    property="twitter:description"
    content="Explore a collection of web development projects by Mikita Kavaliou, showcasing expertise in full-stack development, React, Next.js, PHP, and more."
  />
  <meta
    property="twitter:image"
    content="https://mikita-kavaliou.online/profile-photo.webp"
  />
</svelte:head>

<main class="main-content">
  <section class="projects-header" class:mounted>
    <div class="header-content">
      <h1 class="page-title">My Projects</h1>
      <p class="page-subtitle">
        A collection of my latest work and experiments
      </p>
    </div>
  </section>

  <section class="filter-section">
    <div class="filter-content">
      <h3 class="filter-title">Filter by Technology</h3>
      <div class="filter-buttons">
        {#each allTechnologies as tech}
          <button
            class="filter-button"
            class:active={selectedTech === tech}
            onclick={() => filterProjects(tech)}
          >
            {tech}
          </button>
        {/each}
      </div>
    </div>
  </section>

  <section class="projects-grid">
    <div class="grid-container">
      {#each filteredProjects as project, index}
        <div class="project-item" style="animation-delay: {index * 0.1}s">
          <ProjectCard {project} />
        </div>
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <div class="no-projects">
        <p>No projects found for the selected technology.</p>
      </div>
    {/if}
  </section>
</main>

<style>
  .main-content {
    padding-top: 80px;
    min-height: 100vh;
  }

  .projects-header {
    padding: 4rem 2rem 2rem;
    text-align: center;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-rgb), 0.05) 0%,
      rgba(var(--accent-secondary-rgb), 0.05) 100%
    );
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .projects-header.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .header-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .page-title {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    background: linear-gradient(
      135deg,
      var(--text-primary),
      var(--accent-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .page-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .filter-section {
    padding: 2rem;
    border-bottom: 1px solid var(--border-color);
  }

  .filter-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .filter-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .filter-button {
    background: var(--card-background);
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 0.75rem 1.5rem;
    border-radius: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    backdrop-filter: blur(10px);
  }

  .filter-button:hover {
    color: var(--text-primary);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .filter-button.active {
    background: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
  }

  .projects-grid {
    padding: 4rem 2rem;
  }

  .grid-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .project-item {
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .no-projects {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 2.5rem;
    }

    .grid-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .filter-buttons {
      gap: 0.5rem;
    }

    .filter-button {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }

    .projects-header,
    .projects-grid {
      padding: 2rem 1rem;
    }
  }
</style>
