import { createSchema, createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { Schema } from "schema/schema";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: Schema,
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
