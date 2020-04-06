const express = require('express');
const router = express.Router();

const agencies = require('../models/agencies');
const deliverymen = require('../models/deliverymen');

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
