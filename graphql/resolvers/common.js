const Author = require("../../models/author");
const Quote = require("../../models/quote");

const getAuthor = async id => {
  try {
    const author = await Author.findById(id);
    return {
      ...author._doc,
      quotes: getQuotes.bind(this, author.quotes)
    };
  } catch (err) {
    throw err;
  }
};

const getQuotes = async ids => {
  try {
    const quotes = await Quote.find({ _id: { $in: ids } });
    return quotes.map(quote => ({
      ...quote._doc,
      author: getAuthor.bind(this, quote.author)
    }));
  } catch (err) {
    throw err;
  }
};

exports.getAuthor = getAuthor;
exports.getQuotes = getQuotes;
