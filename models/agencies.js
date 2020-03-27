const db = require('../mongodb');
const mongojs = require('mongojs');

const getAgencyByLabel = (label) => {
  return new Promise((resolve, reject) => {
    db.agences.findOne(
      { 'libelle': label },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      })
  })
}

const createAgency = (data) => {
  return new Promise((resolve, reject) => {
    db.agences.insertOne(
      data,
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      })
  })
}

const editAgency = (id, data) => {
  return new Promise((resolve, reject) => {
    db.agences.updateOne(
      { _id: mongojs.ObjectID(id) },
      { $set: data },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      })
  })
}

module.exports = {
  getAgencyByLabel,
  createAgency,
  editAgency
}