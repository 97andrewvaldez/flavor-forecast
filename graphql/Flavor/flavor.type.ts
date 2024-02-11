import {builder } from "graphql/builder";

export type FlavorType = {
  id: number;
  name: string;
  description: string;
  restaurantId: number;
};

// const Flavor = new GraphQLObjectType({
//   name: "Flavor",
//   description: "A flavor",
//   fields: () => ({
//     id: {
//       type: GraphQLInt,
//       description: "The id of the flavor",
//     },
//     name: {
//       type: GraphQLString,
//       description: "The name of the flavor",
//     },
//     description: {
//       type: GraphQLString,
//       description: "The description of the flavor",
//     },
//     restaurantId: {
//       type: GraphQLInt,
//       description: "The id of the restaurant",
//     },
//   }),
// });

builder.prismaObject("Flavor", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description", { nullable: true }),
    restaurantId: t.exposeInt("restaurantId"),
  }),
});

