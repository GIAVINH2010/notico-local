const express = require('express');
const router = express.Router();
const moment = require('moment');

const configurations = require('../../models/confs');
const deliveries = require('../../models/deliveries');
const agencies = require('../../models/agencies');

router.get('/', async (req, res) => {
  try {
    const { cmdId } = req.query;
    const confs = await configurations.getConfs();
    // console.log("confs", confs);
    const delivery = await deliveries.getDelivery(cmdId);
    // console.log("delivery", delivery);
    const agency = await agencies.getAgencyByLabel(delivery.agenceLibelle);

    let slots = []
    agency.planning.map(plan => {
      if (plan.zone === parseInt(delivery.postCode))
        slots = plan.slots
    });

    const dates = [];
    if (delivery.delivWishedDate && delivery.delivWishedDate.length !== 0 && delivery.delivWishedEndDate && delivery.delivWishedEndDate.length !== 0 && moment(delivery.delivWishedEndDate).isSameOrAfter(moment())) {
      let dt = moment(delivery.delivWishedDate).isSameOrAfter(moment()) ? moment(delivery.delivWishedDate) : moment();

      while (dt.isSameOrBefore(delivery.delivWishedEndDate) && dates.length < 3) {
        dates.push(dt.format("DD-MM-YYYY"));
        dt.add(1, 'd');
      }
    }

    return res.render('page/apt', {
      title: "Appointment",
      cmdId: delivery.cmdId,
      customerName: delivery.name,
      dates,
      slots
      // ...confs
    });

  } catch (error) {
    console.log("error", error)
    return res.render('page/apt', {
      title: "Error",
    });
  }
})

module.exports = router