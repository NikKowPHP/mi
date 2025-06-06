<script lang="ts">
  import { page } from "$app/stores";
  import { projectsData, type ProjectType } from "$lib/data/projects";
  import ImageGallery from "$lib/components/ImageGallery.svelte";
  import { onMount } from "svelte";

  let project: ProjectType | null | undefined = $state(null);
  let imageLoaded = $state(false);
  let mounted = $state(false);

  onMount(() => {
    mounted = true;
    const projectSlug = $page.params.projectSlug;
    project = projectsData.find((p) => p.slug === projectSlug);

    if (!project) {
      console.error(`Project with slug ${projectSlug} not found.`);
    }
  });
</script>

{#if project}
  <main class="main-content">
    <section class="project-detail-header" class:mounted>
      <a href="/projects" class="project-link back-link-top">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 12H5" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Projects
      </a>
      <div class="header-content">
        <div class="flex"></div>
        <h1 class="project-title">{project.title}</h1>
        <p class="project-description">{project.description}</p>
        <div class="project-links">
          {#if project.liveUrl}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="project-link live"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View Live
            </a>
          {/if}
          {#if project.repoUrl}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="project-link code"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
              View Code
            </a>
          {/if}
        </div>
      </div>
    </section>

    <!--
    <section class="project-gallery-section">
      <div class="gallery-container">
        {#if project.images && project.images.length > 0}
          <ImageGallery images={project.images} title={project.title} />
        {:else}
          <div class="project-image-container">
            <img
              src={project.thumbnailUrl || "/placeholder.svg"}
              alt={project.title}
              class:loaded={imageLoaded}
              onload={() => (imageLoaded = true)}
            />
          </div>
        {/if}
      </div>
    </section>

    -->
    <section class="project-detail-content">
      <div class="content-container">
        <div class="project-info">
          <h2 class="section-heading">Technologies Used</h2>
          <div class="project-technologies">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>

          <h2 class="section-heading">About This Project</h2>
          <p class="long-description">
            {project.longDescription || project.description}
          </p>

          {#if project.challenges && project.challenges.length > 0}
            <h2 class="section-heading">Challenges</h2>
            <ul class="project-list">
              {#each project.challenges as challenge}
                <li>{challenge}</li>
              {/each}
            </ul>
          {/if}

          {#if project.learnings && project.learnings.length > 0}
            <h2 class="section-heading">Learnings</h2>
            <ul class="project-list">
              {#each project.learnings as learning}
                <li>{learning}</li>
              {/each}
            </ul>
          {/if}
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
    background: linear-gradient(
      135deg,
      rgba(var(--accent-rgb), 0.05) 0%,
      rgba(var(--accent-secondary-rgb), 0.05) 100%
    );
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    padding-top: 6rem; /* Adjust padding to make space for the absolute positioned back button */
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
    background: linear-gradient(
      135deg,
      var(--text-primary),
      var(--accent-color)
    );
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

  .project-link.back-link-top {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background: rgba(255, 255, 255, 0.8);
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
  }
  .flex {
    display: flex;
  }

  .project-link.back-link-top:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
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

  .project-gallery-section {
    padding: 2rem 2rem 0;
  }

  .gallery-container {
    max-width: 1000px;
    margin: 0 auto;
    background: var(--card-background);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    backdrop-filter: blur(10px);
  }

  .project-image-container {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: var(--background-secondary);
  }

  .project-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .project-image-container img.loaded {
    opacity: 1;
  }

  .project-detail-content {
    padding: 2rem 2rem 4rem;
  }

  .content-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .project-info {
    background: var(--card-background);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
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
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .tech-tag {
    background: rgba(var(--accent-rgb), 0.1);
    color: var(--accent-color);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(var(--accent-rgb), 0.2);
  }

  .project-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 2rem;
  }

  .project-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .project-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }

  .long-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    white-space: pre-line;
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

  @media (max-width: 768px) {
    .project-title {
      font-size: 2.5rem;
    }

    .project-link.back-link-top {
      top: 1rem;
      left: 1rem;
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }

    .project-description {
      font-size: 1.1rem;
    }

    .project-detail-header,
    .project-detail-content,
    .project-gallery-section {
      padding: 2rem 1rem;
    }

    .project-detail-header {
      padding-top: 5rem; /* Adjust padding for smaller screens */
    }

    .gallery-container,
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

  @media (max-width: 480px) {
    .project-title {
      font-size: 2rem;
    }

    .gallery-container,
    .project-info {
      padding: 1rem;
    }
  }
</style>
