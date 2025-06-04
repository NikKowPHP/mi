<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import Navigation from './lib/components/Navigation.svelte';
  import Home from './routes/+page.svelte';
  import Projects from './routes/projects/+page.svelte';
  import './app.css';
</script>

<Navigation />

<Router>
  <Route path="/" component={Home} />
  <Route path="/projects" component={Projects} />
</Router>
