import express from "express";
import {
  getEvents,
  getEventByid,
  register,
  userEvent,
  deleteById,
  create,
  allParticipants,
} from "../controller/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getEvents);
router.route("/:id").get(getEventByid);
router.route("/create").post(create);
router.route("/register").post(protect, register);
router.route("/user/all").get(protect, userEvent);
router.route("/:id").delete(deleteById);
router.route("/participant/all/:id").get(allParticipants);

export default router;
