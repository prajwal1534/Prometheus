import mongoose, { Schema } from "mongoose";
const scSchema = new mongoose.Schema(
  {
    sc_name: {
      type: String,
      required: true,
    },
    sc_address: {
      type: String,
      required: true,
      unique: true,
    },
    tokens: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const sc = mongoose.models.sc || mongoose.model("sc", scSchema);
