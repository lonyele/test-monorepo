const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const cors = require("cors");
const app = express();

import {
  // apolloExpressConfig,
  // graphiqlExpressConfig,
  GRAPHQL_PORT
} from "./graphqlConfig";

app.use(cors());
app.get("/", (req: any, res: any) => res.send("Hello World!"));
// app.use("/graphql", bodyParser.json(), graphqlExpress(apolloExpressConfig));
// app.use("/graphiql", graphiqlExpress(graphiqlExpressConfig));
app.listen(GRAPHQL_PORT, () => {
  console.log(
    `Go to http://localhost:${GRAPHQL_PORT}/graphiql to run queries!`
  );
});
