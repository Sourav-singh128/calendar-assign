const mongoose = require("mongoose");
const dateSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  date: { type: String, required: true },
  attendance: { type: String, required: true },
});

const CalDate = new mongoose.model("CalDate", dateSchema);

module.exports = CalDate;
