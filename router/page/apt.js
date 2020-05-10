const express = require("express");
const router = express.Router();
const moment = require("moment");

const db = require("../../mongodb");
const mongojs = require("mongojs");

const configurations = require("../../models/confs");
const deliveries = require("../../models/deliveries");
const agencies = require("../../models/agencies");

router.get("/", async (req, res) => {
  const { cmdId } = req.query;

  db.configuration.findOne(
    {},
    {
      c_conflogo: 1,
      c_logobo: 1,
    },
    (err, conf) => {
      console.log("err", err);

      db.deliveries.findOne(
        { cmdId: cmdId },
        {
          agenceLibelle: 1,
          cmdId: 1,
          name: 1,
          lang: 1,
          phone: 1,
          email: 1,
          street: 1,
          postCode: 1,
          city: 1,
          country: 1,
          delivWishedDate: 1,
          delivWishedEndDate: 1,
          delivWishedTime: 1,
          delivWishedEndTime: 1,
        },
        (err, delivery) => {
          console.log("err", err);
          console.log("delivery", delivery);

          db.plannings.findOne(
            { agencyName: delivery.agenceLibelle, zone: delivery.postCode },
            (err, planning) => {
              console.log("err", err);
              console.log("planning", planning);

              let dates = [{ value: moment(), label: moment()}];
              for (let i = 0; i < planning.duration; i++) {
                dates.push({
                  value: moment(dates[i].value).add(1, "d").format("YYYY-MM-DD"),
                  label: moment(dates[i].label).add(1, "d").format("LL")
                });
              }
              dates.shift();
              console.log("dates", dates);

              let slots = planning.slots.filter((slot) => slot.capacity > 0);
              console.log("slots", slots);

              return res.render("page/apt", {
                title: "Appointment",
                cmdId: delivery.cmdId,
                customerName: delivery.name,
                dates,
                slots,
                delivery: JSON.stringify(delivery),
                logo: conf.c_conflogo,
                logobo: conf.c_logobo,
                // ...confs
              });
            }
          );
        }
      );
    }
  );

  //   const confs = await configurations.getConfs();
  //   // console.log("confs", confs);
  //   const delivery = await deliveries.getDelivery(cmdId);
  //   // console.log("delivery", delivery);
  //   const agency = await agencies.getAgencyByLabel(delivery.agenceLibelle);

  //   let slots = [];
  //   agency.planning.map((plan) => {
  //     if (plan.zone === parseInt(delivery.postCode)) slots = plan.slots;
  //   });

  //   const dates = [];
  //   if (
  //     delivery.delivWishedDate &&
  //     delivery.delivWishedDate.length !== 0 &&
  //     delivery.delivWishedEndDate &&
  //     delivery.delivWishedEndDate.length !== 0 &&
  //     moment(delivery.delivWishedEndDate).isSameOrAfter(moment())
  //   ) {
  //     let dt = moment(delivery.delivWishedDate).isSameOrAfter(moment())
  //       ? moment(delivery.delivWishedDate)
  //       : moment();

  //     while (
  //       dt.isSameOrBefore(delivery.delivWishedEndDate) &&
  //       dates.length < 3
  //     ) {
  //       dates.push(dt.format("DD-MM-YYYY"));
  //       dt.add(1, "d");
  //     }
  //   }

  //   return res.render("page/apt", {
  //     title: "Appointment",
  //     cmdId: delivery.cmdId,
  //     customerName: delivery.name,
  //     dates,
  //     slots,
  //     // ...confs
  //   });
  // } catch (error) {
  //   console.log("error", error);
  //   return res.render("page/apt", {
  //     title: "Error",
  //   });
  // }
});

module.exports = router;
