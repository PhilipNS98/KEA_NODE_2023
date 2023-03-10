// url = https://www.boredapi.com/api/
// task fetch from boredapi and console log it

fetch('https://www.boredapi.com/api/activity')
.then(response => response.json())
.then(res => {
    console.log(res)
    // task make the activity visible
    // in the quest header tag.
    //without creating a variable:
    document.getElementById("quest").innerText = res.activity + ".";

    /*with creating a variable
    const questDiv = document.getElementById("quest");
    questDiv.innerText = res.activity + ".";
    */
})
    



