<script>
  import Home from "./components/Home/Home.svelte";
    import Pibling from "./components/Pibling/Pibling.svelte";

  const piblings = ["John", "Mark"];
  const niblings = [
    {
      id: 1,
      name: "Ann",
      isGirl: true,
      allowance: 100,
      cookies: []
    },
    {
      id: 2,
      name: "Amalie",
      isGirl: true,
      blackSheep: "medium-black-sheep",
      allowance: 50,
      cookies: []
    },
    {
      id: 3,
      name: "Peter",
      blackSheep: "ultra-black-sheep",
      allowance: 75,
      cookies: []
    }
  ];


</script>


<Home>
  <h2>This is the home of the Svelte Family</h2>
  <Pibling name={piblings[0]} niblings={niblings} />
  <Pibling name={piblings[1]} niblings={niblings} />
</Home>