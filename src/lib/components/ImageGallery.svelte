<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    images: string[];
    title: string;
  }

  let { images, title }: Props = $props();
  let currentIndex = $state(0);
  let loadedImages = $state<Set<number>>(new Set());
  let isTransitioning = $state(false);
  let galleryElement: HTMLElement;

  function handleImageLoad(index: number) {
    loadedImages.add(index);
    loadedImages = new Set(loadedImages);
  }

  function nextImage() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function prevImage() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function goToImage(index: number) {
    if (isTransitioning || index === currentIndex) return;
    isTransitioning = true;
    currentIndex = index;
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  // Touch support
  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextImage(); // Swipe left
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevImage(); // Swipe right
    }
  }

  onMount(() => {
    // Preload adjacent images
    if (images.length > 1) {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;

      const nextImg = new Image();
      nextImg.src = images[nextIndex];

      const prevImg = new Image();
      prevImg.src = images[prevIndex];
    }
  });
</script>

<div
  class="gallery-container"
  bind:this={galleryElement}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
>
  <div class="gallery-main">
    <button
      class="gallery-nav prev"
      onclick={prevImage}
      aria-label="Previous image"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <div class="gallery-image-container">
      {#each images as image, i}
        <div
          class="gallery-image-wrapper"
          class:active={i === currentIndex}
          class:prev={i === (currentIndex - 1 + images.length) % images.length}
          class:next={i === (currentIndex + 1) % images.length}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`${title} - Image ${i + 1}`}
            class:loaded={loadedImages.has(i)}
            onload={() => handleImageLoad(i)}
            loading={i === currentIndex ? "eager" : "lazy"}
          />
        </div>
      {/each}

      <div class="image-counter">
        <span>{currentIndex + 1} / {images.length}</span>
      </div>
    </div>

    <button
      class="gallery-nav next"
      onclick={nextImage}
      aria-label="Next image"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </div>

  {#if images.length > 1}
    <div class="gallery-thumbnails">
      {#each images as image, i}
        <button
          class="thumbnail-button"
          class:active={i === currentIndex}
          onclick={() => goToImage(i)}
          aria-label={`View image ${i + 1}`}
        >
          <div class="thumbnail-wrapper">
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} - Thumbnail ${i + 1}`}
              loading="lazy"
            />
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .gallery-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .gallery-main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
    background: var(--background-secondary);
    aspect-ratio: 16 / 9;
  }

  .gallery-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .gallery-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(100%);
    transition:
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      opacity 0.5s ease;
  }

  .gallery-image-wrapper.prev {
    transform: translateX(-100%);
    opacity: 0;
    z-index: 1;
  }

  .gallery-image-wrapper.active {
    transform: translateX(0);
    opacity: 1;
    z-index: 2;
  }

  .gallery-image-wrapper.next {
    transform: translateX(100%);
    opacity: 0;
    z-index: 1;
  }

  .gallery-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-image-wrapper img.loaded {
    opacity: 1;
  }

  .gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  :global(.dark) .gallery-nav {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }

  .gallery-nav:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  :global(.dark) .gallery-nav:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .gallery-nav.prev {
    left: 1rem;
  }

  .gallery-nav.next {
    right: 1rem;
  }

  .image-counter {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    backdrop-filter: blur(5px);
    z-index: 5;
  }

  .gallery-thumbnails {
    display: flex;
    gap: 0.75rem;
    overflow-x: auto;
    padding: 0.5rem 0;
    scrollbar-width: thin;
    scrollbar-color: var(--accent-color) transparent;
  }

  .gallery-thumbnails::-webkit-scrollbar {
    height: 4px;
  }

  .gallery-thumbnails::-webkit-scrollbar-track {
    background: transparent;
  }

  .gallery-thumbnails::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 4px;
  }

  .thumbnail-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0.6;
  }

  .thumbnail-button:hover {
    opacity: 0.8;
  }

  .thumbnail-button.active {
    opacity: 1;
  }

  .thumbnail-wrapper {
    width: 80px;
    height: 60px;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  .thumbnail-button.active .thumbnail-wrapper {
    border-color: var(--accent-color);
  }

  .thumbnail-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .gallery-nav {
      width: 36px;
      height: 36px;
    }

    .gallery-nav.prev {
      left: 0.5rem;
    }

    .gallery-nav.next {
      right: 0.5rem;
    }

    .thumbnail-wrapper {
      width: 60px;
      height: 45px;
    }
  }

  @media (max-width: 480px) {
    .gallery-thumbnails {
      gap: 0.5rem;
    }

    .thumbnail-wrapper {
      width: 50px;
      height: 40px;
    }
  }
</style>
