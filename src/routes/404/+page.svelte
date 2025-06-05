<script lang="ts">
  import { onMount } from "svelte";

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>404 Not Found - Mikita Kavaliou</title>
  <meta
    name="description"
    content="Page not found on Mikita Kavaliou's portfolio website."
  />
</svelte:head>

<main class="main-content">
  <section class="not-found-section" class:mounted>
    <div class="not-found-content">
      <h1 class="status-code">404</h1>
      <h2 class="message">Page Not Found</h2>
      <p class="description">
        Oops! The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <a href="/" class="home-link">Go to Homepage</a>
    </div>
  </section>
</main>

<style>
  .main-content {
    padding-top: 80px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .not-found-section {
    padding: 4rem 2rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .not-found-section.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .not-found-content {
    max-width: 600px;
    margin: 0 auto;
    background: var(--card-background);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
  }

  .status-code {
    font-size: 6rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 1rem;
    background: linear-gradient(
      135deg,
      var(--accent-color),
      var(--accent-secondary)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .message {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  .home-link {
    display: inline-block;
    padding: 0.9rem 2rem;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 500;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease,
      box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(var(--accent-rgb), 0.3);
  }

  .home-link:hover {
    background: var(--accent-secondary);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(var(--accent-rgb), 0.4);
  }

  @media (max-width: 768px) {
    .status-code {
      font-size: 4rem;
    }

    .message {
      font-size: 2rem;
    }

    .description {
      font-size: 1rem;
    }

    .not-found-content {
      padding: 2rem;
    }

    .home-link {
      padding: 0.7rem 1.5rem;
      font-size: 0.9rem;
    }
  }
</style>
