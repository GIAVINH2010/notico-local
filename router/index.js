const express = require('express');
const router = express.Router();

const deliveries = require('../models');

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

module.exports = router;
