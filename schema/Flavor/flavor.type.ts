import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export type FlavorType = {
  id: number;
  name: string;
  description: string;
  restaurantId: number;
};

export const Flavor = new GraphQLObjectType({
  name: "Flavor",
  description: "A flavor",
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: "The id of the flavor",
    },
    name: {
      type: GraphQLString,
      description: "The name of the flavor",
    },
    description: {
      type: GraphQLString,
      description: "The description of the flavor",
    },
    restaurantId: {
      type: GraphQLInt,
      description: "The id of the restaurant",
    },
  }),
});
