import express from 'express'
import { getEvents, getEventByid } from '../controller/eventController.js'
const router = express.Router();

router.route('/').get(getEvents);
router.route('/:id').get(getEventByid);



export default router;