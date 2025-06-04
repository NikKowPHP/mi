<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import '../app.css';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Navigation />

{@render children?.()}
