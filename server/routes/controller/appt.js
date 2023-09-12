import express from "express";
var router = express.Router();


router.get("/", async function (req, res, next) {
    try{
    let date = req.query.date;

    let eventList = await req.models.appt.find({start_date: date});
    res.send({ status: "success", list: eventList });
    }catch(error){
         console.log("Error in endpoint get/", error);
         res.status(500).json({ status: "error", error: error });
    }


})

export default router;