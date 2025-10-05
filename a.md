```xml
<response>
  <reasoning>
    The user has provided a build error from Vite. The error message, "`:global(...)` must contain exactly one selector," points to a CSS syntax issue in the `src/routes/book/+page.svelte` file I just created.

    The problematic line is `.prose :global(h1, h2, h3)`. The `:global()` function in Svelte can only wrap a single selector. To fix this, I need to rewrite the rule to apply `:global()` to each selector individually.

    My plan is:
    1.  Modify `src/routes/book/+page.svelte`.
    2.  Change `.prose :global(h1, h2, h3)` to `.prose :global(h1), .prose :global(h2), .prose :global(h3)`.
    3.  Update `TASKS.md` to add and complete a new task for fixing this bug.
  </reasoning>
  <modifications>
    <file path="src/routes/book/+page.svelte">
      <![CDATA[
<script lang="ts">
  import { onMount } from 'svelte';
  import { readingProgress } from '$lib/stores/readingProgress';
  import { book as enBook } from '$lib/data/book-generated/en';
  // Placeholder for French content; create fr/_meta.json to generate this file
  import { book as frBook } from '$lib/data/book-generated/fr';

  let bookContent;
  $: bookContent = $readingProgress.language === 'en' ? enBook : frBook;

  let currentSection;
  $: currentSection = bookContent.sections[$readingProgress.sectionIndex];
  
  let progressPercentage = 0;
  $: progressPercentage = (($readingProgress.sectionIndex + 1) / bookContent.sections.length) * 100;

  onMount(() => {
    const savedProgress = localStorage.getItem('readingProgress');
    if (savedProgress) {
      readingProgress.set(JSON.parse(savedProgress));
    }

    const unsubscribe = readingProgress.subscribe(value => {
      localStorage.setItem('readingProgress', JSON.stringify(value));
    });
    
    setTimeout(() => window.scrollTo(0, $readingProgress.scrollPosition), 100);

    return unsubscribe;
  });

  function handleScroll() {
    readingProgress.update(p => ({ ...p, scrollPosition: window.scrollY }));
  }

  function goToSection(index: number) {
    if (index >= 0 && index < bookContent.sections.length) {
      readingProgress.update(p => ({ ...p, sectionIndex: index, scrollPosition: 0 }));
      window.scrollTo(0, 0);
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="reader-container">
  <header class="reader-header">
    <a href="/" class="back-link">&larr; Back to Portfolio</a>
    <div class="controls">
      <button class:active={$readingProgress.language === 'en'} on:click={() => $readingProgress.language = 'en'}>EN</button>
      <button class:active={$readingProgress.language === 'fr'} on:click={() => $readingProgress.language = 'fr'}>FR</button>
    </div>
  </header>

  <div class="progress-container">
    <div class="progress-bar" style="width: {progressPercentage}%" />
  </div>

  <main class="content-main">
    <article class="prose">
      <h1>{currentSection.title}</h1>
      {@html currentSection.content}
    </article>
  </main>

  <footer class="reader-footer">
    <button on:click={() => goToSection($readingProgress.sectionIndex - 1)} disabled={$readingProgress.sectionIndex === 0}>
      Previous
    </button>
    <span>{`Section ${$readingProgress.sectionIndex + 1} of ${bookContent.sections.length}`}</span>
    <button on:click={() => goToSection($readingProgress.sectionIndex + 1)} disabled={$readingProgress.sectionIndex >= bookContent.sections.length - 1}>
      Next
    </button>
  </footer>
</div>

<style>
  /* Basic styles for a clean reading experience */
  .reader-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    font-family: var(--font-family);
  }
  .reader-header, .reader-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
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
  }
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
</style>
      ]]>
    </file>
    <file path="TASKS.md">
      <![CDATA[
- [x] Build a multi-language book reader feature
- [x] Fix `:global()` CSS syntax error in book reader page
      ]]>
    </file>
  </modifications>
</response>
```