const db = require('../mongodb');

const getDeliveries = (id) => {
  return new Promise((resolve, reject) => {
    db.deliveries.findOne(
      { 'cmdId': "delivery 3" },
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
  })

}

module.exports = {
  getDeliveries
}