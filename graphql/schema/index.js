const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Quote {
        text: String!
        author: Author!
    }

    type Author {
        name: String!
        quotes: [Quote!]
    }

    input QuoteInput {
        text: String!
        authorName: String
        authorId: ID
    }

    type RootQuery {
        quotes: [Quote!]!
        quote(quoteId: ID!): Quote!
        quotesBy(author: ID!): [Quote!]!
        authors: [Author!]!
        author(authorId: ID!): Author!
    }

    type RootMutation {
        addQuote(quoteInput: QuoteInput): Quote!
        deleteQuote(quoteId: ID!): Quote!
        addAuthor(name: String!): Author!
        deleteAuthor(authorId: ID!): Author!
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);
