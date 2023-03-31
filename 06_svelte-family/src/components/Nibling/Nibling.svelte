<script>
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onAskForAllowance;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessage.js";

    let fridgeMessage = "";

    function handleWritefridgeMessage() {
        fridgeMessages.update((currentFridgeMessages) => {
            currentFridgeMessages.push(fridgeMessage);
            return currentFridgeMessages;
        });
    }
</script>

<div
    class:is-girl={nibling.isGirl}
    class:is-boy={!nibling.isGirl}
    class={nibling.blackSheep || "not-a-black-sheep"}
>
    {#if nibling.isGirl}
        <p>Niece: {nibling.name}</p>
    {:else}
        <p>Nephew: {nibling.name}</p>
    {/if}
</div>

<p>{nibling.cookies}</p>

<button
    on:click={() =>
        onShowLove(
            `Hey ${piblingName}. It's me ${nibling.name} and i love you.`
        )}>Show Love</button
>

<button
    on:click={() =>
        onAskForAllowance(
            `Hey ${nibling.name}. Sinced you asked so nicely, here is 100 bucks for all your niblings`
        )}>Ask for Allowance</button
>

<button on:click={() => onEatCookie()}>Eat a cookie</button>

<p>There are {$fridgeMessages} messages on the fridge</p>
<input bind:value={fridgeMessage}>
<button on:click={handleWritefridgeMessage}
    >Write a message on the fridge</button
>

<style>
    .is-girl {
        border: 3px solid pink;
    }
    .is-boy {
        border: 3px solid blue;
    }

    .not-a-black-sheep {
        background-color: aliceblue;
        color: black;
    }
    .medium-black-sheep {
        background-color: burlywood;
    }
    .ultra-black-sheep {
        background-color: brown;
    }
</style>
