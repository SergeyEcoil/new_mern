import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    house: {
      type: String,
    },
    weight: {
      type: String,
    },
    usedprice: {
      type: String,
    },
    order: {
      type: String,
    },
    fryoil: {
      type: String,
    },
    fryprice: {
      type: String,
    },
    worktime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Note", schema);
