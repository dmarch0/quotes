const Quote = require("../../models/quote");
const Author = require("../../models/author");
const isEmpty = require("../../utils/is-empty");
const { getAuthor, getQuotes } = require("./common");

module.exports = {
  quote: async args => {
    if (args.quoteId) {
      try {
        const quote = await Quote.findById(args.quoteId);
        if (!quote) {
          throw new Error("Quote not found");
        }
        return {
          ...quote._doc,
          author: getAuthor.bind(this, quote._doc.author)
        };
      } catch (error) {
        throw new Error("Quote not found");
      }
    }
    try {
      const quotesCount = await Quote.count();
      console.log(quotesCount);
      const random = Math.floor(Math.random() * quotesCount);
      const randomQuote = await Quote.findOne().skip(random);
      if (!randomQuote) {
        throw new Error("Quote not found");
      }
      return {
        ...randomQuote._doc,
        author: getAuthor.bind(this, randomQuote._doc.author)
      };
    } catch (err) {
      throw err;
    }
  },
  quotes: async () => {},
  quotesBy: args => {},
  addQuote: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthorized");
    }
    if (!args.quoteInput.text) {
      throw new Error("Text is required");
    }
    if (!args.quoteInput.authorId && !args.quoteInput.authorName) {
      //if no id and no name, check if unknown author already exists, if not, create one
      let author;
      const unknown = await Author.findOne({ name: "Unknown" });
      if (!unknown) {
        const newAuthor = new Author({
          name: "Unknown"
        });
        author = await newAuthor.save();
      } else {
        author = unknown;
      }
      const newQuote = new Quote({
        text: args.quoteInput.text,
        author: author._id
      });
      try {
        const result = await newQuote.save();
        author.quotes.push(result._id);
        const savedAuthor = await author.save();
        return {
          ...result._doc,
          author: getAuthor.bind(this, savedAuthor._id)
        };
      } catch (err) {
        throw new Error("Something went completely wrong!");
      }
    } else {
      //else if there is id or name, check for id first

      let author;
      try {
        if (args.quoteInput.authorId) {
          author = await Author.findById(args.quoteInput.authorId);
        } else if (args.quoteInput.authorName) {
          author = await Author.findOne({ name: args.quoteInput.authorName });
        }
      } catch (err) {
        throw new Error("Author not found");
      }
      if (!author) {
        throw new Error("Author not found");
      }
      const newQuote = new Quote({
        test: args.quoteInput.text,
        author: author._id
      });
      try {
        const result = await newQuote.save();
        author.quotes.push(result._id);
        const savedAuthor = await author.save();
        return {
          ...result._doc,
          author: getAuthor.bind(this, savedAuthor._id)
        };
      } catch (err) {
        throw new Error("Something went completely wrong!");
      }
    }
  },
  deleteQuote: args => {}
};
