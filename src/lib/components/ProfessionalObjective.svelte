<script lang="ts">
  interface Props {
    objective: string;
  }

  let { objective }: Props = $props();
</script>

<div class="objective-container">
  <h3 class="objective-title">Professional Objective</h3>

  <div class="objective-card">
    <div class="objective-icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </div>
    <p class="objective-text">{objective}</p>
  </div>
</div>

<style>
  .objective-container {
    margin-bottom: 2.5rem;
  }

  .objective-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .objective-card {
    background: var(--card-background);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
  }

  .objective-icon {
    color: var(--accent-color);
    background: rgba(var(--accent-rgb), 0.1);
    padding: 0.75rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .objective-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 768px) {
    .objective-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.25rem;
    }

    .objective-text {
      font-size: 1rem;
    }
  }
</style>
