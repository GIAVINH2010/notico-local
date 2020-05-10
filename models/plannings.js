const db = require("../mongodb");
const mongojs = require("mongojs");

// const createPlanning = (plans, callback) => {
//   db.plannings.insertMany(plans, (err, docs) => {
//     if (err) {
//       console.log("Error message: ", err.message);
//     }
//     callback(docs);
//   });
// };

const createPlanning = (plan, callback) => {
  db.plannings.save(plan, (err, docs) => {
    if (err) {
      console.log("Error message: ", err.message);
    }
    callback(docs);
  });
};

const editPlanning = (_id, data, callback) => {
  db.plannings.update(
    {
      _id: mongojs.ObjectId(_id),
    },
    {
      $set: data,
    },
    (err, docs) => {
      if (err) {
        console.log("Error message: ", err.message);
      }
      callback(docs);
    }
  );
}

const deletePlanning = (_ids, callback) => {
  _ids = _ids.map((_id) => mongojs.ObjectId(_id));
  console.log("deletePlanning -> _ids", _ids);

  db.plannings.remove({ _id: { $in: _ids } }, (err, docs) => {
    if (err) {
      console.log("Error message: ", err.message);
    }
    callback(docs);
  });
};

module.exports = {
  createPlanning,
  deletePlanning,
  editPlanning
};
