import { writable } from 'svelte/store';

export const readingProgress = writable({
  language: 'en',
  sectionIndex: 0,
  scrollPosition: 0,
  fontSize: 3, // 1-5 scale
  paddingSize: 3 // 1-5 scale
});
      