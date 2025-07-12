Of course. Based on the "PrepAI" project's Apple-inspired design system and your existing portfolio codebase, I've created a detailed, step-by-step plan to refactor your website's UI for 100% coverage.

This plan is broken down into atomic tasks to ensure a systematic and manageable implementation.

---

# TODO: UI Refactoring to Apple-Inspired Design System

## Phase 1: Foundational Style & Theming

**Objective:** Replace the core styling of the application with the new, modern design system derived from the PrepAI project. This will establish the visual foundation for all subsequent component and page-level changes.

*   [ ] **Task 1.1: Overhaul Global CSS**
    *   **File:** `src/app.css`
    *   **Action:** Replace the entire content of this file with the new design system. This includes new CSS variables for colors (using `oklch`), typography, border-radius, and dark mode styles. The new CSS should also include the Apple-inspired typography classes (`.text-large-title`, `.text-title-1`, etc.).

*   [ ] **Task 1.2: Update Font Dependencies**
    *   **File:** `package.json`
    *   **Action:** Remove the `@fontsource/inter` dependency. Add the `geist` font package to replicate the modern aesthetic.
    *   **Command:** `npm install geist`
    *   **Command:** `npm uninstall @fontsource/inter`

*   [ ] **Task 1.3: Apply New Font to Base Layout**
    *   **File:** `src/app.html`
    *   **Action:** Ensure the `<body>` tag has the necessary classes to apply the new sans-serif font across the entire application, similar to how PrepAI uses `geist-sans`.
    *   **Note:** You will also need to import the new font in `src/routes/+layout.svelte` or `src/app.css`.

## Phase 2: Global Component Refactoring

**Objective:** Update the core, reusable components to align with the new design system's aesthetic and functionality.

*   [ ] **Task 2.1: Restyle Navigation Bar**
    *   **File:** `src/lib/components/Navigation.svelte`
    *   **Action:** Convert the existing navigation bar into a floating, glassmorphism-style component.
        *   Update the background to use `rgba` and `backdrop-filter: blur()`.
        *   Modify the border to match the subtle new theme.
        *   Ensure the brand text (`AC`) and navigation links (`About`, `Projects`) use the new color and font variables.
        *   Update the active link state styling to match the new accent colors.
        *   Restyle the theme-toggle button to be a ghost/icon button.

*   [ ] **Task 2.2: Restyle `ProjectCard` Component**
    *   **File:** `src/lib/components/ProjectCard.svelte`
    *   **Action:** This is a critical component.
        *   Update the card's main container to use the new `--card-background`, `--border-color`, and `--radius`.
        *   Modify the hover effect to be a subtle transform and shadow change as seen in the PrepAI example.
        *   Restyle the `View Live`, `View Code`, and `View Details` links to look like the new, stylized buttons (e.g., primary, secondary, or ghost variants).
        *   Update the technology tags (`<span class="tech-tag">`) to use the new accent color scheme for badges.

*   [ ] **Task 2.3: Restyle `ImageGallery` Component**
    *   **File:** `src/lib/components/ImageGallery.svelte`
    *   **Action:**
        *   Update the main gallery container and thumbnails to use the new, larger `--radius`.
        *   Adjust the navigation buttons (`prev`/`next`) to match the new icon button style (circular, blurred background).
        *   Ensure all colors used (borders, backgrounds, icons) are mapped to the new CSS variables.

## Phase 3: Page-by-Page Implementation

**Objective:** Apply the new foundational styles and refactored components to every page, ensuring a consistent and polished user experience across the entire site.

*   [ ] **Task 3.1: Refactor Home Page (`+page.svelte`)**
    *   **File:** `src/routes/+page.svelte`
    *   **Action:** Systematically update each section.
        *   **Hero Section:** Apply new typography classes (`.profile-name` -> `.text-large-title`, `.profile-tagline` -> `.text-title-3`). Restyle contact and social links to use the new button/link styles.
        *   **About Me Section (`ProfessionalObjective.svelte`):**
            *   **File:** `src/lib/components/ProfessionalObjective.svelte`
            *   **Action:** Rework the component to match the new card aesthetic. Update the icon container and typography.
        *   **Language Skills Section (`LanguageSkills.svelte`):**
            *   **File:** `src/lib/components/LanguageSkills.svelte`
            *   **Action:** Update each language item to use the new card styles. The progress bar's gradient should be updated to use the new `--accent-color` and `--accent-secondary`.
        *   **Professional Experience Section (`Timeline.svelte`):**
            *   **File:** `src/lib/components/Timeline.svelte`
            *   **Action:** This requires a significant visual overhaul. Rework the timeline items to appear cleaner. The content container for each job should adopt the new card styling. Update all badges and text to use the new theme variables.
        *   **Interests Section:** Restyle the interest cards to use the new badge/tag styling.

*   [ ] **Task 3.2: Refactor Projects Page (`/projects/+page.svelte`)**
    *   **File:** `src/routes/projects/+page.svelte`
    *   **Action:**
        *   Update the header (`.page-title`, `.page-subtitle`) with the new typography classes.
        *   Restyle the technology filter buttons to match the new `Button` component style (pills with variants for active and hover states).
        *   The grid will now contain the already-restyled `ProjectCard` components.

*   [ ] **Task 3.3: Refactor Project Detail Page (`/projects/[projectSlug]/+page.svelte`)**
    *   **File:** `src/routes/projects/[projectSlug]/+page.svelte`
    *   **Action:**
        *   Update all titles and descriptions with the new typography classes.
        *   Restyle the `Back to Projects`, `View Live`, and `View Code` links to use the new `Button` component styles.
        *   Update the "Technologies Used" section to use the new badge/tag styling.
        *   Restyle the "Challenges" and "Learnings" lists for better alignment with the clean, modern aesthetic.

*   [ ] **Task 3.4: Refactor 404 Page**
    *   **File:** `src/routes/404/+page.svelte`
    *   **Action:**
        *   Update the component to use the new card styling for the main content block.
        *   Apply new typography classes to the "404" heading and descriptive text.
        *   Restyle the "Go to Homepage" link as a primary action `Button`.

## Phase 4: Final Polish & Verification

**Objective:** Review the entire application to catch any inconsistencies and ensure the new design system has been applied comprehensively.

*   [ ] **Task 4.1: Cross-Browser and Responsiveness Check**
    *   **Action:** Manually browse the entire website on different screen sizes (desktop, tablet, mobile) and in different browsers (Chrome, Firefox, Safari) to ensure the new UI is consistent and bug-free.
*   [ ] **Task 4.2: Dark Mode Verification**
    *   **Action:** Toggle between light and dark modes on every page and component to confirm all elements adapt correctly and there are no glaring visual issues.
*   [ ] **Task 4.3: Code Cleanup**
    *   **Action:** Remove any old, commented-out CSS variables or classes from all `.svelte` and `.css` files. Run a code formatter like Prettier to ensure style consistency.