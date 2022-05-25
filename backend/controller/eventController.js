import Event from "../models/eventModel.js";
import asyncHandler from "express-async-handler";
import RegistrationModel from "../models/registrationModel.js";
import mongoose from "mongoose";

//@desc Fetch all event
//@route get /api/events
//@access public

const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});
  console.log("events:", events);
  res.json(events);
});

//@desc Fetch single event
//@route get /api/events/:id
//@access public

const getEventByid = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error("event not found");
  }
});

const register = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const { event } = req.body;
  const register = await RegistrationModel.create({ user, event });
  res.send({
    status: register,
  });
});

const userEvent = asyncHandler(async (req, res) => {
  const user = req.user._id;

  let query = req.user.isAdmin
    ? {}
    : { user: mongoose.Types.ObjectId(user._id) };

  const events = await RegistrationModel.find(query)
    .populate("event")
    .populate("user");
  res.send({
    status: true,
    events,
  });
});

const create = asyncHandler(async (req, res) => {
  const events = await Event.create(req.body);
  res.send({
    status: true,
    events,
  });
});

const deleteById = asyncHandler(async (req, res) => {
  const events = await Event.findByIdAndDelete(req.params.id);
  res.send({
    status: true,
    events,
  });
});

const allParticipants = asyncHandler(async (req, res) => {
  const particapnt = await RegistrationModel.find({
    event: req.params.id,
  }).populate("user");
  res.send({
    status: true,
    particapnt,
  });
});

export {
  getEvents,
  getEventByid,
  register,
  userEvent,
  deleteById,
  create,
  allParticipants,
};
