import express from 'express';
const router = express.Router();
import {protect} from '../middleware/authMiddleware.js';
import  updateUserSubscription  from '../controller/paymentController.js';

router.route('/').put(protect, updateUserSubscription);

export default router