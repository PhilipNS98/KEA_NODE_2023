/*
Why: Because Javascript is single-threaded

Examples:
Fetching over a network
Many / Heavy calculations
Cryptographic functions
Reading / Writing to files
Databases
*/

/* Solution 1: Callbacks
Con: Callback hell, Pyramid of doom
*/

/* Solution 2: Promises

Two states:
- pending
- fulfilled
    - rejected
    - resolved

*/

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yaaaay");
    }, 3000)
})
.then(successMessage => console.log(successMessage));
 */
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw "Error message";
            resolve("Yaaaay")
        } catch (errorMessage) {
            reject(errorMessage);
        }
    }, 3000)
})
    .then(successMessage => console.log("Success message: ", successMessage))
    .catch(errorMessage => console.log("Error message: ", errorMessage))

//task create a function called celebrate that returns a promise that
// celebrates or not (up to you)
function celebrate(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`Yaaaay LETS CELEBRATE!!! ${name}`)
            } else {
                reject("Nothing to celebrate...")
            }
        }, 3000)
    })
}
// task: call celebrate and handle resolve / reject
celebrate("All of us")
    .then(celebrationMessage => console.log(celebrationMessage))
    .catch(mourningMessage => console.log(mourningMessage))


// task create a function called "somethingGoodSomethingBad"
// it should return a new promise
// it should utilize both resolve and reject
// create a timeout to simulate asynchronous behaviour

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                //throw "something bad"
                resolve("something good")
            } catch (errorMessage) {
                reject(errorMessage)
            }
        }, 3000)
    })
}
/* 
somethingGoodSomethingBad()
    .then(goodMessage => console.log(goodMessage))
    .catch(badMessage => console.log(badMessage))
 */
//IIEF
(async function getGoodOrBadMessage() {
    try {
        const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
        const celebrationMessage = await celebrate("all of us");
        console.log(somethingGoodSomethingBadMessage, celebrationMessage);
    } catch (error) {

    }

})();

function parallel() {
    Promise.all([somethingGoodSomethingBad(), celebrate("All of us")]);
}


