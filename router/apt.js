const express = require('express');
const router = express.Router();

const deliveries = require('../models/deliveries');
const agencies = require('../models/agencies');
const apts = require('../models/apts');

router.get('/timeslots', async (req, res, next) => {
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
    return res.status(200).json({ slots })
  } catch (error) {
    console.log("error =>", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
})

router.post('/create', async (req, res) => {
  try {
    const data = req.body;
    console.log("data", data)
    const agency = await agencies.getAgencyByLabel(data.agenceLibelle);
    if (!agency) {
      return res.status(404).json({ message: 'Agency not found' });
    }
    const delivery = await deliveries.getDelivery(data.deliveryId);
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    const apt = await apts.createApt(data);
    if (Array.isArray(apt) && apt.length !== 0) {
      return res.status(400).json({ message: 'Apt existed' });
    }
    return res.status(200).json(apt);
  } catch (error) {
    console.log("error", error)
    return res.status(500).json({ message: 'Internal Server Error' });
  }
})

router.delete('/remove', async (req, res) => {
  try {
    const { aptId } = req.query;
    console.log("aptId", aptId);
    const deleted = await apts.deleteApt(aptId);
    console.log("deleted", deleted);
    return res.status(200).json(deleted);
  } catch (error) {
    console.log("error", error)
    return res.status(500).json({ message: 'Internal Server Error' });
  }
})

router.put('/update', async (req, res) => {
  try {
    const data = req.body;
    console.log("data", data);
    const _id = data.id;
    delete data.id;
    const updated = await apts.updateApt(_id, data);
    console.log("updated", updated);
    return res.status(200).json(updated);
  } catch (error) {
    console.log("error", error)
    return res.status(500).json({ message: 'Internal Server Error' });
  }
})



module.exports = router;
