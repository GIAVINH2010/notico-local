const db = require('../mongodb');
const mongojs = require('mongojs');

const deleteDriver = (label) => {
  return new Promise((resolve, reject) => {
    db.deliverymen.remove(
      { 'libelle': label },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      })
  })
}

module.exports = {
  deleteDriver
}