<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let darkMode = $state(false);
  
  onMount(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    updateTheme();
  });
  
  function toggleTheme() {
    darkMode = !darkMode;
    updateTheme();
  }
  
  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<nav class="nav-container">
  <div class="nav-content">
    <div class="nav-brand">
      <span class="brand-text">AC</span>
    </div>
    
    <div class="nav-links">
      <a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>
        About
      </a>
      <a href="/projects" class="nav-link" class:active={$page.url.pathname === '/projects'}>
        Projects
      </a>
    </div>
    
    <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
      {#if darkMode}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      {:else}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      {/if}
    </button>
  </div>
</nav>

<style>
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  :global(.dark) .nav-container {
    background: rgba(30, 30, 30, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .nav-brand {
    display: flex;
    align-items: center;
  }
  
  .brand-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-color);
    background: linear-gradient(135deg, var(--accent-color), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .nav-link:hover {
    color: var(--text-primary);
    background: rgba(var(--accent-rgb), 0.1);
  }
  
  .nav-link.active {
    color: var(--accent-color);
    background: rgba(var(--accent-rgb), 0.15);
  }
  
  .theme-toggle {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .theme-toggle:hover {
    color: var(--text-primary);
    background: rgba(var(--accent-rgb), 0.1);
  }
  
  @media (max-width: 768px) {
    .nav-content {
      padding: 1rem;
    }
    
    .nav-links {
      gap: 1rem;
    }
    
    .nav-link {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
</style>
