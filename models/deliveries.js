const db = require('../mongodb');

const getDelivery = (cmdId) => {
  return new Promise((resolve, reject) => {
    db.deliveries.findOne(
      { 'cmdId': cmdId },
      {
        _id: 0,
        cmdId: 1,
        agenceLibelle: 1,
        name: 1,
        lang: 1,
        phone: 1,
        email: 1,
        address: 1,
        postCode: 1,
        city: 1,
        country: 1,
        delivDate: 1,
        delivTime: 1,
        delivEndDate: 1,
        delivEndTime: 1
      },
      (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      })
  }).then(docs => {
    return docs
  })
}

module.exports = {
  getDelivery
}