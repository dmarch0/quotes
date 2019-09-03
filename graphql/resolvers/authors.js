const Author = require("../../models/author");
const { getQuotes } = require("./common");

module.exports = {
  authors: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthorized");
      }
      const authors = await Author.find();
      return authors.map(author => ({
        ...author._doc,
        quotes: getQuotes.bind(this, author._doc.quotes)
      }));
    } catch (error) {
      throw error;
    }
  },
  author: async args => {
    try {
      const author = await Author.findById(args.authorId);
      if (!author) {
        throw new Error("Author not found");
      }
      console.log(author.quotes);
      return {
        ...author._doc,
        quotes: getQuotes.bind(this, author._doc.quotes)
      };
    } catch (error) {
      throw error;
    }
  },
  addAuthor: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthorized");
      }
      const author = await Author.find({ name: args.name });
      if (author) {
        throw new Error("Author already exists");
      }
      const newAuthor = new Author({ name: args.name });
      const result = await newAuthor.save();
      return {
        ...result._doc,
        quotes: getQuotes.bind(this, result._doc.quotes)
      };
    } catch (error) {
      throw error;
    }
  },
  deleteAuthor: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthorized");
      }
      const author = await Author.findByIdAndDelete(args.authorId);
      if (!author) {
        throw new Error("Author not found");
      }
      return {
        ...author._doc,
        quotes: getQuotes.bind(this, author._doc.quotes)
      };
    } catch (error) {
      throw error;
    }
  }
};
