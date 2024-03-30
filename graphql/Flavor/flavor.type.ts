import { RestaurantType } from "graphql/Restaurant";
import { builder } from "graphql/builder";

export type FlavorType = {
  id: number;
  name: string;
  description: string;
  restaurantId: number;
  dateAdded: Date;
  restaurant: RestaurantType;
};

export type FindFlavorsQuery = {
  include?: any;
  select?: any;
};

export type FindFlavorArgs = {
  name: string;
};
//can also do t.relation for relationships
const Flavor = builder.prismaObject("Flavor", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description", { nullable: true }),
    restaurantId: t.exposeInt("restaurantId"),
    restaurant: t.relation("restaurant"),
  }),
  description: "A flavor",
  name: "Flavor",
});

export { Flavor };
