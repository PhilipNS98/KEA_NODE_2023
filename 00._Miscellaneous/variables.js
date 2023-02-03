// Rule 1: Have to assign a value when declaring.
const me = {

    /*
    key: value
    === key-value pairs
    */
    name: "Philip"
};

const hobbies = ["Football", "Swimming"];
hobbies.push("Cooking");

// Rule 2. Cannot reassign to constant
// me = {};
me.hobbies = hobbies


me.name = "Johannes";

console.log(me)

 // todo single quotes and double quotes

 // use single quotes or double quotes inside the other ones
 // so there is no need for escape sequences.
 //when using back tics you can use both types of quotes
 const hobbyOne = "Football skill level: '6'";
 const hobbyTwo = 'Swimming skill level: "3"';
 //String interpulation
 const hobbyThree = `Cooking skill level: "'${2 + 2}'"`;
 console.log(hobbyThree)