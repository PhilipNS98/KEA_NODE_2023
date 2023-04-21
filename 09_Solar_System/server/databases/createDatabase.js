import db from "./connection.js";

const isDeleteMode = process.argv.findIndex((arguement) =>
    arguement === "delete_mode") === -1 ? false : true;

if (isDeleteMode) {
    db.exec(`DROP TABLE planets;`);
    db.exec(`DROP TABLE people;`);
}

// task: in a string create a table called planets
// (DDL)
db.exec(
    `
    CREATE TABLE IF NOT EXISTS planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    distance_from_sun FLOAT NOT NULL,
    number_of_moons INT NOT NULL,
    has_rings BOOLEAN NOT NULL,
    size FLOAT NOT NULL,
    is_habitable BOOLEAN NOT NULL
    );
    `
);

db.exec(`
        CREATE TABLE IF NOT EXISTS people (
        id              INTEGER         PRIMARY KEY AUTOINCREMENT,
        name            TEXT,
        planet_id INTEGER,
        FOREIGN KEY (planet_id) REFERENCES planets (id)
        );
        `
);

//Seeding (DML)    
if (isDeleteMode) {

    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Mercury', 0.39, 0, false, 0.055, false);`);
    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Venus', 0.72, 0, false, 0.815, false);`);
    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Earth', 1, 1, false, 1, true);`);
    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Mars', 1.52, 2, false, 0.107, false);`);
    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Jupiter', 5.20, 79, true, 318, false);`);
    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Saturn', 9.58, 82, true, 95.2, false);`);
    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Uranus', 19.18, 27, true, 14.5, false);`);
    db.exec(`INSERT INTO planets 
    (name, distance_from_sun, number_of_moons, has_rings, size, is_habitable) 
    VALUES ('Neptune', 30.07, 14, true, 17.1, false);`);
}

