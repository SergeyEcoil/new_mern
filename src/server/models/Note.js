import { Schema, model } from 'mongoose';

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
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Note', schema)
