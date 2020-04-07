const express = require('express');
const router = express.Router();

const configurations = require('../../models/confs');

router.get('/', async (req, res) => {
  try {
    const confs = await configurations.getConfs();
    console.log("confs", confs);

    return res.render('page/apt', {
      title: "Appointment",
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