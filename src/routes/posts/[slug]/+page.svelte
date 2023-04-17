<script>
    export let data;
    const {nhlteams} = data;
    const nhldiv = nhlteams.filter(team => team.division.name == data.post.title)   
    </script>

<article>
    {#each nhldiv as { name, firstYearOfPlay, venue}}  
        <div class="card">
            <h1>{name}</h1>
                <p><b>First Year:</b> {firstYearOfPlay}</p>
                <p><b>Arena:</b> {venue.name}</p>
                <p><b>City:</b> {venue.city}</p>
            </div>
    {/each}
</article>

<style>
    article {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
    .card {
        border: 2px solid black;
        border-radius: 4px;
        padding: .5rem;
        text-align: center;
        background-image: url(/ice3.jpg);
    }
</style> 
