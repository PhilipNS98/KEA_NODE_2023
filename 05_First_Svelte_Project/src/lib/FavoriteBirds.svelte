<script>
    import Bird from "./Bird.svelte";

    const birds = ["Dove", "Owl", "Turkey", "Eagle", "Dodo"];
    const birdEmojis = ["🕊️", "🦉", "🦃", "🦅", "🦤"];

    let birdIndex = 0;
    function changeFavoriteBird() {
        birdIndex = (birdIndex + 1) % birds.length;
    }
</script>

<h2>Favorite Bird</h2>

<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
    <Bird
    name={birds[birdIndex]} 
    emoji={birdEmojis[birdIndex]} 
    />
</div>

<h2>All birds that i know of </h2>
{#each birds as bird}
<Bird name={bird} emoji={"???"} />
{/each}
