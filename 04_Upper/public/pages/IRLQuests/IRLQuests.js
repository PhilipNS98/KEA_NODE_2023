// url = https://www.boredapi.com/api/
// task fetch from boredapi and console log it


function fetchQuest(activityQueryString = "") {
    fetch('https://www.boredapi.com/api/activity' + activityQueryString)
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
        });
}

function getNewQuest() {
    const dropdown = document.getElementById("activity-dropdown");
    fetchQuest(`?type=${dropdown.value}`)
}

document.getElementById("fetch-new-quest-btn").addEventListener("click", getNewQuest);





