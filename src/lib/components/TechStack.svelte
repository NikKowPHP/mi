<script lang="ts">
  interface TechCategory {
    category: string;
    technologies: string[];
  }

  interface Props {
    techStack: TechCategory[];
  }

  let { techStack }: Props = $props();
</script>

<div class="tech-stack-container">
  {#each techStack as categoryItem}
    <div class="tech-category">
      <h3 class="category-title">{categoryItem.category}</h3>
      <div class="tech-badges">
        {#each categoryItem.technologies as tech}
          <span class="tech-badge">{tech}</span>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .tech-stack-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .tech-category {
    background: var(--card-background);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .tech-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .category-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: center;
    background: linear-gradient(
      135deg,
      var(--accent-color),
      var(--accent-secondary)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .tech-badge {
    background: rgba(var(--accent-rgb), 0.1);
    color: var(--accent-color);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    transition: all 0.3s ease;
  }

  .tech-badge:hover {
    background: rgba(var(--accent-rgb), 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .tech-stack-container {
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }

    .tech-category {
      padding: 1.5rem;
    }

    .category-title {
      font-size: 1.3rem;
    }

    .tech-badges {
      gap: 0.5rem;
    }

    .tech-badge {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  }
</style>
