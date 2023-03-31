<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    let cookies = ["🍪", "🍪", "🍪", "🍪", "🍪"]


    function handleShowLove(message){
        console.log(message);
    }
    function handleAskForAllowance(message){
        console.log(message)
        niblings.map((nibling) => nibling.allowance += 100 )
        console.log(niblings)
    }
    function handleEatCookie(){
        if (cookies.length === 0) {
            console.log("Aaaaaw, no more cookies left...")
        } else {
            cookies.pop();
            cookies = cookies;
            console.log("Have a cookie my child: 🍪")
        }
    }
</script>

<!-- Task: A nibling should be allowed to ask a pibling for allowance
a nibling should have a certain amount of money 
When they ask for allowance all niblings should get 100 of whatever currency 
-->

<h2>{name}</h2>

<p>Cookie Jar : {cookies}</p>

{#each niblings as nibling (nibling.id)}
    <Nibling {nibling} 
    onAskForAllowance={handleAskForAllowance} 
    onShowLove={handleShowLove}
    onEatCookie={handleEatCookie} 
    piblingName={name}/>
{/each}

<!--Looping with index-->
<!-- {#each niblings as nibling, i}
    <h5>{i}</h5>
    <Nibling {nibling} />
{/each}
 -->
