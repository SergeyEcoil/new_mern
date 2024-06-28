import { Schema, model } from "mongoose";

const weightSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { _id: false }
);

const fryoilSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { _id: false }
);

const noteSchema = new Schema(
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
      type: [weightSchema],
      default: [],
    },
    fryoil: {
      type: [fryoilSchema],
      default: [],
    },
    fryorder: {
      type: String,
      default: "",
    },
    usedprice: {
      type: String,
    },
    order: {
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

export default model("Note", noteSchema);
