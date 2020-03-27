const mongojs = require('mongojs');
const collections = [];
const db = mongojs("mongodb://176.31.79.40:27017/planet_vinh_dmp", collections);

console.log("[MONGO] connected to server");
module.exports = db