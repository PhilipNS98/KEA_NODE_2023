/* import jokes from "./jokes.json" assert {type: "json"};
 */

import Sentiment from "sentiment";
const sentiment = new Sentiment();

//assignment fetch a joke from this url and console log
// URL: https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit

/* fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
.then(response => response.json())
.then(result => {
    console.log(result)
}) */

async function getJoke() {
    const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    const response = await fetch(URL);
    const result = await response.json();

    const jokeAnalyze = result.joke || `${result.setup} ${result.delivery}`
    const { score } = sentiment.analyze(jokeAnalyze);
    if (score < 0) {
        //i don't like that joke .. I want to get a new one
        return await getJoke();
    } else {
        return result;
    }
}
export default {
    getJoke
}