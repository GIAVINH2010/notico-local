const db = require("../mongodb");
const mongojs = require("mongojs");

const createSlots = (data, callback) => {
  db.slots.insertMany(data, (err, docs) => {
    if (err) {
      console.log("Error message: ", err.message);
    }
    callback(docs);
  });
};

const removeAllSlots = (callback) => {
  db.slots.remove({}, (err, docs) => {
    if (err) {
      console.log("Error message: ", err.message);
    }
    callback(docs);
  });
};

const dropCollection = (callback) => {
  db.slots.drop((err, docs) => {
    if (err) {
      console.log("Error message: ", err.message);
    }
    callback(docs);
  })
}

module.exports = {
  createSlots,
  removeAllSlots,
  dropCollection
};
