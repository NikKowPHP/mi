<script lang="ts">
  import { onMount } from 'svelte';
  import { readingProgress } from '$lib/stores/readingProgress';
  import { book as enBook } from '$lib/data/book-generated/en';
  import { book as frBook } from '$lib/data/book-generated/fr';
  import { enhance } from '$app/forms';
  import type { ActionData, PageData } from './$types';

  interface Props {
    data: PageData;
    form: ActionData;
  }
  let { data, form }: Props = $props();

  let settingsOpen = $state(false);

  // Use $derived for computed values in runes mode
  let bookContent = $derived(
    $readingProgress.language === 'fr' && frBook.sections.length > 0 ? frBook : enBook
  );

  let currentSection = $derived(data.authorized ? bookContent.sections[$readingProgress.sectionIndex] : null);
  
  let progressPercentage = $derived(
    data.authorized && bookContent.sections.length > 0 
      ? (($readingProgress.sectionIndex + 1) / bookContent.sections.length) * 100 
      : 0
  );

  onMount(() => {
    if (!data.authorized) return;

    const savedProgress = localStorage.getItem('readingProgress');
    if (savedProgress) {
      const defaultState = { language: 'en', sectionIndex: 0, scrollPosition: 0, fontSize: 3, paddingSize: 3 };
      readingProgress.set({ ...defaultState, ...JSON.parse(savedProgress) });
    }
    
    setTimeout(() => window.scrollTo(0, $readingProgress.scrollPosition), 100);
  });

  // Use $effect to react to state changes for side effects like localStorage
  $effect(() => {
    if (data.authorized) {
      localStorage.setItem('readingProgress', JSON.stringify($readingProgress));
    }
  });

  function handleScroll() {
    if (!data.authorized) return;
    readingProgress.update(p => ({ ...p, scrollPosition: window.scrollY }));
  }

  function goToSection(index: number) {
    if (index >= 0 && index < bookContent.sections.length) {
      readingProgress.update(p => ({ ...p, sectionIndex: index, scrollPosition: 0 }));
      window.scrollTo(0, 0);
    }
  }

  function changeFontSize(delta: number) {
    readingProgress.update(p => {
      const newSize = Math.max(1, Math.min(5, p.fontSize + delta));
      return { ...p, fontSize: newSize };
    });
  }

  function changePaddingSize(delta: number) {
    readingProgress.update(p => {
      const newSize = Math.max(1, Math.min(5, p.paddingSize + delta));
      return { ...p, paddingSize: newSize };
    });
  }

  function setLanguage(lang: 'en' | 'fr') {
    readingProgress.update(p => ({ ...p, language: lang, sectionIndex: 0, scrollPosition: 0 }));
  }
</script>

<svelte:window on:scroll={handleScroll} />

