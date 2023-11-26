import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export type RestaurantType = {
  id: number;
  name: string;
  description: string;
  phone: string;
  url: string;
  flavorOfDayUrl: string;
  regionId: number;
  dateAdded: Date;
};

export const Restaurant = new GraphQLObjectType({
  name: "Restaurant",
  description: "A restaurant",
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: "The id of the restaurant",
    },
    name: {
      type: GraphQLString,
      description: "The name of the restaurant",
    },
    description: {
      type: GraphQLString,
      description: "The description of the restaurant",
    },
    phone: {
      type: GraphQLString,
      description: "The phone number of the restaurant",
    },
    url: {
      type: GraphQLString,
      description: "The url of the restaurant",
    },
    flavorOfDayUrl: {
      type: GraphQLString,
      description: "The url of the flavor of the day",
    },
    regionId: {
      type: GraphQLInt,
      description: "The id of the region",
    },
    dateAdded: {
      type: GraphQLString,
      description: "The date the restaurant was added",
    },
  }),
});
