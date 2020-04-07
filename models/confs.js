const db = require('../mongodb');
const mongojs = require('mongojs');

const getConfs = (callback) => {
  return new Promise((resolve, reject) => {
    db.configuration.findOne(
      {},
      {
        _id: 0,
        c_conflogo: 1,
        c_logobo: 1,
        c_parcours_on: 1,
        c_planning: 1,
        c_appointment: 1,
        c_geoloc_display_transpo: 1
      },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      }
    )
  }).then(docs => {
    return docs
  })
}

module.exports = {
  getConfs
}