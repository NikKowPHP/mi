<script lang="ts">
  import { onMount } from 'svelte';
  
  interface Employment {
    id: string;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    technologies: string[];
    logo: string;
  }
  
  interface Props {
    employment: Employment[];
  }
  
  let { employment }: Props = $props();
  let mounted = $state(false);
  let visibleItems = $state<Set<string>>(new Set());
  
  onMount(() => {
    mounted = true;
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              visibleItems.add(id);
              visibleItems = new Set(visibleItems);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    
    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  });
</script>

<div class="timeline-container" class:mounted>
  <div class="timeline-line"></div>
  
  {#each employment as job, index}
    <div 
      class="timeline-item" 
      class:visible={visibleItems.has(job.id)}
      data-id={job.id}
      style="animation-delay: {index * 0.2}s"
    >
      <div class="timeline-marker">
        <div class="marker-dot"></div>
        <div class="marker-pulse"></div>
      </div>
      
      <div class="timeline-content">
        <div class="job-header">
          <div class="company-info">
            <div class="company-logo">
              <img src={job.logo || "/placeholder.svg"} alt={job.company} loading="lazy" />
            </div>
            <div class="company-details">
              <h3 class="company-name">{job.company}</h3>
              <p class="job-location">{job.location}</p>
            </div>
          </div>
          <div class="job-duration">{job.duration}</div>
        </div>
        
        <div class="job-content">
          <h4 class="job-position">{job.position}</h4>
          <p class="job-description">{job.description}</p>
          
          <div class="job-technologies">
            {#each job.technologies as tech}
              <span class="tech-badge">{tech}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .timeline-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  .timeline-line {
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      var(--accent-color) 10%,
      var(--accent-color) 90%,
      transparent 100%
    );
    opacity: 0.3;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .timeline-item.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .timeline-marker {
    position: absolute;
    left: 0;
    top: 1rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  
  .marker-dot {
    width: 16px;
    height: 16px;
    background: var(--accent-color);
    border-radius: 50%;
    border: 4px solid var(--background);
    box-shadow: 0 0 0 2px var(--accent-color);
    transition: all 0.3s ease;
  }
  
  .marker-pulse {
    position: absolute;
    width: 16px;
    height: 16px;
    background: var(--accent-color);
    border-radius: 50%;
    opacity: 0.3;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .timeline-content {
    margin-left: 80px;
    background: var(--card-background);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(20px);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .timeline-content:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  }
  
  :global(.dark) .timeline-content:hover {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
  }
  
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    gap: 1rem;
  }
  
  .company-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }
  
  .company-logo {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    overflow: hidden;
    background: var(--background-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .company-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .company-details {
    flex: 1;
  }
  
  .company-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }
  
  .job-location {
    color: var(--text-secondary);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .job-location::before {
    content: "📍";
    font-size: 0.8rem;
  }
  
  .job-duration {
    background: rgba(var(--accent-rgb), 0.1);
    color: var(--accent-color);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    white-space: nowrap;
  }
  
  .job-content {
    border-top: 1px solid var(--border-color);
    padding-top: 1.5rem;
  }
  
  .job-position {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  .job-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .job-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-badge {
    background: var(--background-secondary);
    color: var(--text-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }
  
  .tech-badge:hover {
    background: rgba(var(--accent-rgb), 0.1);
    color: var(--accent-color);
    border-color: rgba(var(--accent-rgb), 0.3);
  }
  
  @media (max-width: 768px) {
    .timeline-line {
      left: 20px;
    }
    
    .timeline-marker {
      left: -10px;
      width: 40px;
      height: 40px;
    }
    
    .timeline-content {
      margin-left: 50px;
      padding: 1.5rem;
    }
    
    .job-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .company-info {
      width: 100%;
    }
    
    .job-duration {
      align-self: flex-start;
    }
    
    .company-logo {
      width: 40px;
      height: 40px;
    }
    
    .company-name {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    .timeline-content {
      margin-left: 40px;
      padding: 1rem;
    }
    
    .job-technologies {
      gap: 0.25rem;
    }
    
    .tech-badge {
      font-size: 0.75rem;
      padding: 0.2rem 0.5rem;
    }
  }
</style>
