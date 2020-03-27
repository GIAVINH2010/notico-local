const express = require('express');
const router = express.Router();

const deliveries = require('../models/deliveries');
const agencies = require('../models/agencies');

router.get('/deliveries', (req, res, next) => {
  deliveries.getDeliveries("delivery 3")
    .then(delivery => {
      return res.status(200).json({ delivery })
    })
    .catch(err => {
      console.log("err", err)
      return res.status(500).json({ message: "Internal Server Error" })
    })
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


module.exports = router;
