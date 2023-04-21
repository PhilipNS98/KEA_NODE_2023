<script>
// @ts-nocheck  
import { onMount } from "svelte";

onMount(async() => {
    const response = await fetch("http://localhost:8080/auth/allUsers")
    const data = await response.json();
    console.log(data);
})

</script>

<h1>Hallo from Home</h1>


<style>
   
</style>
