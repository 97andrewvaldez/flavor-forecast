import {
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import { Flavor } from "schema/Flavor/flavor.type";
const CreateFlavor: GraphQLFieldConfig<any, any, any> = {
  type: Flavor,
  description: Flavor.description,
  args: {
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
  },
  resolve: (source, args) => {
    const flavor = {
      id: 1,
      name: args.name,
      description: args.description,
      restaurantId: args.restaurantId,
    };
    return flavor;
  },
};

export const FlavorMutation: GraphQLObjectType = new GraphQLObjectType({
  name: "FlavorMutation",
  description: "Flavor Mutations",
  fields: () => ({
    addFlavor: CreateFlavor,
  }),
});
