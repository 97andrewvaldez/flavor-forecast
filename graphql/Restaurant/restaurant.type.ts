import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";
import { builder } from "graphql/builder";

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

builder.prismaObject("Restaurant", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description", { nullable: true }),
    phone: t.exposeString("phone", { nullable: true }),
    url: t.exposeString("url", { nullable: true }),
    flavorOfDayUrl: t.exposeString("flavorOfDayUrl"),
    regionId: t.exposeInt("regionId"),
  }),
});
