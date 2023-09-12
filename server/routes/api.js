import express from 'express';
var router = express.Router();
import groomerRouter from './controller/groomer.js';
import apptRouter from './controller/appt.js'

router.use('/groomer', groomerRouter);
router.use('/appt', apptRouter);

export default router;
