import db from "./connection.js";

const isDeleteMode = process.argv.findIndex((arguement) =>
    arguement === "delete_mode") === -1 ? false : true;

if (isDeleteMode) {
    db.exec(`DROP TABLE users;`)
}

// (DDL)
db.exec(`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name TEXT NOT NULL,
        name TEXT,
        email TEXT NOT NULL,
        password TEXT NOT NULL 
        );
        `
);

/* //Seeding (DML)    
if (isDeleteMode) {

    db.exec(`INSERT INTO users 
    (user_name, name, email, password)
    VALUES ();`);
} */

