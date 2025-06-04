<script lang="ts">
  interface Props {
    project: {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    technologies: string[];
    liveUrl: string | null;
    repoUrl: string;
  };
  }

  let { project }: Props = $props();
  
  let imageLoaded = $state(false);
</script>

<div class="project-card">
  <div class="project-image">
    <img 
      src={project.thumbnailUrl || "/placeholder.svg"} 
      alt={project.title}
      loading="lazy"
      onload={() => imageLoaded = true}
      class:loaded={imageLoaded}
    />
    <div class="image-overlay">
      <div class="project-links">
        {#if project.liveUrl}
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="project-link live">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
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
  </div>
  
  <div class="project-content">
    <h3 class="project-title">{project.title}</h3>
    <p class="project-description">{project.description}</p>
    
    <div class="project-technologies">
      {#each project.technologies as tech}
        <span class="tech-tag">{tech}</span>
      {/each}
    </div>
  </div>
</div>

<style>
  .project-card {
    background: var(--card-background);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid var(--border-color);
    position: relative;
  }
  
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  :global(.dark) .project-card:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .project-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
    opacity: 0;
  }
  
  .project-image img.loaded {
    opacity: 1;
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  .project-card:hover .image-overlay {
    opacity: 1;
  }
  
  .project-links {
    display: flex;
    gap: 1rem;
  }
  
  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    color: var(--text-primary);
    text-decoration: none;
    border-radius: 12px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .project-link:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
  }
  
  .project-link.live {
    background: rgba(var(--accent-rgb), 0.9);
    color: white;
  }
  
  .project-link.live:hover {
    background: var(--accent-color);
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  .project-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
  
  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tag {
    background: rgba(var(--accent-rgb), 0.1);
    color: var(--accent-color);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(var(--accent-rgb), 0.2);
  }
  
  @media (max-width: 768px) {
    .project-links {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .project-link {
      padding: 0.5rem 0.75rem;
      font-size: 0.8rem;
    }
  }
</style>
