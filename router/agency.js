const express = require("express");
const router = express.Router();

const db = require("../mongodb");
const mongojs = require("mongojs");

const agencies = require("../models/agencies");
const deliverymen = require("../models/deliverymen");
const plannings = require("../models/plannings");
const slots = require("../models/slots");

router.get("/agency", (req, res, next) => {
  agencies
    .getAgencyByLabel("DW OPTIM99")
    .then((agency) => {
      return res.status(200).json({ agency });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/create-agency", (req, res, next) => {
  const data = req.body;
  console.log("data", data);

  agencies.createAgency(
    {
      libelle: data.agencyName,
      lang: data.lang,
      adresse: data.address,
      login: data.login,
      passwd: data.passwd,
      timezone: data.timezone,
      planning: [],
    },
    (agency) => {
      console.log("agency", agency);
      return res.status(200).json(agency);
    }
  );
});

router.post("/create-planning", (req, res) => {
  const data = req.body;
  console.log("data", data);

  db.plannings.findOne(
    {
      agencyId: data.agencyId,
      zone: data.zone,
    },
    (err, plan) => {
      if (err) {
        console.log("Error message: ", err.message);
        return res.status(500).json({ message: err.message });
      }
      console.log("plan", plan);

      if (plan) {
        return res
          .status(500)
          .json({ message: `Planning ${plan._id} existed` });
      } else {
        db.plannings.save(data, (err, createdPlan) => {
          if (err) {
            console.log("Error message: ", err.message);
            return res.status(500).json({ message: err.message });
          }
          console.log("createdPlan", createdPlan);

          db.agences.findOne(
            {
              libelle: data.agencyName,
            },
            // {
            //   planning: 1,
            // },
            (err, agency) => {
              if (err) {
                console.log("Error message: ", err.message);
                return res.status(500).json({ message: err.message });
              }
              agency.planning.push(createdPlan._id);
              console.log("agency", agency);

              db.agences.save(agency, (err, updatedAgency) => {
                if (err) {
                  console.log("Error message: ", err.message);
                  return res.status(500).json({ message: err.message });
                }
                console.log("updatedAgency", updatedAgency);
                return res.status(200).json(updatedAgency);
              });
            }
          );
        });
      }
    }
  );
});

// router.post("/create-slots", (req, res) => {
//   const data = req.body;
//   console.log("data", data);

//   slots.createSlots(data.slots, (slots) => {
//     console.log("slots", slots);
//     slots = slots.map((slot) => slot._id);
//     plannings.editPlanning(
//       data.planId,
//       {
//         slots: slots,
//       },
//       (updatedPlan) => {
//         console.log("updatedPlan", updatedPlan);
//         return res.status(200).json({ slots, updatedPlan });
//       }
//     );
//   });
// });

router.put("/update-agency", (req, res) => {
  const data = req.body;
  const agencyId = data.agencyId;
  console.log("agencyId", agencyId);
  delete data.agencyId;
  console.log("data", data);

  db.agences.update(
    { _id: mongojs.ObjectId(agencyId) },
    {
      $set: data,
    },
    (err, updatedAency) => {
      if (err) {
        console.log("Error message: ", err.message);
        return res.status(500).json({ message: err.message });
      }
      console.log("updatedAency", updatedAency);
      return res.status(200).json(updatedAency);
    }
  );
});

router.delete("/remove-driver", (req, res) => {
  deliverymen
    .deleteDriver("Vinh")
    .then((deleted) => {
      console.log("deleted", deleted);
      return res.status(200).json(deleted);
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
});

// router.delete("/remove-slot", (req, res) => {
//   slots.removeAllSlots((deleted) => {
//     console.log("deleted", deleted);
//     return res.status(200).json(deleted);
//   });
// });

// router.delete("/remove-agency", (req, res) => {
//   const { agencyId } = req.query;
//   agencies.deleteAgency(agencyId, (deleted) => {
//     console.log("deleted", deleted);
//     return res.status(200).json(deleted);
//   });
// });

router.delete("/reset-all", async (req, res) => {
  const { agencyId, planningIds } = req.body;

  let slotP, planP, agencyP;

  // slotP = new Promise((resolve, reject) => {
  //   // slots.removeAllSlots((deletedSlots) => {
  //   //   console.log("deletedSlots", deletedSlots);
  //   //   resolve(deletedSlots);
  //   // });
  //   slots.dropCollection((dropedSlot) => {
  //     console.log("dropedSlot", dropedSlot);
  //     resolve(dropedSlot);
  //   });
  // });

  if (planningIds.length !== 0) {
    planP = new Promise((resolve, reject) => {
      plannings.deletePlanning(planningIds, (deletedPlan) => {
        console.log("deletedPlan", deletedPlan);
        resolve(deletedPlan);
      });
    });
  }

  if (agencyId) {
    agencyP = new Promise((resolve, reject) => {
      agencies.deleteAgency(agencyId, (deletedAgency) => {
        console.log("deletedAgency", deletedAgency);
        resolve(deletedAgency);
      });
    });
  }
  Promise.all([slotP, planP, agencyP]).then((values) => {
    console.log("values", values);
    return res.status(200).json(values);
  });
});

module.exports = router;
