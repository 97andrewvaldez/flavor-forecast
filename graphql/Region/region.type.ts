import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";
import { builder } from "graphql/builder";

export type Region = {
  id: number;
  city: string;
  state: string;
  zip: string;
};

// export const Region = new GraphQLObjectType({
//   name: "Region",
//   description: "A region",
//   fields: () => ({
//     id: {
//       type: GraphQLInt,
//       description: "The id of the region",
//     },
//     city: {
//       type: GraphQLString,
//       description: "The city of the region",
//     },
//     state: {
//       type: GraphQLString,
//       description: "The state of the region",
//     },
//     zip: {
//       type: GraphQLString,
//       description: "The zip of the region",
//     },
//   }),
// });

builder.prismaObject("Region", {
  fields: (t) => ({
    id: t.exposeID("id"),
    city: t.exposeString("city"),
    state: t.exposeString("state"),
    zip: t.exposeString("zip"),
  }),
});
