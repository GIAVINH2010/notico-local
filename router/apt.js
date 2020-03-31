const express = require('express');
const router = express.Router();

const deliveries = require('../models/deliveries');
const agencies = require('../models/agencies');
const deliverymen = require('../models/deliverymen');

router.get('/delivery', async (req, res, next) => {
  try {
    const { cmdId } = req.query;
    const delivery = await deliveries.getDelivery(cmdId);
    console.log("delivery", delivery)
    const agency = await agencies.getAgencyByLabel(delivery.agenceLibelle);
    console.log("agency", agency)

    let slots = []
    agency.planning.map(plan => {
      if (plan.zone === parseInt(delivery.postCode))
        slots = plan.slots
    })
    console.log("slots", slots)

  } catch (error) {
    console.log("error =>", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }


  // deliveries.getDelivery(cmdId)
  //   .then(delivery => {
  //     // return res.status(200).json({ data })
  //     agencies.getAgencyByLabel(delivery.agenceLibelle)
  //       .then(agency => {
  //         console.log("agency", agency)

  //       })
  //   })
  //   .catch(err => {
  //     console.log("err", err)
  //     return res.status(500).json({ message: "Internal Server Error" })
  //   })

})

router.get('/agency', (req, res, next) => {
  agencies.getAgencyByLabel("DW OPTIM99")
    .then(agency => {
      return res.status(200).json({ agency })
    })
    .catch(err => {
      console.log("err", err)
      return res.status(500).json({ message: "Internal Server Error" })
    })
})

router.post('/create-agency', (req, res, next) => {
  const data = req.body;
  console.log("data", data)

  agencies.createAgency(data)
    .then(created => {
      console.log("created", created);
      return res.status(200).json(created)
    })
    .catch(err => {
      console.log("err", err)
      return res.status(500).json({ message: "Internal Server Error" })
    })
})

router.put('/update-agency', (req, res) => {
  const data = req.body;
  const id = data.agencyId;
  console.log("id", id)
  delete data.agencyId;
  console.log("data", JSON.stringify(data))

  agencies.editAgency(id, data)
    .then(updated => {
      console.log("updated", updated)
      return res.status(200).json(updated)
    })
    .catch(err => {
      console.log("err", err)
      return res.status(500).json({ message: "Internal Server Error" })
    })
})

router.delete('/remove-driver', (req, res) => {
  deliverymen.deleteDriver('Vinh')
    .then(deleted => {
      console.log("deleted", deleted)
      return res.status(200).json(deleted)
    })
    .catch(err => {
      console.log("err", err)
      return res.status(500).json({ message: "Internal Server Error" })
    })
})


module.exports = router;
