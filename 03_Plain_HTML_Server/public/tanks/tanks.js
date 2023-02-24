
/*
task
Step 1: fetch tanks
Step 2: console log tanks
Bonus: Add them to the div: tanks-wrapper
*/
/* fetch("/api/tanks")
.then(response => response.json())
.then(result => {
    const tanksWrapperDiv = document.getElementById("tanks-wrapper");
    result.data.forEach(tank => {
        const tankDiv = document.createElement("div");
        
        const tankName = document.createElement("p");
    });
}); */

fetch("/api/tanks")
.then(response => response.json())
.then(result => {
  const tankDiv = document.createElement("div");
  result.data.forEach(tank => {

    const tankName = document.createElement("p");
    tankName.textContent = tank.name;
    tankDiv.appendChild(tankName);

    const tankNationalityP = document.createElement("p");
    tankNationalityP.textContent = tank.nationality;
    tankDiv.appendChild(tankNationalityP);

    const breakBr = document.createElement("br");
    tankDiv.appendChild(breakBr);
  });
  document.getElementById("tanks-wrapper").appendChild(tankDiv);
});


