import express from "express";
var router = express.Router();
import { endOfDay } from "date-fns";
import { startOfDay } from "date-fns";


router.get("/", async function (req, res, next) {
    try{
    let date = req.query.date;
    date = new Date(date);
    // console.log(date);
    // let nextDate = date.setDate(date.getDate() + 1);
    //  console.log(new Date(nextDate));
    //   console.log(new Date(2023,9,13));
    let eventList = await req.models.appt
    .find()
      // .find({
      //   start: { $gte: startOfDay(new Date(date)), $lte: endOfDay(new Date(date)) },
      // })
      .populate("client_id")
      .populate("pet_id")
      .populate("groomer_id")
      .populate("service_id");
    console.log("eventlist: ", eventList)
    res.send({ status: "success", list: eventList });
    }catch(error){
         console.log("Error in endpoint get/", error);
         res.status(500).json({ status: "error", error: error });
    }


})

export default router;