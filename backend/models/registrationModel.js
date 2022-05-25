import mongoose from "mongoose";

const registrationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    event: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
