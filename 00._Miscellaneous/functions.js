//possible because of hoisting
console.log(random(0, 10));

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

const randomAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

//implicit returns function body after the ""=>" called lamda.
const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min)

// a callback function is a function passed as arguement that you call back.
function genericActionPerformer(genericAction, genericName){
    // do stuff...

    return genericAction(genericName);
}


// task without touching the two functions above but still using them below
// task make  it console.log Tobias is subtracting
const subtract = (name) => `${name} is subtracting`;
console.log(genericActionPerformer(subtract, "Tobias"))


/** TASK
 * Make it say Nicolas is walking 
*/
const walk = (name) => `${name} is walking`;
console.log(genericActionPerformer(walk, "Nicolas"))

/**Task
 *  read: Andrea
 */
console.log(genericActionPerformer((name) => `${name} is reading`, "Andrea"));
