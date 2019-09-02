const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Authors"
  }
});

module.exports = mongoose.model("Quotes", QuoteSchema);
