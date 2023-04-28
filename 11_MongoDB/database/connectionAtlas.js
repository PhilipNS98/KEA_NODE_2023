import dotenv from "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";

// ${process.env.ATLAS_USER} ${process.env.ATLAS_PASSWORD}
//change url here: 
const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL,{ 
    serverApi: { 
            version: ServerApiVersion, 
            strict: true, 
            deprecationErrors: true, } });

const db = client.db("candy");

const shops = db.collection("shops");

await db.shops.insertOne({ city: "Roskilde", shops: [] });

const foundShops = shops.find().toArray();

console.log(foundShops);

