import express from "express";
var router = express.Router();

// get the list of avaible? groomers
router.get("/", async function (req, res, next) {
  try {
    let grommerList = await req.models.groomer.find({});
    console.log(grommerList);

    res.send({ status: "success", list: grommerList });
  } catch (error) {
    console.log("Error in endpoint get/", error);
    res.status(500).json({ status: "error", error: error });
  }
});

export default router;
