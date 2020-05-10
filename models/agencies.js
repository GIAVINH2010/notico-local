const db = require("../mongodb");
const mongojs = require("mongojs");

const getAgencyByLabel = (label) => {
  return new Promise((resolve, reject) => {
    db.agences.findOne({ libelle: label }, (err, docs) => {
      if (err) reject(err);
      resolve(docs);
    });
  }).then((docs) => {
    return docs;
  });
};

const get_oneagence = function (id, callback) {
  var id = ObjectId(id);
  db.agences.findOne(
    { _id: mongojs.ObjectId(_id) },
    {
      libelle: true,
      adresse: true,
      login: true,
      passwd: true,
      lang: true,
      timezone: true,
      planning: 1,
    },
    function (err, doc) {
      if (err) {
        console.log("Error message: ", err.message);
      }
      callback(docs);
    }
  );
};

const createAgency = (data, callback) => {
  db.agences.save(data, (err, docs) => {
    if (err) {
      console.log("Error message: ", err.message);
    }
    callback(docs);
  });
};

const editAgency = (_id, data, callback) => {
  db.agences.update(
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
};

const deleteAgency = (_id, callback) => {
  db.agences.remove({ _id: mongojs.ObjectId(_id) }, true, (err, docs) => {
    if (err) {
      console.log("Error message: ", err.message);
    }
    callback(docs);
  });
};

const getAgencyTimeslot = (label, zone) => {
  return new Promise((resolve, reject) => {
    db.agences.findOne(
      {
        libelle: label,
        planning: { zone: zone },
      },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      }
    );
  });
};

module.exports = {
  getAgencyByLabel,
  get_oneagence,
  createAgency,
  editAgency,
  getAgencyTimeslot,
  deleteAgency,
};
