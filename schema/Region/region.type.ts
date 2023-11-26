import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export type Region = {
  id: number;
  city: string;
  state: string;
  zip: string;
};

export const Region = new GraphQLObjectType({
  name: "Region",
  description: "A region",
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: "The id of the region",
    },
    city: {
      type: GraphQLString,
      description: "The city of the region",
    },
    state: {
      type: GraphQLString,
      description: "The state of the region",
    },
    zip: {
      type: GraphQLString,
      description: "The zip of the region",
    },
  }),
});
