import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { FlavorQuery } from "graphql/Flavor/flavor.query";
import { FlavorMutation } from "graphql/Flavor/flavor.mutation";
import { builder } from "graphql/builder";
const Query = new GraphQLObjectType({
  name: "Query",
  description: "The base query",
  fields: {
    flavor: {
      type: FlavorQuery,
      description: FlavorQuery.description,
      resolve: () => {
        return {};
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "The base mutation",
  fields: {
    flavor: {
      type: FlavorMutation,
      description: FlavorMutation.description,
      resolve: () => {
        return {};
      },
    },
  },
});

// export const Schema = new GraphQLSchema({
//   query: Query,
//   mutation: Mutation,
// });

export const schema = builder.toSchema();
