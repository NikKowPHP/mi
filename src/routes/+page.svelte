<script lang="ts">
  import { onMount } from "svelte";
  import { profileData } from "$lib/data/profile";
  import Timeline from "$lib/components/Timeline.svelte";
  import TechStack from "$lib/components/TechStack.svelte";
  import { employmentData } from "$lib/data/timeline";

  let mounted = $state(false);
  let imageLoaded = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>{profileData.name} - {profileData.tagline} | Portfolio</title>
  <meta
    name="description"
    content="{profileData.bio} Explore my projects and skills in web development."
  />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mikita-kavaliou.online/" />
  <meta
    property="og:title"
    content="{profileData.name} - {profileData.tagline} | Portfolio"
  />
  <meta
    property="og:description"
    content="{profileData.bio} Explore my projects and skills in web development."
  />
  <meta
    property="og:image"
    content="https://mikita-kavaliou.online{profileData.profilePicUrl}"
  />
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://mikita-kavaliou.online/" />
  <meta
    property="twitter:title"
    content="{profileData.name} - {profileData.tagline} | Portfolio"
  />
  <meta
    property="twitter:description"
    content="{profileData.bio} Explore my projects and skills in web development."
  />
  <meta
    property="twitter:image"
    content="https://mikita-kavaliou.online{profileData.profilePicUrl}"
  />
</svelte:head>

<main class="main-content">
  <section class="hero-section" class:mounted>
    <div class="hero-content">
      <div class="profile-section">
        <div class="profile-image-container">
          <img
            src={profileData.profilePicUrl || "/placeholder.svg"}
            alt={profileData.name}
            class="profile-image"
            onload={() => (imageLoaded = true)}
            class:loaded={imageLoaded}
          />
        </div>

        <div class="profile-info">
          <h1 class="profile-name">{profileData.name}</h1>
          <p class="profile-tagline">{profileData.tagline}</p>

          <div class="social-links">
            {#each profileData.socialLinks as link}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
              >
                {#if link.icon === "github"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                {:else if link.icon === "linkedin"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                {:else if link.icon === "twitter"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    />
                  </svg>
                {:else if link.icon === "mail"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                {/if}
                <span>{link.name}</span>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="about-content">
      <h2 class="section-title">About Me</h2>
      <div class="bio-card">
        <p class="bio-text">{profileData.bio}</p>
      </div>
    </div>
  </section>

  <section class="tech-stack-section">
    <div class="tech-stack-content">
      <h2 class="section-title">My Tech Stack</h2>
      <p class="section-subtitle">Technologies I work with</p>
      <TechStack techStack={profileData.techStack} />
    </div>
  </section>

  <section class="timeline-section">
    <div class="timeline-content">
      <h2 class="section-title">Professional Experience</h2>
      <p class="section-subtitle">My journey through the tech industry</p>
      <Timeline employment={employmentData} />
    </div>
  </section>
</main>

<style>
  .main-content {
    padding-top: 80px;
    min-height: 100vh;
  }

  .hero-section {
    padding: 4rem 2rem;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-rgb), 0.05) 0%,
      rgba(var(--accent-secondary-rgb), 0.05) 100%
    );
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .hero-section.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .profile-section {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3rem;
    align-items: center;
  }

  .profile-image-container {
    position: relative;
  }

  .profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border: 4px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .profile-image.loaded {
    opacity: 1;
    transform: scale(1);
  }

  :global(.dark) .profile-image {
    border-color: rgba(255, 255, 255, 0.1);
  }

  .profile-name {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    background: linear-gradient(
      135deg,
      var(--text-primary),
      var(--accent-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .profile-tagline {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }

  :global(.dark) .social-link {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }

  :global(.dark) .social-link:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  .about-section {
    padding: 4rem 2rem;
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
    text-align: center;
  }

  .bio-card {
    background: var(--card-background);
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
  }

  .bio-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin: 0;
  }

  .tech-stack-section {
    padding: 4rem 2rem;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-rgb), 0.02) 0%,
      rgba(var(--accent-secondary-rgb), 0.02) 100%
    );
  }

  .tech-stack-content {
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .profile-section {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }

    .profile-image {
      width: 150px;
      height: 150px;
    }

    .profile-name {
      font-size: 2.5rem;
    }

    .profile-tagline {
      font-size: 1.1rem;
    }

    .social-links {
      justify-content: center;
    }

    .bio-card {
      padding: 2rem;
    }

    .hero-section,
    .about-section,
    .tech-stack-section,
    .timeline-section {
      padding: 2rem 1rem;
    }
  }

  @media (max-width: 768px) {
    .timeline-section {
      padding: 2rem 1rem;
    }
  }

  .timeline-section {
    padding: 4rem 2rem;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-rgb), 0.02) 0%,
      rgba(var(--accent-secondary-rgb), 0.02) 100%
    );
  }

  .timeline-content {
    max-width: 1000px;
    margin: 0 auto;
  }

  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 3rem;
    line-height: 1.6;
  }
</style>
