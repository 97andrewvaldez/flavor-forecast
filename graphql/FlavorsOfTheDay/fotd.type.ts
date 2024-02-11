import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";
import { builder } from "graphql/builder";
import { GraphQLString } from "graphql";

export type FlavorOfTheDay = {
  id: number;
  date: string;
  flavorId: number;
};

// export const FlavorOfTheDay = new GraphQLObjectType({
//   name: "FlavorOfTheDay",
//   description: "A flavor of the day",
//   fields: () => ({
//     id: {
//       type: GraphQLInt,
//       description: "The id of the flavor of the day",
//     },
//     date: {
//       type: GraphQLString,
//       description: "The date of the flavor of the day",
//     },
//     flavorId: {
//       type: GraphQLInt,
//       description: "The id of the flavor",
//     },
//   }),
// });


builder.prismaObject("FlavorsOfTheDay", {
  fields: (t) => ({
    id: t.exposeID("id"),
    date: t.exposeString("date"),
    flavorId: t.exposeInt("flavorId"),
  }),
});
