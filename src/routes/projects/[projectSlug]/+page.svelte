<script lang="ts">
  import { page } from '$app/stores';
  import { projectsData } from '$lib/data/projects';
  import { onMount } from 'svelte';

  let project = $state(null);
  let imageLoaded = $state(false);
  let mounted = $state(false);

  onMount(() => {
    mounted = true;
    const projectSlug = $page.params.projectSlug;
    project = projectsData.find(p => p.slug === projectSlug);

    if (!project) {
      // Handle project not found, e.g., redirect to 404 or projects list
      console.error(`Project with slug ${projectSlug} not found.`);
      // You might want to implement a proper 404 page or redirect here
    }
  });
</script>

{#if project}

  <main class="main-content">
    <section class="project-detail-header" class:mounted>
      <div class="header-content">
        <h1 class="project-title">{project.title}</h1>
        <p class="project-description">{project.description}</p>
        <div class="project-links">
          {#if project.liveUrl}
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="project-link live">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              View Live
            </a>
          {/if}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="project-link code">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            View Code
          </a>
        </div>
      </div>
    </section>

    <section class="project-detail-content">
      <div class="content-container">
        <div class="project-image-container">
          <img
            src={project.thumbnailUrl || "/placeholder.svg"}
            alt={project.title}
            class:loaded={imageLoaded}
            onload={() => imageLoaded = true}
          />
        </div>

        <div class="project-info">
          <h2 class="section-heading">Technologies Used</h2>
          <div class="project-technologies">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>

          <h2 class="section-heading">About This Project</h2>
          <p class="long-description">
            <!-- This is where you would add a more detailed, unique, and keyword-rich description for the project.
                 Consider expanding on the project's features, challenges, and solutions. -->
            {project.description} 
          </p>
          <!-- Add more sections here as needed, e.g., "Features", "Challenges", "Learnings" -->
        </div>
      </div>
    </section>
  </main>
{:else}
  <main class="main-content">
    <section class="project-not-found">
      <h1>Project Not Found</h1>
      <p>The project you are looking for does not exist.</p>
      <a href="/projects" class="back-link">Back to Projects</a>
    </section>
  </main>
{/if}

<style>
  .main-content {
    padding-top: 80px;
    min-height: 100vh;
  }

  .project-detail-header {
    padding: 4rem 2rem 2rem;
    text-align: center;
    background: linear-gradient(135deg,
      rgba(var(--accent-rgb), 0.05) 0%,
      rgba(var(--accent-secondary-rgb), 0.05) 100%);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .project-detail-header.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .header-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .project-title {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-description {
    font-size: 1.25rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .project-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }

  :global(.dark) .project-link {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }

  :global(.dark) .project-link:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  .project-link.live {
    background: rgba(var(--accent-rgb), 0.9);
    color: white;
  }

  .project-link.live:hover {
    background: var(--accent-color);
  }

  .project-detail-content {
    padding: 4rem 2rem;
  }

  .content-container {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .project-image-container {
    background: var(--card-background);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project-image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .project-image-container img.loaded {
    opacity: 1;
  }

  .project-info {
    background: var(--card-background);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
  }

  .section-heading {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .tech-tag {
    background: rgba(var(--accent-rgb), 0.1);
    color: var(--accent-color);
    padding: 0.4rem 1rem;
    border-radius: 16px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(var(--accent-rgb), 0.2);
  }

  .long-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }

  .project-not-found {
    text-align: center;
    padding: 8rem 2rem;
  }

  .project-not-found h1 {
    font-size: 3rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .project-not-found p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .back-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  .back-link:hover {
    background: var(--accent-secondary);
  }

  @media (min-width: 768px) {
    .content-container {
      grid-template-columns: 2fr 3fr; /* Adjust as needed */
    }
  }

  @media (max-width: 768px) {
    .project-title {
      font-size: 2.5rem;
    }

    .project-description {
      font-size: 1.1rem;
    }

    .project-detail-header,
    .project-detail-content {
      padding: 2rem 1rem;
    }

    .project-info {
      padding: 1.5rem;
    }

    .section-heading {
      font-size: 1.5rem;
    }

    .long-description {
      font-size: 1rem;
    }
  }
</style>

