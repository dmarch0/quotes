const quotes = require("./quotes");
const authors = require("./authors");

module.exports = {
  ...quotes,
  ...authors
};
