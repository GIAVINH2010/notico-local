const db = require('../mongodb');
const mongojs = require('mongojs');

const createApt = data => {
  return new Promise((resolve, reject) => {
    db.apts.find(
      { deliveryId: data.deliveryId, status: { $in: ['requested', 'approved'] } },
      (err, docs) => {
        if (err) reject(err);
        if (docs.length !== 0) {
          resolve(docs);
        }
        else {
          db.apts.insertOne(data, (err, docs) => {
            if (err) reject(err);
            resolve(docs);
          })
        }
      }
    )
  }).then(docs)
}

const deleteApt = _id => {
  return new Promise((resolve, reject) => {
    db.apts.remove(
      { _id: mongojs.ObjectId(_id) },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      })
  })
}

const updateApt = (_id, data) => {
  return new Promise((resolve, reject) => {
    db.apts.updateOne(
      { _id: mongojs.ObjectId(_id) },
      {
        $set: data
      },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      })
  })
}

module.exports = {
  createApt,
  deleteApt,
  updateApt
}