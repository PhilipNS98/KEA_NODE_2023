import db from "./connection.js";

const foundShops = await db.shops.find().toArray();
//const foundShops = db.shops.find({ city: "Hellerup" }).toArray();

console.log(foundShops);