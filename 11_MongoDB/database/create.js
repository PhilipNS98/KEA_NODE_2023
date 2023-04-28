import db from "./connection.js";

 const newShop =  await db.shops.insertOne({ city: "Roskilde", shops: [] });

 console.log(newShop)