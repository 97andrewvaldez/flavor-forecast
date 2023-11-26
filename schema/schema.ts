import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { FlavorQuery } from "schema/Flavor/flavor.query";
import { FlavorMutation } from "schema/Flavor/flavor.mutation";
export const typeDefs = `
  type Link {
    id: ID
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Query {
    links: [Link]!
  }
`;
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

export const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
