// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = "mongodb://176.31.79.40:27017/planet_vinh_dmp";

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// // Use connect method to connect to the Server
// const db = client.connect((err, db) => {
//   // assert.equal(null, err);
//   if (err) throw err;
//   // const collection = client.db("test").collection("devices");
//   console.log("[MONGO] connected to server");
//   client.close();
//   return db;
// });

// module.exports = db;

const mongojs = require('mongojs');
const collections = ["deliveries"];
const db = mongojs("mongodb://176.31.79.40:27017/planet_vinh_dmp", collections);

console.log("[MONGO] connected to server");
module.exports = db