const rocks = [
    {name: "Led Zeppelin", age: 50},
    {name: "Dwayne Johnson", age: 47},
    {name: "Neptune", age: 100_000_000_000},
];

// loop methods: map, filter, find, reduce, sort, forEach

// assignment make all the rocks one year older and save the value to rockAgedOneYear

const rocksAgedOneYear = rocks.map(rock => {
    return {
        ...rock,
        age: rock.age + 1
      };
});

console.log(rocksAgedOneYear)

// assignment give me the rocks that have even ages

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0); 

console.log(evenAgedRocks)

