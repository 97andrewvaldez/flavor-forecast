import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import { Flavor } from "graphql/Flavor/flavor.type";
import { findFlavor } from "graphql/Flavor/flavor.data";

const GetFlavorByName: GraphQLFieldConfig<any, any, any> = {
  type: Flavor,
  description: Flavor.description,
  args: {
    flavor: {
      type: GraphQLString,
      description: "A name or description to search for",
    },
  },
  resolve: (source, args) => {
    return findFlavor(args.flavor);
  },
};

const GetAllFlavors: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(Flavor),
  description: "Get all flavors",
  resolve: () => {
    return findFlavor("test");
  },
};

export const FlavorQuery = new GraphQLObjectType({
  name: "FlavorQuery",
  description: "Queries to get flavors",
  fields: () => ({
    flavor: GetFlavorByName,
    flavors: GetAllFlavors,
  }),
});
