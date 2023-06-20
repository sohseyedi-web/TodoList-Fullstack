const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    onCompleted: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todos", todoSchema);
