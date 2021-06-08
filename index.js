const express = require("express");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require("./src/schema");
const resolvers = require("./src/resolvers");
const startDatabase = require("./src/database");
const expressPlayground = require("graphql-playground-middleware-express").default;

// Create a context for holding contextual data 
const context = async () => {
  const db = await startDatabase();

  return { db };
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context
  })
);

//Graphql Playground route
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

const port = process.env.PORT || "4000";

app.listen(port);

console.log(`🚀 Server ready at http://localhost:4000/graphql and http://localhost:4000/playground`);