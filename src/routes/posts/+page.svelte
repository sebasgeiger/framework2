<script>
  export let data;
</script>

<div class="container">
  <article>
    <h1>Blog Posts</h1>
    <p>Welcome to the Posts page of my blog, These four blogs show every team in the NHL, split up by division. There are four divisions: Metropolitan, Alantic, Central, and Pacific.</p>
    <p>The NHL is split into two conferences with two divisions each. The Metropolitan and the Alantic divisions are in the Eastern Conference and the Central and the Pacific divisions are in the Western Conference.</p>  
    <p>Overall, my blog posts are designed to inform, entertain, and educate readers about the NHL.</p>
  </article>
  <aside>
    <h2>All Posts</h2>
    <nav class="sidebar">
      {#each data.summaries as {slug, title}}
        <a href="/posts/{slug}">{title}</a>
      {/each}
    </nav>
    <img src="nhl.png" alt="logo">
  </aside>
</div>

<style>
  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }
  nav a {
    padding: 1rem 0;
  }
  h2 {
    width: 100%;
    text-align: center;
  }
</style>
