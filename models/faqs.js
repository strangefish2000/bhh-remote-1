//* MODEL / SCHEMA - faqs.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faqsSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

// Virtual for author's URL
faqsSchema.virtual("url").get(function() {
  return "/faqsController/faq/" + this._id;
});

//
const faqsModel = mongoose.model("Faqs", faqsSchema);

module.exports = faqsModel;
