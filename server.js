const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const graphqlExpress = require("express-graphql");
const extractAuth = require("./utils/extract-authorization");

const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

//initialize app
const app = express();

//apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(extractAuth);
app.use(
  "/graphql",
  graphqlExpress({
    schema: schema,
    rootValue: resolvers,
    graphiql: process.env.NODE_ENV === "production" ? false : true
  })
);

//set up port
const port = process.env.PORT || 5000;

//connect db
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-tvstb.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("DB connected");
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(err => console.log(err));
