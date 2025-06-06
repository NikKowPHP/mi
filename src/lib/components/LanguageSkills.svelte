<script lang="ts">
  import { onMount } from "svelte";

  interface Language {
    name: string;
    level: string;
    proficiency: number;
    icon: string;
  }

  interface Props {
    languages: Language[];
  }

  let { languages }: Props = $props();
  let mounted = $state(false);
  let visibleItems = $state<Set<string>>(new Set());

  onMount(() => {
    mounted = true;

    // Animate progress bars

    languages.forEach((lang, index) => {
      setTimeout(() => {
        visibleItems.add(lang.name);
        visibleItems = new Set(visibleItems);
      }, 300 * index);
    });
  });
</script>

<div class="languages-container" class:mounted>
  <div class="languages-grid">
    {#each languages as language}
      <div class="language-card">
        <div class="language-header">
          <div class="language-icon">{language.icon}</div>
          <div class="language-info">
            <h4 class="language-name">{language.name}</h4>
            <p class="language-level">{language.level}</p>
          </div>
        </div>

        <div class="progress-container">
          <div
            class="progress-bar"
            class:visible={visibleItems.has(language.name)}
            style="--progress-width: {language.proficiency}%"
          ></div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .languages-container {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .languages-container.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .languages-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .languages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .language-card {
    background: var(--card-background);
    border-radius: 16px;
    padding: 1.25rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .language-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  .language-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .language-icon {
    font-size: 1.75rem;
    line-height: 1;
  }

  .language-info {
    flex: 1;
  }

  .language-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .language-level {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .progress-container {
    height: 8px;
    background: var(--background-secondary);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    width: 0;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-secondary)
    );
    border-radius: 4px;
    transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .progress-bar.visible {
    width: var(--progress-width);
  }

  @media (max-width: 768px) {
    .languages-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