{#if data.authorized}
  <main class="main-content">
    <div 
      class="reader-container"
      data-font-size={$readingProgress.fontSize}
      data-padding-size={$readingProgress.paddingSize}
    >
      <header class="reader-header">
        <a href="/" class="back-link">&larr; Back to Portfolio</a>
        <div class="controls">
          <button class="settings-toggle" on:click={() => settingsOpen = !settingsOpen} aria-label="Reading settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
          <button class:active={$readingProgress.language === 'en'} on:click={() => setLanguage('en')}>EN</button>
          <button class:active={$readingProgress.language === 'fr'} on:click={() => setLanguage('fr')}>FR</button>
        </div>
      </header>

      {#if settingsOpen}
      <div class="settings-panel">
        <div class="setting-group">
          <span class="setting-label">Font Size</span>
          <button on:click={() => changeFontSize(-1)} disabled={$readingProgress.fontSize <= 1}>A-</button>
          <button on:click={() => changeFontSize(1)} disabled={$readingProgress.fontSize >= 5}>A+</button>
        </div>
        <div class="setting-group">
          <span class="setting-label">Padding</span>
          <button on:click={() => changePaddingSize(-1)} disabled={$readingProgress.paddingSize <= 1}>Less</button>
          <button on:click={() => changePaddingSize(1)} disabled={$readingProgress.paddingSize >= 5}>More</button>
        </div>
      </div>
      {/if}

      <div class="progress-container">
        <div class="progress-bar" style="width: {progressPercentage}%" />
      </div>

      <main class="content-main">
        {#if currentSection}
          <article class="prose">
            <h1>{currentSection.title}</h1>
            {@html currentSection.content}
          </article>
        {:else}
          <p>Loading content...</p>
        {/if}
      </main>

      <footer class="reader-footer">
        <button on:click={() => goToSection($readingProgress.sectionIndex - 1)} disabled={$readingProgress.sectionIndex === 0}>
          Previous
        </button>
        <span class="footer-status">{`Section ${$readingProgress.sectionIndex + 1} of ${bookContent.sections.length}`}</span>
        <button on:click={() => goToSection($readingProgress.sectionIndex + 1)} disabled={$readingProgress.sectionIndex >= bookContent.sections.length - 1}>
          Next
        </button>
      </footer>
    </div>
  </main>
{:else}
  <main class="auth-content">
    <div class="password-container">
      <div class="password-card">
        <h1 class="title">Access Restricted</h1>
        <p class="subtitle">Please enter the password to view the book.</p>
        <form method="POST" action="?/login" use:enhance>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          {#if form?.error}
            <p class="error">{form.error}</p>
          {/if}
          <button type="submit" class="submit-btn">Unlock</button>
        </form>
      </div>
    </div>
  </main>
{/if}


<style>
  .main-content {
    padding-top: 80px;
  }
  
  .reader-container {
    margin: 0 auto;
    padding: 1rem;
    font-family: var(--font-family);
    transition: max-width 0.3s ease;
  }

  /* Dynamic Padding */
  .reader-container[data-padding-size='1'] { max-width: 600px; }
  .reader-container[data-padding-size='2'] { max-width: 700px; }
  .reader-container[data-padding-size='3'] { max-width: 800px; }
  .reader-container[data-padding-size='4'] { max-width: 900px; }
  .reader-container[data-padding-size='5'] { max-width: 1000px; }

  .reader-header, .reader-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
  }

  .controls {
    display: flex;
    gap: 0.5rem;
  }

  .settings-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .settings-panel {
    background: var(--background-secondary);
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    border: 1px solid var(--border-color);
  }

  .setting-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .setting-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-right: 0.5rem;
  }

  .progress-container {
    width: 100%;
    height: 4px;
    background-color: var(--border-color);
    border-radius: 2px;
    margin-bottom: 2rem;
  }
  .progress-bar {
    height: 100%;
    background-color: var(--accent-color);
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  .prose {
    line-height: 1.7;
    color: var(--text-primary);
    transition: font-size 0.3s ease;
  }

  /* Dynamic Font Size */
  .reader-container[data-font-size='1'] .prose { font-size: 0.8rem; }
  .reader-container[data-font-size='2'] .prose { font-size: 0.9rem; }
  .reader-container[data-font-size='3'] .prose { font-size: 1rem; }
  .reader-container[data-font-size='4'] .prose { font-size: 1.1rem; }
  .reader-container[data-font-size='5'] .prose { font-size: 1.2rem; }

  .prose :global(h1),
  .prose :global(h2),
  .prose :global(h3) {
    margin-bottom: 1rem;
  }
   .prose :global(p) {
    margin-bottom: 1em;
  }
  button {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--card-background);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  button:hover:not(:disabled) {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .controls button.active {
    background: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
  }
  .back-link {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    transition: color 0.3s ease;
  }
  .back-link:hover {
    color: var(--accent-color);
  }

  /* Auth form styles */
  .auth-content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding-top: 80px;
    background: var(--background-secondary);
  }

  .password-container {
    width: 100%;
    max-width: 400px;
    padding: 1rem;
  }

  .password-card {
    background: var(--card-background);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    text-align: center;
  }

  .title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .input-group {
    text-align: left;
  }

  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .input-group input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--background);
    color: var(--text-primary);
    font-size: 1rem;
  }

  .submit-btn {
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    background: var(--accent-color);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-btn:hover {
    background: var(--accent-secondary);
  }

  .error {
    color: #ff3b30; /* A standard error red */
    font-size: 0.9rem;
    margin-top: -1rem;
  }


  @media (max-width: 600px) {
    .reader-header {
      flex-direction: column;
      gap: 1rem;
    }
    .reader-footer {
      flex-direction: row;
      justify-content: space-between;
    }
    .footer-status {
      display: none; /* Hide text on small screens to save space */
    }
    .settings-panel {
      flex-direction: column;
    }
  }
</style>
      